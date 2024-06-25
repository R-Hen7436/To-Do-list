const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addList(){
    if(inputBox.value === ''){
        alert("You did not input any list!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; //icon for x
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        const confirmDeletion = confirm("Are you sure to delete this list?");
        if (confirmDeletion) {
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("Data", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("Data");
}

document.getElementById("input-box").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addList(); 
    }
});

showList();
