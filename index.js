import "./jquery.js";

window.addEventListener("load", function(){
    const dateElement = document.getElementById("trueDate");
    const d = new Date();
    dateElement.innerHTML = String(d.getFullYear() + 1);
});
