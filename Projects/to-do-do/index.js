const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    //code to handle form submission
    const input = document.querySelector("#to-do-input");
    const toDo = input.value;
    let toDos = [];
    toDos.push(toDo);
    displayToDos();
    function displayToDos(){
        const list = document.querySelector("#to-do-input");
        list.innerHTML = "";
        for (let i = 0; i < toDos.length; i++){
            const toDo = toDos[i];
            const item = document.createElement("li");
            item.innerHTML = toDo;
            list.appendChild(item);
        }

    }
})