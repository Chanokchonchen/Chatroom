import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackButton from "../mainLobbyPage/BackButton";
import LobbyService from "../../../services/lobby.service"
import { useSocket } from "../../../contexts/socket.context";
import { token1 } from "../../test"

const CreatePage = () => {
  const socket = useSocket()
  const history = useHistory();
  const [form,setForm] = useState({dormName : "" , roomType:""})
  const handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value
    setForm((prev) => {
        return {...prev , [name] : value}
    })
  }
  const handleGoBack = () => {
    history.goBack();
  };
  const handleSubmit = async () => {
    const lobby = {...form,token : token1,maxMember : 4} 
    const lobbyID : string = await LobbyService.createLobby(lobby)
    history.push(`/lobby/${lobbyID}`)
    socket.emit("addlobby")
  }
  const handleForm = (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit()
  }
  return (
    <>
      <BackButton handleGoBack={handleGoBack} />
      <br />
      <form onSubmit={handleForm}>
      <label>Dorm Name</label>
      <br />
      <input name="dormName" value={form.dormName} onChange={handleChangeInput} placeholder="Enter Dorm Name" />
      <br />
      <label>Room Type</label>
      <br />
      <input name="roomType" value={form.roomType} onChange={handleChangeInput} placeholder="Enter Room Type " />
      <br />
      <button type="submit">Create</button>
      </form>
      <button onClick={handleGoBack}>Cancel</button>
    </>
  );
};
export default CreatePage;
