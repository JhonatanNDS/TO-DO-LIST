function Criar(){
    const input = document.getElementById("it")
    const tarefa = input.value.trim();

    if (tarefa === "") return;
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${tarefa}</span>
      <button onclick="removeTask(this)" id="del" cursor:pointer >❌</button>
    `;
    document.getElementById("list").appendChild(li);
    input.value = "";
}

function toggleComplete(span) {
    span.classList.toggle("completed");
}
  
function removeTask(button) {
    button.parentElement.remove();
}