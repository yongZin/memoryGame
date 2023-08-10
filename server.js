require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { rankRouter } = require('./routes/rankRouter');

const app = express();
const PORT = 4000;

mongoose.connect( // MongoBD 클러스터 연결 (admin / Tdm6NtGLhGB9bRgp)
	process.env.MONGO_URI
)
.then(() => {
	console.log("mongoDB Conneected.");

	app.use(express.json()); //req.body를 json형식으로 변경(미들웨어 설정)
	app.use("/ranks", rankRouter);
	app.listen(PORT, () => console.log("Express server listening on PORT " + PORT));
})
.catch((err) => console.log(err))