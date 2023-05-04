let myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "./assets/images/menu.png")
    {
        myImage.setAttribute("src", "./assets/images/x.png")
    }
    else{
        myImage.setAttribute("src", "./assets/images/menu.png")
    }
}
