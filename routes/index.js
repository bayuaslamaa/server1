const express = require("express")
const router = express.Router()


router.get("/",(req, res)=>res.send("<h1>Hello Indo!</h1>"))
router.get("/karyawan", (req, res) => {
	let data = {
		"msg": "ini routingan karyawan ",
		"status": 200
	}
	res.status(200).json(data)
})
router.post("/karyawan" , (req, res) => {
	const {name, position, year} = req.body
	res.status(201).json({name, position, year})
})

module.exports = router

//http request: get(read), post(create),  patch/put(update), delete(delete)
