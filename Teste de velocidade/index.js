const veículo1 = prompt("Insira o nome do veículo1:")
const velocidade1 = prompt("Insira a velocidade do veiculo1:")

const veiculo2 = prompt("Insira o nome do veículo2:")
const velocidade2 = prompt("Insira a velocidade do veiculo2:")

if (velocidade1 > velocidade2) {
    alert("O veículo 1 é mais rápido");
} else if (velocidade2 > velocidade1) {
    alert("O veículo 2 é mais rápido");
} else {
    alert("As velocidades são iguais")
}

