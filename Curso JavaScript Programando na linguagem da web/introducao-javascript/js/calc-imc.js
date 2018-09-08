var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var peso = pacientes[i].querySelector(".info-peso").textContent;
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  pacientes[i].querySelector(".info-imc").textContent = calcIMC(peso, altura);
}

function calcIMC(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
