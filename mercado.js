let express = require ("express")

let app = express ();

let path = require ("path");
const { env } = require("process");

const public = path.resolve (__dirname, "./public") // parado en la carpeta public // con esto logro que mi imagen aprezaca

const static = express.static (public) // aca ejecuto la carpeta public 

const port = process.env.PORT || 1000;

app.listen (port, () => console.log ("MERCADO ON")); // INICIO DE LA PAGINA WEB

app.use (static)

app.get ("/",(req, res) => {
    let htmlPath = path.resolve (__dirname, "./views/indes.html")
    res.sendFile (htmlPath)
})

app.get ("/registro",(req,res)=>{
    let htmlPath = path.resolve (__dirname, "./views/registro.html")
    res.sendFile (htmlPath)
})


app.get ("/login",(req,res)=>{
    let htmlPath = path.resolve (__dirname, "./views/login.html")
    res.sendFile (htmlPath)
})

