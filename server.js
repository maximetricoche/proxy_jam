const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3008;

app.use(cors({ origin: "http://localhost:3000" }));

const playlistIds = [
	652109905, 751764391, 6156189524, 2474689942, 9559882142, 7532900862,
	11370702624, 11237471584, 6528108984, 9911094822, 7182512544, 6791265584,
	7182460504, 9959210002, 10820158102,
];

app.get("/deezer-playlists", async (req, res) => {
	try {
		const playlists = await Promise.all(
			playlistIds.map(async (id) => {
				const response = await fetch(`https://api.deezer.com/playlist/${id}`);
				const data = await response.json();
				return data;
			}),
		);

		res.json(playlists);
	} catch (error) {
		console.log("Erreur lors de la récupération des playlists :", error);
		res.status(500).send("Erreur serveur");
	}
});

const artistIds = [
	13923487, 7010729, 7829130, 4331, 4872268, 10246324, 12526056, 4512147,
	308253, 58707, 168047437, 102, 27, 482, 554792, 58801, 314777, 457, 259, 493,
];

app.get("/deezer-artists", async (req, res) => {
	try {
		const artists = await Promise.all(
			artistIds.map(async (id) => {
				const response = await fetch(`https://api.deezer.com/artist/${id}`);
				const data = await response.json();
				return data;
			}),
		);

		res.json(artists);
	} catch (error) {
		console.log("Erreur lors de la récupération des playlists :", error);
		res.status(500).send("Erreur serveur");
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
