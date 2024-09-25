const express = require("express");
const app = express();

// Ruta principal - para que responda algo
app.get("/",(req, res)=>{
    res.send("Back End Deploy !!##oooOooo##!!");
});

// const PORT = 3000; // Manera Local
// console.log(process.env.PORT)

const PORT = process.env.PORT || 3000;
//console.log(PORT);

// process.env.PORT si esta en el entorno del servidor (VARIABLES DE ENTORNO) me asigna 
// un puerto, sino uso el 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
