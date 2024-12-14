const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res)=>{
    var nome="Jaqueline"

    res.render("aula",{
      nomeome:nome
    })

})


// app.get("/perfil",(req,res)=>{
//     res.send("s<h1>site senac rota2s<h1>")

// })

// app.get("/blog",(req,res)=>{
//     res.send("<br><hr><h1>site senac rotas3</h1><hr")

// })


app.listen(8081, () => (

    console.log("servidor")
))