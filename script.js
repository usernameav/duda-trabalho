const perguntas = [
    {
    enunciado: "prefere pizza ou hambúrguer?",
    alternativas: [
    "pizza",
    "hambúrguer"
    ]
    },
    {
    enunciado: "chocolate ou sorvete?",
    alternativas: [
    " chocolate",
    "sorvete"
    ]
    },
    {
    enunciado: ". gosta de sushi?",
    alternativas: [
    "sim",
    "não"
    ]
    },
    {
    enunciado: "humanas ou extas?",
    alternativas: [
    "humanas",
    "exatas"
    ]
    
    },
    {
    enunciado: "física ou química?",
    alternativas: [
    "fíica",
    "química"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();