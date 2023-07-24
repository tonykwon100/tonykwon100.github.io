
var embed=document.querySelector('embed');
var htmlURL = ['internet_connect_info.html','wan_setup.html','lan_setup.html','port_forward.html','irregular_ftp.html','system_setup.html','sw_update.html','password_change.html','remote_control.html','reboot.html'];
var lmenu = document.getElementsByClassName("lmenu");

// var ip = location.host;
// alert(ip);

function handleMenuClick(event) {
  console.log(event.target);
  // console.log(this);
  console.log(event.target.classList);

    for (var i = 0; i < lmenu.length; i++) {
      lmenu[i].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "#0070C0";
    embed.src = htmlURL[parseInt(event.target.value)];
}

function initMenuList() {
  for (var i = 0; i < lmenu.length; i++) {
    lmenu[i].addEventListener("click", handleMenuClick);
  }
  lmenu[0].click();
}

initMenuList();

