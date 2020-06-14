const express = require("express")
const app = express()
const router = require("./routes/index.js")
const port = 3000 || process.env.PORT

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router)


app.listen(port, () => console.log(`app listening on port ${port}`))
