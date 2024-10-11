const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta quanddo chove em sua cidade?",
        alternativas:[{
            texto:"Sim",
            afirmação: "sim,gosto pois fico assistir filmes,séries,entre outrtos"
        },
        {
            texto:"não",
            afirmação: "Não, gosto por que não consigo fazer o que gosto quando chove"   
        }
        ]
    },
    {
        enunciado:"Você gosta de sair para comer?",
        alternativas:[{
            texto:"Sim",
            afirmação: "sim, gosto pois prefiro comer nos lugar"
        },
        {
            texto:"não",
            afirmação:"Não, gosto por que prefiro comer em casa"
        }
        ]
    },
    {
        enunciado:"Vocẽ prefere dias ensolarados?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Sim, prefiro pois posso fazer mais coisas"
        },
        {
            txto:"não",
            afirmação:"Não, gosto por que faz muito calor"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta(){
    if (posicao=>perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent =" ";
    mostraAlternativas()
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild (botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = " Daqui 10 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();
