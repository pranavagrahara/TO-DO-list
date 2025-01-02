const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("lists");
function addTask(){
    if(inputBox.value === ''){
        alert("Enter a Task!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        lists.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
lists.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
   } 
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
},false);
function saveData(){
    localStorage.setItem("data",lists.innerHTML);
}
function showTask(){
    lists.innerHTML=localStorage.getItem("data");
}
showTask();