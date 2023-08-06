const { Pool } = require('pg') //CLASE POOL: multiconexiones y mejor rendimiento

const pool = new Pool({
host: 'localhost',
user: 'javi',
password: 'admin',
database: 'likeme',
port: 5432,
allowExitOnIdle: true //cerrar la conexión luego de cada consulta
})

const agregarPost = async (titulo, url, descripcion) => {  
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log('Post agregado con exito')
    return result 
    }
    
const obtenerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}

module.exports = {agregarPost, obtenerPost};