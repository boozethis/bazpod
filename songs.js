const songs = [
  {
    title: "Quokka Mocha Cocker",
    img: "assets/quokka-mocha-cocker.png",
    youtube: "https://youtu.be/VKX9BjoBF2U?si=awERV4egchmga4ua",
    spotify: "https://open.spotify.com/track/6nhHKkRH2mK3TfdaVv3pkY",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/quokka-mocha"
  },
  {
    title: "Crannchu na Coille",
    img: "assets/crannchu na coille.png",
    youtube: "#",
    spotify: "https://open.spotify.com/album/2TXC3eU1j9fb93ncMzTbwD",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/crannchu-na-coille"
  },
  {
    title: "Kitty Coconutty",
    img: "assets/kitty-coconutty.png",
    youtube: "#",
    spotify: "https://open.spotify.com/album/2DEjFPw76BmRPbC74S9zaD",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/kitty-coconutty"
  },
  {
    title: "Antilocapra Ikaika",
    img: "assets/antilocapra-ikaika.png",
    youtube: "#",
    spotify: "https://open.spotify.com/album/3Odm2IKzxS9QXz8qDSFWpu",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/antilocapra-ikaika"
  },
  {
    title: "Tarsiidae Pemalu",
    img: "assets/tarsiidae-pemalu.png",
    youtube: "#",
    spotify: "https://open.spotify.com/track/5P4MdBerWBLTiNVrvGLs3g",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/tarsiidae-pemalu"
  },
  {
    title: "Westie Ballerini",
    img: "assets/westie-ballerini.png",
    youtube: "#",
    spotify: "https://open.spotify.com/track/6mBpvP7sj2Fmmx0tEPiv1i",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/westie-ballerini"
  },
  {
    title: "Macaccino Gelatone",
    img: "assets/macaccino-gelatone.png",
    youtube: "#",
    spotify: "https://open.spotify.com/track/3kaRTyzVJN7PMoYn9ttHS7",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/macaccino-gelatone"
  },
  {
    title: "Colorino Tweetolini",
    img: "assets/colorino-tweetolini.png",
    youtube: "#",
    spotify: "https://open.spotify.com/album/2AGtldyiAfN9pmVMHH9TPc",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/colorino-tweetolini"
  },
  {
    title: "Jerboa Dipodoa",
    img: "assets/jerboa-dipodoa.png",
    youtube: "#",
    spotify: "https://open.spotify.com/album/0zHgVt4sCSNphfciCztD4c",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/jerboa-dipodoa"
  },
  {
    title: "Aleena Jalapeña",
    img: "assets/aleena-jalapena.png",
    youtube: "https://youtu.be/yQtbKMp79dE?si=XQJnLoGCvw5tOrpq",
    spotify: "https://open.spotify.com/album/7LxwQV3puQZPq1nXp4cLmT",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/aleena-jalapea"
  },
  {
    title: "Axolotti Springalotti",
    img: "assets/axolotti-springalotti.png",
    youtube: "https://youtu.be/Hy5l5r0kpBk?si=hF6l4Pz2TJ0YyRnQ",
    spotify: "https://open.spotify.com/album/1tJtXbEgtjLzO1CtPtpQIv",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/axolotti-springalotti"
  },
  {
    title: "Pigini Bikini",
    img: "assets/pigini-bikini.png",
    youtube: "https://youtu.be/EffECcVZP2w?si=GQpNZ8MyquJqiLDi",
    spotify: "https://open.spotify.com/track/4zlDLuuNWGWOrL3WaWVoMQ",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/pigini-bikini"
  },
  {
    title: "Zazi the Ant Queen",
    img: "assets/zazi-the-ant-queen.png",
    youtube: "https://youtu.be/rWos0iqrjSo?si=Exw9sUqG4I2Y0AhI",
    spotify: "https://open.spotify.com/track/7EhmOcOSn1WdVHwtBR6Xv2",
    hyperfollow: "https://distrokid.com/hyperfollow/bazpod/zazi-the-ant-queen"
  }
];

const grid = document.querySelector(".song-grid");
songs.forEach(song => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <img src="${song.img}" alt="${song.title}" />
    <h2>${song.title}</h2>
    <div class="buttons">
      <a href="${song.youtube}" target="_blank">YouTube</a>
      <a href="${song.spotify}" target="_blank">Spotify</a>
      <a href="${song.hyperfollow}" target="_blank">Hyperfollow</a>
    </div>
  `;
  grid.appendChild(card);
});
