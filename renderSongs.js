function extractYouTubeId(url) {
  const regex = /(?:youtube\.com.*[?&]v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function extractSpotifyId(url) {
  const parts = url.split("/");
  const id = parts.pop().split("?")[0];
  const type = url.includes("album") ? "album" : "track";
  return { id, type };
}

const grid = document.querySelector(".song-grid");

songs.forEach((song) => {
  const videoId = extractYouTubeId(song.youtube);
  const { id: spotifyId, type: spotifyType } = extractSpotifyId(song.spotify);

  const card = document.createElement("div");
  card.className = "song-card";

  card.innerHTML = `
    <div class="media-container" data-video="${videoId}" data-image="${song.image}">
      <img
        loading="lazy"
        src="${song.image}"
        alt="${song.title}"
        class="clickable-image"
      />
    </div>
    <h2>${song.title}</h2>
    <div class="buttons">
      <a href="${song.youtube}" target="_blank">YouTube</a>
      <a href="${song.spotify}" target="_blank">Spotify</a>
      <a href="${song.hyperfollow}" target="_blank">Hyperfollow</a>
    </div>
    <div class="spotify-embed">
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/${spotifyType}/${spotifyId}?utm_source=generator"
        width="100%" height="80" frameborder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  `;

  grid.appendChild(card);
});

document.addEventListener("click", (e) => {
  const container = e.target.closest(".media-container");
  if (!container) return;

  const videoId = container.dataset.video;
  const image = container.dataset.image;

  if (e.target.tagName === "IMG") {
    container.innerHTML = `
      <iframe
        width="100%" height="200"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="clickable-embed"
      ></iframe>
    `;
  } else if (e.target.tagName === "IFRAME") {
    container.innerHTML = `
      <img loading="lazy" src="${image}" alt="Cover image" class="clickable-image" />
    `;
  }
});
