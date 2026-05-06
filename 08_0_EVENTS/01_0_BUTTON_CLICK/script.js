const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.onclick = () => {
  message.innerText = "Button is clicked";
};