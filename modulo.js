function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = "Você venceu!";
    } else {
        resultado = "Você perdeu!";
    }
    // Mostrar as escolhas com imagens
    document.getElementById('resultado').innerHTML = `
        <p>${resultado}</p>
        <div>
            <img src="imagens/${escolhaUsuario}.png" alt="${escolhaUsuario}">
            <img src="imagens/${escolhaComputador}.png" alt="${escolhaComputador}">
        </div>
    `;
    document.getElementById('botoes').style.display = 'none';
    // Mostrar o botão para jogar novamente
    document.getElementById('jogarNovamente').style.display = 'block';
}

function reiniciar() {
    // Limpar o resultado e esconder o botão de jogar novamente
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('jogarNovamente').style.display = 'none';
    document.getElementById('botoes').style.display = 'block';
}
