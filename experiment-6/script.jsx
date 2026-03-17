let heading=document.getElementById("mainheading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize=16;
document.getElementById( "changeTextBtn").addEventListerner("click",function() {
    if(input.value !== "")
    {
        heading.innerHTML  = input.value;

    }
})
document.getElementById( "bgColorBtn").onclick=function(){
     
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
};

document.getElementById( "fontSizeBtn").addEventListerner("click",function() {
    fontSize += 2;
    paragraph.style.fontSize = fontSize + "px";
})

