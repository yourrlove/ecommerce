const app = require("./src/app");  

const PORT = process.env.DEV_APP_PORT || 3055

const server = app.listen( PORT, () => {
    
    console.log(`Connected: ${PORT}`)
})

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit!`))
})