// Seleciona os elementos HTML que serão manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Array de objetos contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a principal fonte de proteína?",
        alternativas: [
            "carne",
            "frutas"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual o principal carboidrato encontrado no arroz?",
        alternativas: [
            "amido",
            "açúcar"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "O que é mais comum em um dia de dieta vegetariana?",
        alternativas: [
            "carnes",
            "legumes"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Qual alimento é conhecido por ser uma boa fonte de ácidos graxos ômega-3?",
        alternativas: [
            "peixe",
            "pão"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Qual é uma boa fonte de vitamina C?",
        alternativas: [
            "laranja",
            "carne de boi"
        ],
        correta: 0 // A primeira alternativa é a correta
    }
];

// Inicializa o índice da pergunta atual e a pontuação
let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa; // Adiciona o texto da alternativa ao botão
        botao.addEventListener("click", () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

// FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    caixaPrincipal.style.display = "none";
    caixaResultado.style.display = "block";

    setTimeout(() => caixaResultado.classList.add("mostrar"), 10);
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";

    botaoReiniciar.addEventListener("click", () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove("mostrar");
        caixaResultado.style.display = "none";
        caixaPrincipal.style.display = "block";
        mostrarPergunta();
    });

    caixaResultado.innerHTML = ""; // Limpa o conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicia o quiz
mostrarPergunta();