var icon=document.getElementById("ikon");
icon.onclick=function(){
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
    icon.src="sun.png";
    }
else{
    icon.src="moon.ico";
    }
}
