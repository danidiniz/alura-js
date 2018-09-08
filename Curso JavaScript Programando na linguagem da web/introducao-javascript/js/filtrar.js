var campo = document.querySelector("#filtrar-tabela");

campo.addEventListener("input", function(){
  var exp = new RegExp(this.value, "i");

  if(this.value.length > 0){
    filtrarTabela(exp);
  }else{
    mostrarTabela(pacientes);
  }
});

function filtrarTabela(exp){
  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function(paciente){
    if(exp.test(paciente.querySelector(".info-nome").textContent)){
      paciente.classList.remove("invisivel");
    }else{
      paciente.classList.add("invisivel");
    }
  });
}

function mostrarTabela(pacientes){
  pacientes.forEach(function(paciente){
    paciente.classList.remove("invisivel");
  });
}
