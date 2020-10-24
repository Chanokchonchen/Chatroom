import React , {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import BackButton from "./BackButton";
import CreateLobby from "./CreateLobby";
import JoinCode from "./JoinCode";
import LobbyList from "./LobbyList";
import SearchBar from "./SearchBar"
import { Lobby } from "../../type"
import lobbyService from "../../../services/lobby.service"
import { useSocket } from "../../../contexts/socket.context";
function MainLobby() {
  const history = useHistory();
  const socket = useSocket();
  const [lobbylist,setLobbyList] = useState<Lobby[]>([])

  const handleRouting = (s : string) => {
    history.push(s);
  }
  const handleGoBack = () => {
    history.goBack();
  }
  const handleSubmit = (s : string) => {
    // search by parameter & set new State 
    alert(s)
    setLobbyList([])
  }

  const getAllLobbys = async () => {
    const allLobbys = await lobbyService.getLobbys();
    setLobbyList(allLobbys)
  }

  useEffect(() => {
    getAllLobbys()
    socket.on("addlobby",()=> {
      getAllLobbys()
      
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div>
      <BackButton handleGoBack={handleGoBack} />
      <h1>Main Lobby</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <LobbyList lobbylist={lobbylist}/>
      <JoinCode handleRouting={handleRouting} />
      <CreateLobby handleRouting={handleRouting} />
    </div>
  );
}
export default MainLobby;
