var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var url = "https://www.allmusic.com/artist/all-mn0000010982/discography";
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
});
