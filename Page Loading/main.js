window.onload = function () {
  setTimeout(pageLoad, 3000);
};

const pageLoader = document.getElementById("cssLoader");
const pageDiv = document.getElementById("mainDiv");

function pageLoad() {
  pageLoader.style.visibility = "hidden";
  pageLoader.style.opacity = 0;
  pageDiv.style.display = "block";
  setTimeout(hideLoader, 1000);
}

function hideLoader() {
  pageLoader.style.display = "none";
  pageDiv.style.visibility = "visible";
  pageDiv.style.opacity = 1;
}
