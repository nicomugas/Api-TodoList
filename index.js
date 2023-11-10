const server = require("./src/server");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=> {
    console.log(`Server is running on PORT:${PORT}`);
    
})