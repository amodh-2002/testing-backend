import express from "express";
const app = express()

const port = process.env.PORT || 3000

const getJokes = [
    {
        id:1,
        title:"Joke 1",
        joke:"Laugh at me 1"
    },
    {
        id:2,
        title:"Joke 2",
        joke:"Laugh at me 2"
    },
    {
        id:3,
        title:"Joke 3",
        joke:"Laugh at me 3"
    },
    {
        id:4,
        title:"Joke 4",
        joke:"Laugh at me 4"
    },
]

app.get("/api/jokes",(req,res)=>{
    res.send(getJokes)
})


app.listen(port,(req,res)=>{
    console.log(`listening at port "http://localhost${port}"`)
})