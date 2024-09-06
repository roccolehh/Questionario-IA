// Seleciona os elementos HTML que manipulados
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

//Arry de objeto contendo as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual a principal fonte de proteína?",
        alternativas: [
            "carne",
            "frutas"
        ],
        correta: 1// A primeira alternativa é a correta
    },
    {
        enunciado: "Qual o principal carboidrato encontrado no arroz?",
        alternativas: [
            "amido",
            "açúcar"
        ],
        correta: 1// A primeira alternativa é a correta
    },
    {
        enunciado: "O que é mais comum em um dia de dieta vegetariana?",
        alternativas: [
            "carnes",
            "legumes"
        ],
        correta: 0// A primeira alternativa é a correta
    },
    {
        enunciado: "Qual alimento é conhecido por ser uma boa fonte de ácidos graxos ômega-3?",
        alternativas: [
            "peixe",
            "pão"
        ],
        correta: 1//A primeira alternativa é a correta
    },
    {
        enunciado: "Qual é uma boa fonte de vitamina C?",
        alternativas: [
            "laranja",
            "carne de boi"
        ],
        correta: 1//A primeira alternativa é a correta
    }
];

// inicializa o índice da pergunta atual e a pontuação

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostrarPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach((alternativas, index)=>{
        const botao = document.createElement("button");
        botao.addEventListener("click",()=>verificaresposta(index));
        caixaAlternativas.appendChild(botao);

    });
        
}

//FUNÇÃO VERIFICAR RESPOSTA
function verificaResposta(Seleciona) {
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