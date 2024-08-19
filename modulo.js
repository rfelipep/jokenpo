let vitorias = 0;
let derrotas = 0;
let empates = 0;
let totalJogos = 0;
let modalidade = '';
let melhorDe3Vitorias = 0;
let melhorDe3Derrotas = 0;

function escolherModalidade(tipo) {
    modalidade = tipo;
    resetarPlacar();
    document.getElementById('menu').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';
    document.getElementById('placar').style.display = 'block';
}

function resetarPlacar() {
    vitorias = 0;
    derrotas = 0;
    empates = 0;
    totalJogos = 0;
    melhorDe3Vitorias = 0;
    melhorDe3Derrotas = 0;
    
    document.getElementById('vitorias').textContent = vitorias;
    document.getElementById('derrotas').textContent = derrotas;
    document.getElementById('empates').textContent = empates;
}

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
        if (modalidade === 'melhorDe3') {
            melhorDe3Vitorias++;
        }
    } else {
        resultado = "Você perdeu!";
        derrotas++;
        if (modalidade === 'melhorDe3') {
            melhorDe3Derrotas++;
        }
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
    if (modalidade === 'melhorDe3' && (melhorDe3Vitorias === 2 || melhorDe3Derrotas === 2)) {
        document.getElementById('resultado').innerHTML += `<p>${melhorDe3Vitorias === 2 ? 'Você ganhou a melhor de 3!' : 'Você perdeu a melhor de 3!'}</p>`;
        document.getElementById('jogarNovamente').style.display = 'none';
        document.getElementById('resultado').innerHTML += `<div id="jogarNovamente" style="display: block;"><button onclick="retornarMenu()">Retornar ao Menu</button></div>`;
    } else {
        document.getElementById('jogarNovamente').style.display = 'block';
    }
}

function atualizarPlacar() {
    document.getElementById('vitorias').textContent = vitorias;
    document.getElementById('derrotas').textContent = derrotas;
    document.getElementById('empates').textContent = empates;
}

function reiniciar() {
    // Limpar o resultado
    document.getElementById('resultado').innerHTML = '';

    // Mostrar as opções de jogo novamente
    document.querySelector('.botoes').style.display = 'flex';

    // Esconder o botão de jogar novamente
    document.getElementById('jogarNovamente').style.display = 'none';
}

function retornarMenu() {
    // Limpar a tela e retornar ao menu
    document.getElementById('resultado').innerHTML = '';
    document.querySelector('.botoes').style.display = 'flex';
    document.getElementById('jogarNovamente').style.display = 'none';
    document.getElementById('placar').style.display = 'none';
    document.getElementById('jogo').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
