var embed=document.querySelector('embed');
const menu1Button = document.getElementById('menu1');
const menu2Button = document.getElementById('menu2');

menu1Button.addEventListener("click", (e) => {
  e.preventDefault();
  embed.src="internet_connect_info.html";
})

menu2Button.addEventListener("click", (e) => {
  e.preventDefault();
  embed.src="test.html";
})
