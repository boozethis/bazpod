function extractSpotifyId(url) {
  const parts = url.split("/");
  const id = parts.pop().split("?")[0];
  return url.includes("album") ? `album/${id}` : `track/${id}`;
}

const grid = document.querySelector(".song-grid");

songs.forEach((song) => {
  const card = document.createElement("div");
  card.className = "song-card";

  card.innerHTML = `
    <img loading="lazy" src="${song.image}" alt="${song.title}" />
    <h2>${song.title}</h2>
    <div class="buttons">
      <a href="${song.youtube}" target="_blank">YouTube</a>
      <a href="${song.spotify}" target="_blank">Spotify</a>
      <a href="${song.hyperfollow}" target="_blank">Hyperfollow</a>
    </div>
    <div class="spotify-embed">
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/${extractSpotifyId(song.spotify)}?utm_source=generator"
        width="100%" height="80" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
      </iframe>
    </div>
  `;

  grid.appendChild(card);
});
