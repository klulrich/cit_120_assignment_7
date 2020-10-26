var contentEle = document.body.querySelector(".content");
var buttonEle = document.body.querySelector(".button");

function makeHome(){
  contentEle.innerHTML=" ";
  contentEle.innerHTML="Home Page";
}
function makeAbout(){
  contentEle.innerHTML=" ";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page";
  contentEle.appendChild(headEle);
}
function makeInt(){
  contentEle.innerHTML=" ";
  contentEle.innerHTML="Interact Page";
}
function counter(number){
  var ele = document.createElement("div");
  ele.innerHTML=number;
}
for(var i=0; i<1; i++){
  counter("0");
}

document.body.querySelector(".homeButton").addEventListener("click", function(){
  makeHome();
})
document.body.querySelector(".aboutButton").addEventListener("click", function(){
  makeAbout();
  var nameEle = document.createElement("h3");
  nameEle.innerHTML="Kurt Ulrich";
  contentEle.appendChild(nameEle);
})
document.body.querySelector(".intButton").addEventListener("click", function(){
  makeInt();
})
document.body.querySelector(".cButton").addEventListener("click", function(){
  counter();
  var butEle = document.createElement("span");
  butEle.innerHTML=counter();
  buttonEle.appendChild(butEle).innerHTML=i+++" ";
})

makeHome();