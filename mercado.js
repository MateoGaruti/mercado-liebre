let express = require ("express")

let app = express ();

let path = require ("path");

app.listen (1000, () => console.log ("MERCADO ON")); // INICIO DE LA PAGINA WEB


const public = path.resolve (__dirname, "./public") // parado en la carpeta public // con esto logro que mi imagen aprezaca

const static = express.static (public) // aca ejecuto la carpeta public 

app.use (static)

app.get ("/",(req, res) => {
    let htmlPath = path.resolve (__dirname, "./views/indes.html")
    res.sendFile (htmlPath)
})

app.get ("/login",(req,res)=>{
    let htmlPath = path.resolve (__dirname, "./views/login.html")
    res.sendFile (htmlPath)
})

