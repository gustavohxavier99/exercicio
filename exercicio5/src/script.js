var x = prompt('Por favor, insira seu texto');
function inverter(x) {
  return x.split('').reverse().join('');
}
document.write(inverter(x));