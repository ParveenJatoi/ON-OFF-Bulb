var  bulb = document.querySelector("#bulb")as HTMLElement;
var  btn  =document.querySelector("button")as HTMLButtonElement;

var flag=0
btn.addEventListener("click",function(){

    if (flag==0){   

    bulb.style.backgroundColor="yellow"
    console.log("Cliocked");

    flag=1
  }else{
    bulb.style.backgroundColor="transparent"
    console.log("Again Clieckedf")
    flag=0
  }
    

})


