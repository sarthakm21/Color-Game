var colors=addColors(6);

//getting various elements for manipulation
var square=document.querySelectorAll(".square");
var correctColor=document.querySelector("#correct");
var correct=randomColor(colors.length);
var message = document.querySelector("#message");
var newColors=document.querySelector("#newColors");
var title=document.querySelector(".title");

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
hard.style.backgroundColor="#00bdb4";

easy.addEventListener("click",function(){
  colors=[];
  colors=addColors(3);
  hard.style.backgroundColor="#07ede2";
  easy.style.backgroundColor="#00bdb4";
  correct=randomColor(3);
  correctColor.textContent=correct.toUpperCase();
  for(let i=3;i<6;i++){
    square[i].style.backgroundColor="#232323";
  }
  for(let i in colors){
    square[i].style.backgroundColor=colors[i];
  }

  // newColors.addEventListener("click",function(){
  //
  //   colors=addColors(3);
  //   correct=randomColor(3);
  //   correctColor.textContent=correct.toUpperCase();
  //
  //   message.textContent="";
  //
  //   for(let i in colors){
  //     square[i].style.backgroundColor=colors[i];
  //   }
  // });
});

hard.addEventListener("click",function(){
  colors=[];
  colors=addColors(6);
  easy.style.backgroundColor="#07ede2";
  hard.style.backgroundColor="#00bdb4";

  correct=randomColor(6);
  correctColor.textContent=correct.toUpperCase();
  for(let i in colors){
    square[i].style.backgroundColor=colors[i];
  }

  // newColors.addEventListener("click",function(){
  //
  //   colors=addColors(6);
  //   correct=randomColor(6);
  //   correctColor.textContent=correct.toUpperCase();
  //   message.textContent="";
  //
  //   for(let i in colors){
  //     square[i].style.backgroundColor=colors[i];
  //   }
  // });
});

//assigning random colors to the array;
function addColors(num){
 let arr=[];
 while(num--){
   let r=Math.floor(Math.random()*256);
   let g=Math.floor(Math.random()*256);
   let b=Math.floor(Math.random()*256);
   let str="rgb("+r+", "+g+", "+b+")";
   arr.push(str);
 }
 return arr;
}

//selecting a random color from the array;
function randomColor(num){
  return colors[Math.floor(Math.random()*num)];
}



//rgb in the title
correctColor.textContent=correct.toUpperCase();

//resetting the game using new colors link;
newColors.addEventListener("click",function(){

  title.style.backgroundColor="#fcc026";
  if(colors.length==6){
    colors=addColors(6);
    correct=randomColor(6);
    correctColor.textContent=correct.toUpperCase();
  }

  else if(colors.length==3){
    colors=addColors(3);
    correct=randomColor(3);
    correctColor.textContent=correct.toUpperCase();
  }

  message.textContent="";

  for(let i in colors){
    square[i].style.backgroundColor=colors[i];
  }
});

for(let i in colors){
  //assigning colors
  square[i].style.backgroundColor=colors[i];
  //adding click listeners to the squares
  square[i].addEventListener("click", function(){
    var selectedColor=this.style.backgroundColor;
    if(selectedColor===correct){
      message.textContent="CORRECT!";
      title.style.backgroundColor=correct;
      for(let j in colors){
        square[j].style.backgroundColor=correct;
      }
    }

    else {
      message.textContent="TRY AGAIN!!";
      this.style.backgroundColor="#232323";
    }
  });
}
