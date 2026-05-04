let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let h1 = document.getElementById("heading");

  // ✅ getAttribute
  let cls = h1.getAttribute("class");
  console.log("Old class:", cls);

  // ✅ setAttribute
  h1.setAttribute("class", "newClass");

  // ✅ style change
  h1.style.fontSize = "40px";
});