const { agregarPost, obtenerPost } = require("./consultas");
const express = require('express');
const cors = require('cors');

const app = express();

var bodyParser = require('body-parser') //middleware


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido en puerto: http://localhost:${PORT}`);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());


app.get("/posts", async (req, res) =>{
    const posts = await obtenerPost()
    res.json(posts)
});

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    console.log(req.body)
    await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con exito")
})