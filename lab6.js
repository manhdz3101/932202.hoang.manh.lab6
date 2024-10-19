let lCol = document.querySelector('.leftone');
let rCol = document.querySelector('.rightone');
let lImage = document.querySelector('#cat');
let rImage = document.querySelector('#dog');

function left(){
  lCol.style.width = "95%"
  rCol.style.width = "5%"
  rImage.style.display="none"
  lImage.style.display="block"
  lImage.style.height="70%"
  lImage.style.width="70%"
}

function right(){
rCol.style.width = "95%"
lCol.style.width = "5%"
lImage.style.display="none"
rImage.style.display="block"
rImage.style.height="70%"
rImage.style.width="70%"
}

function both(){
  [rCol,lCol].forEach(element => 
    {element.style.width = "50%";
    element.querySelector("img").style.display="block";
    element.querySelector("img").style.width="95%";})
}