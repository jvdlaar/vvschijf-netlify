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
