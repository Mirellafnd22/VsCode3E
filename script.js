const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"você usa a inteligencia no dia a dia",
        alternativas:[{
            texto:"Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto:"não",
            afirmação: "Afirmação da alternativa"   
        }
        ]
    },
    {
        enunciado:"Você acha que a IA pode dominar o mundo",
        alternativas:[{
            texto:"Sim",
            afirmação: "afirmação da alternativa 2"
        },
        {
            texto:"não",
            afirmação:"afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado:"Você é a favor da IA em diversos trabalhos",
        alternativas:[{
            texto:"Sim",
            afirmação:"Afirmação da alternativa 3"
        },
        {
            txto:"não",
            afirmação:"Afirmação da alternativa 3"
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
