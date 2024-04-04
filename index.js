  var btn = document.querySelector('.btn')
  var bulb = document.querySelector('.bulb')
  
  
  var a = 0;
  
  btn.addEventListener('click',function(){

if (a==0) {
    bulb.style.backgroundColor="yellow";
    console.log("Clicked");
    btn.innerHTML = "Turn off";
    a = 1;
} else {
    bulb.style.backgroundColor="transparent";
    console.log("Again clicked");
    btn.innerHTML = "Turn on";
    a = 0;
}



})