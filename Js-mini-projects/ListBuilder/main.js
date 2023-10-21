let inputText = document.querySelector("#inputText");
let list = document.querySelector("#list");

function addList() {
  list.innerHTML += `<div> 
        <div id="list-text">${inputText.value}</div> 
        <button onclick="editList(event)">Edit</button> 
        <button onclick="removeList(event)">Delete</button> 
    </div>`;
}

function removeList(event) {
  let is_confirm = confirm("Are you sure you want to delete!");

  if (is_confirm) {
    event.target.parentElement.remove();
  }
}

function editList(event) {
  // console.log( event.target.parentElement.querySelector("#list-text").innerText );
  let current_edit_text = event.target.previousElementSibling;

  let data = prompt("Update List Here!", current_edit_text.textContent);

  if (data !== null) {
    current_edit_text.textContent = data
  }
  
}
