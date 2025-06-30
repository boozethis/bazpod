const fs = require("fs");
const fetch = require("node-fetch");

const CLIENT_ID = "662913e8548d497f94deb01c4e0e6992";
const CLIENT_SECRET = "e5d421a584e742699f1e5229d0bec400";
const ARTIST_ID = "4sq3Qy5cc3XkRiEAurm6yC";

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const getReleases = async (accessToken) => {
  const url = `https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single,album&limit=50&market=GB`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const data = await response.json();
  return data.items;
};

const loadExistingLinks = () => {
  if (!fs.existsSync("songs.js")) return {};
  const raw = fs.readFileSync("songs.js", "utf-8");
  const match = raw.match(/const songs = (\[.*\]);/s);
  if (!match) return {};

  try {
    const songs = JSON.parse(match[1]);
    const linkMap = {};
    songs.forEach((song) => {
      linkMap[song.title] = {
        youtube: song.youtube,
        hyperfollow: song.hyperfollow,
      };
    });
    return linkMap;
  } catch {
    return {};
  }
};

const saveSongs = (songs) => {
  const output = `const songs = ${JSON.stringify(songs, null, 2)};`;
  fs.writeFileSync("songs.js", output);
};

(async () => {
  const accessToken = await getAccessToken();
  const releases = await getReleases(accessToken);
  const links = loadExistingLinks();

  const songs = releases
    .map((release) => {
      const existing = links[release.name] || {};
      const url = release.external_urls.spotify;
      const image = release.images[0]?.url || "";
      return {
        title: release.name,
        image,
        spotify: url,
        youtube: existing.youtube || "#",
        hyperfollow: existing.hyperfollow || "#",
      };
    })
    // Sort oldest to newest
    .sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

  saveSongs(songs);
})();
