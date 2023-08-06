const { addPost, getPost } = require("./consultas");
const express = require('express');
const cors = require('cors');


var bodyParser = require('body-parser') //middleware
const app = express();

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor encendido en puerto ${PORT}`);
});

//permite acceder a la información de un payload
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ // middleware para convertir datos a JSON
    extended: true,
  }),
);

//Intercambio de recursos de origen cruzado: Permite la comunicación de 2 aplicaciones de orígenes o dominios diferentes
app.use(cors());

//método para entregar información a partir de una consulta
app.get("/posts", async (req, res) =>{
    const posts = await getPost()
    res.json(posts)
});


app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body //almacenando en una constante el payload
    console.log(req.body)
    await addPost(titulo, url, descripcion) 
    res.send("Post agregado con exito") 
})