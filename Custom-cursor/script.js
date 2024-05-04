const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (main) {
  // console.log(main);
  cursor.style.left = main.x + "px";
  cursor.style.top = main.y + "px";
});
