const textareaE1=document.getElementById("textarea");
textareaE1.addEventListener("keyup",()=>{
    //console.log("key pressed");
    updateCounter();
});
var type=window.performance.getEntriesByType("navigation")[0].type;
//console.log(reload);
if(type==="reload"){//whenever user refresh page set default count
    document.getElementById("total-counter").innerText="0";
    document.getElementById("remaining-counter").innerText=textareaE1.getAttribute("maxlength");
    textareaE1.value="";

}
function updateCounter(){
    document.getElementById("total-counter").innerText=textareaE1.value.length;
    document.getElementById("remaining-counter").innerText=textareaE1.getAttribute("maxlength")-textareaE1.value.length;
    }