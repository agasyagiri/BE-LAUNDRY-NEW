//import
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//implementasi
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoint nanti ditambahkan di sini

//endpoint user
const user = require('./routes/user');
app.use("/user", user)

//endpoint paket
const paket = require('./routes/paket');
app.use("/paket", paket)

//endpoint transaksi
const transaksi = require('./routes/transaksi');
app.use("/transaksi", transaksi)

//run server
app.listen(8080, () => {
  console.log("server run on port 8080");
});
