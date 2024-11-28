const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 3008;

const DEEZER_API_URL = "https://api.deezer.com";

const allowlist = [
	"http://localhost:3000",
	"https://proxyapideezer.vercel.app/api",
];

app.use(cors({ origin: allowlist }));

// ********************** Fetch HomePage ***************************

// Playlist Top Banner
app.get("/api/chart/0/playlists", async (req, res) => {
	try {
		const response = await fetch(`${DEEZER_API_URL}/chart/0/playlists`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherches de playlist");
		}
		const data = await response.json();

		res.json(data);
	} catch (error) {
		if (error instanceof Error) {
			console.error("Erreur dans searchBannerPlaylist:", error.message);
		} else {
			console.error("Erreur inconnue dans searchBannerPlaylist");
		}
	}
});

// ********************** Fetch Playlists ******************************

// Playlist
app.get("/api/playlist/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/playlist/${id}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchPlaylist:", error.message);
		} else {
			console.error("Erreur inconnue dans searchPlaylist");
		}
	}
});

// Playlists Tracks
app.get("/api/playlist/:id/tracks", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/playlist/${id}/tracks`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchPlaylistTracks:", error.message);
		} else {
			console.error("Erreur inconnue dans searchPlaylistTracks");
		}
	}
});

// ********************** Fetch Artists ******************************

// Artists
app.get("/api/artist/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/artist/${id}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchArtist:", error.message);
		} else {
			console.error("Erreur inconnue dans searchArtist");
		}
	}
});

// Artist Albums
app.get("/api/artist/:id/albums", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/artist/${id}/albums`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchArtistAlbums:", error.message);
		} else {
			console.error("Erreur inconnue dans searchArtistAlbums");
		}
	}
});

// Related Artists
app.get("/api/artist/:id/related", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(
			`${DEEZER_API_URL}/artist/${id}/related&limit=5`,
		);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchRelatedArtsits:", error.message);
		} else {
			console.error("Erreur inconnue dans searchRelatedArtsits");
		}
	}
});

// Album With Most Fans
app.get("/api/album/:id/tracks", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/album/${id}/tracks`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchAlbumWithMostFans:", error.message);
		} else {
			console.error("Erreur inconnue dans searchAlbumWithMostFans");
		}
	}
});

// ********************** Fetch Albums ******************************

// Album
app.get("/api/album/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/album/${id}/`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchAlbum:", error.message);
		} else {
			console.error("Erreur inconnue dans searchAlbum");
		}
	}
});

// Albums Tracks
app.get("/api/album/:id/tracks", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/album/${id}/tracks`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchAlbumsTracks:", error.message);
		} else {
			console.error("Erreur inconnue dans searchAlbumsTracks");
		}
	}
});

// ********************** Fetch Search ******************************

// Search Query Artist
app.get("/api/search/artist", async (req, res) => {
	const { q } = req.query || "";

	try {
		const response = await fetch(`${DEEZER_API_URL}/search/artist?q=${q}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchQueryArtist:", error.message);
		} else {
			console.error("Erreur inconnue dans searchQueryArtist");
		}
	}
});

// Search Query Album
app.get("/api/search/album", async (req, res) => {
	const { q } = req.query || "";

	try {
		const response = await fetch(`${DEEZER_API_URL}/search/album?q=${q}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchQueryAlbum:", error.message);
		} else {
			console.error("Erreur inconnue dans searchQueryAlbum");
		}
	}
});

// Search Query Playlist
app.get("/api/search/playlist", async (req, res) => {
	const { q } = req.query || "";

	try {
		const response = await fetch(`${DEEZER_API_URL}/search/playlist?q=${q}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchQueryPlaylist:", error.message);
		} else {
			console.error("Erreur inconnue dans searchQueryPlaylist");
		}
	}
});

// Search Query Track
app.get("/api/search/track", async (req, res) => {
	const { q } = req.query || "";

	try {
		const response = await fetch(`${DEEZER_API_URL}/search/track?q=${q}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchQueryTrack:", error.message);
		} else {
			console.error("Erreur inconnue dans searchQueryTrack");
		}
	}
});

// ********************** Fetch Track ******************************

// Track
app.get("/api/track/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const response = await fetch(`${DEEZER_API_URL}/track/${id}`);
		if (!response.ok) {
			throw new Error("Erreur lors de la recherche des pistes d'une playlist");
		}
		const data = await response.json();
		res.json(data);
	} catch (error) {
		if (error) {
			console.error("Erreur dans searchTrack:", error.message);
		} else {
			console.error("Erreur inconnue dans searchTrack");
		}
	}
});

app.listen(PORT, () => {
	console.log(`Proxy server running on port : ${PORT}`);
});
