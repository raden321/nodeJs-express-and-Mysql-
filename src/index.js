require('dotenv').config()
const express  = require("express");
const PORT = process.env.PORT || 5000;
const midlewareRequest = require('./middleware/logs')
const app = express();
const userRoutes = require('./routers/user');
const upload = require('./middleware/mluter.js')
//app.method (path, handler)

//app.use("/", (req, res, next) => {
//    res.send("Hello world");
//})
app.use(midlewareRequest);
app.use(express.json());
app.use("/asset", express.static('public'))

app.post("/upload",upload.single('photo'), (req, res) => {
    res.json({
        message: "upload berhasil"
    });
})
//app.use((req, res, next) => {
//    console.log("Midleware ke dua");
//    next();
//});
// Create the connection pool. The pool-specific settings are the defaults

app.use("/users", userRoutes)
//app.get("/", (req, res) => {
//    res.send("sedang menjalankan perintah get");
//});
//
//app.post("/", (req, res) => {
//    res.send("method post dijalankan");
//});
app.post("/json", (req, res) => {
       res.json({
        message: "method post json sedang dijalankan",
       })
});

app.listen(PORT, () => {
    console.log(`server berhasil di running di port ${PORT}`); 
})