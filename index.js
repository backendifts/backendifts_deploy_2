const express = require("express");
const app = express();

// Ruta principal - para que responda algo
app.get("/",(req, res)=>{
    res.send("Back End Deploy !!####!!");
});

// const PORT = 3000; // Manera Local
// console.log(process.env.PORT)

const PORT = process.env.PORT || 3000;
//console.log(PORT);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
