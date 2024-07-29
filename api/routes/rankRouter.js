const { Router } = require('express');
const rankRouter = Router();
const Rank = require('../models/rank');

rankRouter.post("/", async(req, res) => { //DB 저장
	const { userName, userRecord } = req.body;

	try {
		const newRank = new Rank({
			userName: userName,
			userRecord: userRecord,
		});

		await newRank.save();
		res.json();
	} catch (err) {
		console.error("저장실패:", error);
    res.status(500).json({ error: "저장실패" });
	}
});

rankRouter.get("/", async(req, res) => { //DB 조회
	try {
		const ranks = await Rank.find().sort({ userRecord: 1 }).limit(5); //기록 순서대로 불러오기(빠른 순서)
		res.json(ranks);
	} catch (err) {
		res.status(500).json({ err: "순위 데이터 불러오기 실패" });
	}
})

module.exports = { rankRouter }