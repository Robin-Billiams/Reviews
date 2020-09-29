const app = require("./app")
const port = 3001

app.listen(port, () => {
    console.log(`Reviews module Server.js server listening on http://localhost:${port}`)
})