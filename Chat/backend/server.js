const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
mongoose.connect("mongodb://localhost:27017/LobbyDB",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const lobbySchema = new mongoose.Schema({
    dormName : String,
    roomType : String,
    owner : {
        userID : String,
        name : {
            firstName : String,
            lastName : String
        },
        ready : Boolean,
        profilepic : Number
    },
    member : { type : 
        [
        {
            userID : String,
            name : {
                firstName : String,
                lastName : String
            },
            ready : Boolean,
            profilepic : Number
        }
    ] , default:[]},
    chat : { type :
        [
            {
                author : String,
                userID : String,
                message : String,
                time : {
                    type : Date,
                    default : Date.now
                },
                profilepic : Number
            } 
        ] , default : []
    },
    maxMember : Number
})


const Lobbys = mongoose.model("Lobby",lobbySchema)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())

app.get("/lobbies",async (req,res) => {
    console.log("Get")
    const result = await Lobbys.find()
    res.send(result)
})

app.post("/lobbies" , async (req,res) => {
    const lobby = new Lobbys ({
        dormName : req.body.dormName,
        roomType : req.body.roomType, 
        maxMember : req.body.maxMember,
        owner : {
            userID : req.body.token.userID,
            name : {
                firstName : req.body.token.name.firstName,
                lastName : req.body.token.name.lastName
            },
            ready : true,
            profilepic : req.body.token.profilepic
        },
        member : [{
            userID : req.body.token.userID,
            name : {
                firstName : req.body.token.name.firstName,
                lastName : req.body.token.name.lastName
            },
            ready : true,
            profilepic : req.body.token.profilepic
        }]
    })
    const result = await Lobbys.create(lobby)
    res.send(result.id)

})

app.post("/lobbies/:lobbyID/join", async (req,res) => {
    const lobbyID = req.params.lobbyID
    const newuser = {
        userID : req.body.userID,
        name : {
            firstName : req.body.name.firstName,
            lastName : req.body.name.lastName
        },
        ready : false,
        profilepic : req.body.profilepic
    }
    const result =  await Lobbys.findOneAndUpdate({_id : lobbyID},{$addToSet: { member:  newuser}},(err,doc)=> {
        if (err) {
            console.log(err)
        } 
    })
    console.log(result)
    res.sendStatus(200)
})


app.post("/lobbies/:lobbyID/ready" , async (req,res) => {
    const lobbyID = req.params.lobbyID
    const userID = req.body.userID
    const result = await Lobbys.findOne({_id : lobbyID})
    result.member.forEach(mem => {
        if (mem.userID === userID) {
            mem.ready = !mem.ready
        }
    })
    await result.save()
    res.send(result)
})

app.get("/lobbies/:lobbyID", async (req,res) => {
    const lobbyID = req.params.lobbyID
    const result = await Lobbys.findOne({_id : lobbyID})
    res.send(result)
})

app.get("/lobbies/:lobbyID/chat",async (req,res) => {
    const lobbyID = req.params.lobbyID
    const result = await Lobbys.findOne({_id : lobbyID})
    res.send(result.chat) 
})

app.post("/lobbies/:lobbyID/chat",async (req,res) => {
    const lobbyID = req.params.lobbyID
    const chat = {
        author : req.body.author,
        userID : req.body.userID,
        message : req.body.message,
        time  : Date.now(),
        profilepic : req.body.profilepic
    }
    const result =  await Lobbys.findOneAndUpdate({_id : lobbyID},{$addToSet: { chat : chat }},{new : true})
    res.send(result.chat)
})
app.post("/lobbies/:lobbyID/kick", async (req,res) => {
    const lobbyID = req.params.lobbyID
    const userID = req.body.userID
    var result = await Lobbys.findOne({_id : lobbyID})
    result.member = result.member.filter(mem => mem.userID !== userID )
    await result.save()
    res.send(result)
})
app.post("/lobbies/:lobbyID/leave" , async (req,res) => {
    const lobbyID = req.params.lobbyID
    const userID = req.body.userID
    var result = await Lobbys.findOne({_id : lobbyID})
    result.member = result.member.filter(mem => mem.userID !== userID )
    await result.save()
    res.send(result)
})

app.post("/lobbies/:lobbyID/delete" , async (req,res) => {
    const lobbyID = req.params.lobbyID
    await Lobbys.deleteOne({_id : lobbyID})
    res.sendStatus(200)
})
app.post("/lobbies/:lobbyID/close" , async (req,res) => {
    const lobbyID = req.params.lobbyID
    await Lobbys.deleteOne({_id : lobbyID})
    res.sendStatus(200)
})


const server =  app.listen(2000,()=> {
    console.log("Server is running on port 2000");
})
const io = require('socket.io').listen(server)

io.on('connection', socket => {
    console.log('a user connected')
    socket.on("addlobby",()=> {
        io.emit("addlobby")
    })
    socket.on("join" ,() => {
        io.emit("join")
    })
    socket.on("ready" ,()=> {
        io.emit("ready")
    })
    socket.on("message", ()=> {
        io.emit("message")
    })
    socket.on("leave",()=> {
        io.emit("leave")
    })
    socket.on("delete",()=> {
        io.emit("delete")
    })
    socket.on("close",()=> {
        io.emit("close")
    })
    socket.on("kick",(userID)=> {
        io.emit("kick",userID)
    })

})