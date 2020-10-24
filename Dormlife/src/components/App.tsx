import React from "react";
import { Route, Switch } from "react-router-dom"
import Signup from './signup/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import DormFinder from "./signup/DormFinder";
import Home from "./home/Home";
import DormOwner from "./signup/DormOwner";
import Signin from "./signin/Signin";
import Dorm from "./dorm/Dorm"
import Forgetpassword from "./signin/Forgetpassword";
import Repassword from "./signin/Repassword";
import MainLobby from "./lobby/mainLobbyPage/MainLobby";
import CreatePage from "./lobby/CreateLobbyPage/CreatePage";
import Lobby from "./lobby/LobbyPage/Lobby";
import { socketContext, useSocket } from "../contexts/socket.context";
import Chatpage from "./lobby/Chatpage/Chatpage";
function App() {
    return (
        <socketContext.Provider value={useSocket()}>
        <div style={{textAlign:"center"}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signup/dormfinder" component={DormFinder} />
                <Route exact path="/signup/dormowner" component={DormOwner} />
                <Route exact path="/dorm/:id" component={Dorm} />
                <Route exact path="/signin/forgetpassword" component={Forgetpassword} />
                <Route exact path="/signin/repassword/:id" component={Repassword} />
                <Route exact path="/lobby" component={MainLobby} />
                <Route exact path="/lobby/create" component={CreatePage} />
                <Route exact path="/lobby/:lobbyID/:userID" component={Lobby} />
                <Route exact path="/lobby/:lobbyID/chat/:userID" component={Chatpage} />
            </Switch>
        </div>
        </socketContext.Provider>
    )
}
export default App;