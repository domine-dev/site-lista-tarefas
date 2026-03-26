let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${tarefa}
      <span class="remover" onclick="removerTarefa(${index})">?</span>
    `;

    lista.appendChild(li);
  });
}

function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  tarefas.push(texto);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  input.value = "";
  renderizarTarefas();
}

function removerTarefa(index) {
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  renderizarTarefas();
}

renderizarTarefas();