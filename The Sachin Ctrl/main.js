let button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",()=>{
        button[i].style.border = "2px solid yellow";
    });
   
}
