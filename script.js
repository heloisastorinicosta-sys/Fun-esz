const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "A inteligência artificial pode trazer riscos."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "A inteligência artificial pode trazer possibilidades."
            }
        ]
    },

    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de IA para ajudar na pesquisa.",
                afirmacao: "A IA pode ajudar nos estudos."
            },
            {
                texto: "Pesquisa na internet e utiliza seus próprios conhecimentos.",
                afirmacao: "Também é importante desenvolver conhecimentos próprios."
            }
        ]
    },

    {
        enunciado: "Como a IA impacta o trabalho do futuro? Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "A IA pode criar novas oportunidades de emprego.",
                afirmacao: "A IA pode criar novas oportunidades."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos.",
                afirmacao: "É importante pensar nos trabalhadores."
            }
        ]
    },

    {
        enunciado: "Você precisa criar uma imagem que represente o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando o Paint.",
                afirmacao: "Ferramentas tradicionais também são úteis."
            },
            {
                texto: "Criar uma imagem utilizando IA.",
                afirmacao: "A IA pode ajudar na criação de imagens."
            }
        ]
    },

    {
        enunciado: "Seu grupo fez um trabalho com ajuda da IA, mas o texto está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza o texto inteiro da IA.",
                afirmacao: "A IA pode ser utilizada para produzir textos."
            },
            {
                texto: "Revisa o trabalho e adiciona suas próprias ideias.",
                afirmacao: "É importante revisar e contribuir com ideias próprias."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", function() {
            atual++;

            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });

        caixaAlternativas.appendChild(botao);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim do jogo!";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = "Você terminou o quiz!";
}

mostraPergunta();