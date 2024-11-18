const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3008;

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		allowedHeaders: ["Content-Type"],
	}),
);

app.get("/deezer-playlists", async (req, res) => {
	try {
		const response = await fetch("https://api.deezer.com/search?q=k-pop");
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération des playlists" });
	}
});

app.get("/deezer-artists", async (req, res) => {
	try {
		const response = await fetch("https://api.deezer.com/search?q=tendances");
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res
			.status(500)
			.json({ error: "Erreur lors de la récupération des artistes" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
