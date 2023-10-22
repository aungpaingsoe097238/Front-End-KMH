let inputText = document.querySelector("#inputText");
let list = document.querySelector("#list");

function addList() {
  list.innerHTML += `<div class=" my-2 d-flex align-items-center justify-content-between "> 
        <div id="list-text">${inputText.value}</div> 
        <div>
          <button onclick="editList(event)" class="btn btn-dark">Edit</button> 
          <button onclick="removeList(event)" class="btn btn-danger">Delete</button> 
        </div>
    </div>`;
}

function removeList(event) {
  let is_confirm = confirm("Are you sure you want to delete!");

  if (is_confirm) {
    event.target.parentElement.parentElement.remove();
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
