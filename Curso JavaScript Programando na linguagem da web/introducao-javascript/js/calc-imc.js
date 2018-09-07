var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  pacientes[i].querySelector(".info-imc").textContent = calcIMC(pacientes[i]);
}

function calcIMC(peso, altura){
  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}
