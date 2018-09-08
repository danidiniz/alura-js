var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click", function(event){
  event.preventDefault();

  document.querySelector("#mensagem-erro").innerHTML = "";

  var paciente = criarPaciente(document.querySelector("#form-adiciona"));

  var erros = [];
  erros = validarPaciente(paciente);
  if(erros.length > 0){
    exibirErros(erros);
    return;
  }

  document.querySelector("#tabela-pacientes").appendChild(criarTr(paciente));
});

function criarPaciente(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcIMC(form.peso.value, form.altura.value)
  };
  return paciente;
}

function criarTr(paciente){
  var tr = document.createElement("tr");
  tr.classList.add("paciente");
  tr.appendChild(criarTd(paciente.nome, "info-nome"));
  tr.appendChild(criarTd(paciente.peso, "info-peso"));
  tr.appendChild(criarTd(paciente.altura, "info-altura"));
  tr.appendChild(criarTd(paciente.gordura, "info-gordura"));
  tr.appendChild(criarTd(paciente.imc, "info-imc"));
  return tr;
}

function criarTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validarPaciente(paciente){
  var erros = [];
  if(paciente.nome.length == 0){
    erros.push("Nome em branco.");
  }
  if(paciente.peso < 0 || paciente.peso > 1000){
    erros.push("Peso inválido.");
  }
  if(paciente.altura < 0 || paciente.altura > 3){
    erros.push("Altura inválido.");
  }
  return erros;
}

function exibirErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    for (var i = 0; i < erros.length; i++) {
      var li = document.createElement("li");
      li.textContent = erros[i];
      ul.appendChild(li);
    }
}
