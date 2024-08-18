let vitorias = 0;
let derrotas = 0;
let empates = 0;
let totalJogos = 0;

function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
        empates++;
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = "Você venceu!";
        vitorias++;
    } else {
        resultado = "Você perdeu!";
        derrotas++;
    }

    totalJogos++;

    // Esconder as opções de jogo
    document.querySelector('.botoes').style.display = 'none';

    // Mostrar as escolhas com imagens e o resultado
    document.getElementById('resultado').innerHTML = `
        <p>${resultado}</p>
        <div>
            <img src="imagens/${escolhaUsuario}.png" alt="${escolhaUsuario}">
            <img src="imagens/${escolhaComputador}.png" alt="${escolhaComputador}">
        </div>
    `;

    // Atualizar o placar
    atualizarPlacar();

    // Mostrar o botão para jogar novamente
    document.getElementById('jogarNovamente').style.display = 'block';
}

function atualizarPlacar() {
    let vitoriasPercent = ((vitorias / totalJogos) * 100).toFixed(2);
    let derrotasPercent = ((derrotas / totalJogos) * 100).toFixed(2);
    let empatesPercent = ((empates / totalJogos) * 100).toFixed(2);
    
    document.getElementById('vitorias').textContent = vitorias;
    document.getElementById('vitoriasPercent').textContent = `${vitoriasPercent}%`;
    document.getElementById('derrotas').textContent = derrotas;
    document.getElementById('derrotasPercent').textContent = `${derrotasPercent}%`;
    document.getElementById('empates').textContent = empates;
    document.getElementById('empatesPercent').textContent = `${empatesPercent}%`;
    document.getElementById('totaldejogos').textContent = totalJogos;
    
}

function reiniciar() {
    // Limpar o resultado
    document.getElementById('resultado').innerHTML = '';

    // Mostrar as opções de jogo novamente
    document.querySelector('.botoes').style.display = 'flex';

    // Esconder o botão de jogar novamente
    document.getElementById('jogarNovamente').style.display = 'none';
}
