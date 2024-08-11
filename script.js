const list = document.querySelector(".list");
const input = document.querySelector(".input-text");
const btnAdd = document.querySelector(".btn-add");
const btnDelete = document.querySelector(".btn-delete");
const btnEdit = document.querySelector(".btn-edit");

btnAdd.addEventListener("click", createBlock);

function createBlock() {
    if(+input.value == 0) return;
    //Create Block
    const block = document.createElement("div");
    block.className = "block";
    
    //Create Navigate Menu
    const navigate = document.createElement("div");
    navigate.className = "navigate";
    
    //Create checkInput
    const checkInput = document.createElement("input");
    checkInput.type = "checkbox";
    checkInput.className = "check-input";

    //Create Buttons
    const btnDelete = document.createElement("button");
    btnDelete.className = "btn-delete";
    btnDelete.textContent = "DELETE";
    const btnEdit = document.createElement("button");
    btnEdit.className = "btn-edit";
    btnEdit.textContent = "EDIT";
    
    //Create Input Edit
    const inputEdit = document.createElement("input");
    inputEdit.className = "input-edit";
    inputEdit.placeholder = "Edit...";
    //Create Text
    const text = document.createElement("p");
    text.className = "text";
    text.textContent = input.value;

    //Remove text from input
    input.value = "";

    //add all to page
    block.append(navigate);
    navigate.append(checkInput);
    navigate.append(btnDelete);
    navigate.append(btnEdit)
    navigate.append(inputEdit);
    block.append(text);
    list.prepend(block);
 
    //Add EventListener
    checkInput.addEventListener("click", () => {
        if(checkInput.checked) {
            text.classList += " done";
        } else {
            text.classList.remove("done");
        }
    })
    btnDelete.addEventListener("click", () => block.remove());
    btnEdit.addEventListener("click", () => {
        if(+inputEdit.value == 0) return;
        text.textContent = inputEdit.value;
        inputEdit.value = "";
    })
}