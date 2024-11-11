function addTodo() {
    const value = document.querySelector('input').value;
    const spanEL = document.createElement("span");
    const buttonEl = document.createElement("button");
    
    
    buttonEl.onclick = function() {
        const divEL = this.parentElement; 
        divEL.remove(); 
    };

    spanEL.innerHTML = value;
    buttonEl.innerHTML = "Delete";

    const divEl = document.createElement("div");
    divEl.appendChild(spanEL);
    divEl.appendChild(buttonEl);

    document.querySelector("body").appendChild(divEl);
}