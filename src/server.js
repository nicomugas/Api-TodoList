const express = require("express");
const morgan = require("morgan"); 
const server = express();


//swagger 
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const path = require("path")

const swaggerSpec = {
    definition: {
        openapi:"3.0.0",
        info: {title: "To-Do List API", version:"1.0.0"},
    },
    apis:[`${path.join(__dirname,"./routes/index.js")}`],
    
}

server.use(morgan("dev"));
server.use(express.json());
server.use(require("./routes"));
server.use("/doc-api", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)));

server.use("*", (req,res) => {
    res.status(400).send("Not found");
});

server.use((err, req, res, next)=>{
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });
})


module.exports = server;
