// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const headerImages = document.getElementsByClassName("header-img");
const headerIndex = Math.floor(Math.random() * headerImages.length);
headerImages[headerIndex].style.display = "block";

const bannerImages = document.getElementsByClassName("banner");
const position = bannerImages.length / 3;

for (let i = 0; i < 3; i++) {
  const random = Math.random() * position;
  const bannerIndex = i * 3 + Math.floor(random);
  bannerImages[bannerIndex].style.display = "block";
}
