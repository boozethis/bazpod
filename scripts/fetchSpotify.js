// scripts/fetchSpotify.js

const fs = require("fs");
const fetch = require("node-fetch");

// ✅ Replace these before committing public code
const CLIENT_ID = "662913e8548d497f94deb01c4e0e6992";
const CLIENT_SECRET = "e5d421a584e742699f1e5229d0bec400";
const ARTIST_ID = "4sq3Qy5cc3XkRiEAurm6yC";

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  const data = await res.json();
  return data.access_token;
}

async function getReleases(token) {
  const res = await fetch(`https://api.spotify.com/v1/artists/${ARTIST_ID}/albums?include_groups=single&market=GB&limit=20`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  const data = await res.json();
  return data.items;
}

async function main() {
  const token = await getAccessToken();
  const releases = await getReleases(token);

  const songs = releases.map((release) => {
    return {
      title: release.name,
      img: release.images[0]?.url || "",
      spotify: release.external_urls.spotify,
      youtube: "#", // You can manually update this later
      hyperfollow: "#" // Optional: populate manually or match a pattern
    };
  });

  const jsContent = `
const songs = ${JSON.stringify(songs, null, 2)};

const grid = document.querySelector(".song-grid");
songs.forEach(song => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = \`
    <img src="\${song.img}" alt="\${song.title}" />
    <h2>\${song.title}</h2>
    <div class="buttons">
      <a href="\${song.youtube}" target="_blank">YouTube</a>
      <a href="\${song.spotify}" target="_blank">Spotify</a>
      <a href="\${song.hyperfollow}" target="_blank">Hyperfollow</a>
    </div>
  \`;
  grid.appendChild(card);
});
`;

  fs.writeFileSync("songs.js", jsContent.trim());
  console.log("✅ songs.js updated from Spotify releases");
}

main();
