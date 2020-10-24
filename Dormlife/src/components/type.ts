import { ObjectID } from "mongodb"


//token 

export interface Token {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
    profilepic : number 
}

//Style

export interface Style {
    classes?: any;
}

//Lobby Props

export interface user {
    userID : string,
    name : {
        firstName : string,
        lastName : string
    }
    ready : boolean,
    profilepic : number
}

export interface chat {
    author : string,
    userID : string,
    message : string,
    profilepic : number
    time : Date
}

export interface Lobby {
    _id? : ObjectID
    dormName : string,
    roomType : string,
    owner : user,
    member : user[]
    chat : chat[]
    maxMember : number
}

//Lobby MainPage

export interface LobbyRowProps {
    dormName : string,
    roomType : string,
    _id? : ObjectID
}
export interface backButtonProps {
    handleGoBack : () => void
}

export interface CreateLobbyProps {
    handleRouting : (s : string) => void
}

export interface JoinCodeProps {
    handleRouting : (s : string) => void
}
export interface ModalMainPageProps {
    show : boolean,
    handleClose : ()=> void,
    handleRouting : (s : string) => void
}
export interface LobbyListProps {
    lobbylist : Lobby[]
}

export interface SearchLobbyProps {
    handleSubmit : (s : string) => void
}

//Lobby LobbyPage

export interface ChatRoomProps {
    handleGoChatPage : () => void
}

export interface CloseLobbyProps {
    handleCloseLobby : () => void,
    disable : boolean
}

export interface DeleteLobbyProps {
    handleDelete : () => void
}

export interface HomeButtonProps {
    handleGoHome: () => void;
}

export interface ImagesProps {
    attr : user,
    key : number,
    index : number
}

export interface ImagesListProps {
    member : user[] ,
    maxMember : number,
    isOwner : boolean,
    handleKick : (userID : string) => void
}

export interface ImagesOwnerProps {
    attr : user
    handleKick : (userID : string) => void,
    index : number
}

export interface LeaveLobbyProps {
    handleLeave : () => void
}

export interface ModalLobbyPageProps {
    show: boolean,
    action: string,
    handleAction: () => void,
    handleCancel : ()=> void
}

export interface ReadyProps {
    handleReady : () => void,
    text : string
}

//Lobby ChatPage

export interface ChatBoxProps {
    handleSubmit : (message : string) => void
}

export interface ChatListProps {
    children: React.ReactNode
}

export interface propsSendMessage {
    author : string,
    userID : string,
    message : string,
    profilepic : number
}

export interface propsReceiver {
    author : string,
    userID : string,
    message : string,
    profilepic : number,
    time? : Date
}

export interface propsSender {
    author : string,
    userID : string,
    message : string,
    profilepic : number,
    time? : Date
}

