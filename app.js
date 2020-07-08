const express = require('express');
const app = express();

require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hola servidor a hola')
});



const PORT = process.env.PORT || 3333;

app.listen(3000, () => { console.log(`Servidor escuchando en puerto 3000 ${PORT}`) });
