const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
});

const boxBuscar = document.querySelector(".buscar-box");

const btnAbrir = document.querySelector("#search-btn");

const btnFechar = document.querySelector(".btn-fechar");

const inputBusca = document.querySelector("#search-input");

const menu = document.querySelector(".menu");



// abrir pesquisa

btnAbrir.addEventListener("click",()=>{


    boxBuscar.classList.add("ativar");

    menu.classList.add("esconder");

    inputBusca.focus();


});




// fechar pesquisa

btnFechar.addEventListener("click",()=>{


    boxBuscar.classList.remove("ativar");

    menu.classList.remove("esconder");

    inputBusca.value = "";


});





// conteúdos que serão pesquisados

const conteudos = [


    {
        titulo:"Variáveis e Tipos de Dados (Python)",
        descricao:"Aprenda variáveis, strings, números e booleanos em Python.",
        palavras:"python variáveis tipos dados string int float boolean",
        link:"aprendizados_recentes.html#variaveis-python"
    },


    {
        titulo:"Entrada de Dados (input)",
        descricao:"Aprenda a receber dados usando input no Python.",
        palavras:"python input entrada dados",
        link:"aprendizados_recentes.html#entrada-dados"
    },


    {
        titulo:"Operações Matemáticas",
        descricao:"Operações de soma, divisão, multiplicação e cálculo.",
        palavras:"python matemática operadores calculadora",
        link:"aprendizados_recentes.html#operacoes-matematicas"
    },


    {
        titulo:"Calculadora em Python",
        descricao:"Primeiro projeto criado usando Python.",
        palavras:"python projeto calculadora",
        link:"projetos.html"
    },


    {
        titulo:"HTML5 e CSS3",
        descricao:"Tecnologias usadas para criar páginas web.",
        palavras:"html css frontend web site",
        link:"aprendizados.html"
    },


    {
        titulo:"Git e GitHub",
        descricao:"Controle de versão e publicação de projetos.",
        palavras:"git github código repositório",
        link:"recursos.html"
    },


    {
        titulo:"Minha Jornada",
        descricao:"Minha evolução estudando programação.",
        palavras:"jornada metas progresso estudos",
        link:"meta.html"
    },

    {
        titulo:"Sistema de Cadastro",
        descricao:"Projeto de cadastro desenvolvido com programação.",
        palavras:"sistema cadastro projeto banco dados usuários",
        link:"projetos.html#sistema-cadastro"
    },

    {
        titulo:"Sistema de Cadastro",
        descricao:"Projeto de cadastro desenvolvido com programação.",
        palavras:"sistema cadastro projeto banco dados usuários",
        link:"projetos.html#sistema-cadastro"
    },

    {
        titulo:"História da Internet",
        descricao:"Como surgiu a internet e sua evolução.",
        palavras:"internet história tecnologia redes",
        link:"blog1.html"
    },
    


];





// pesquisar ao pressionar Enter

inputBusca.addEventListener("keydown",(evento)=>{


    if(evento.key === "Enter"){


        let termo = inputBusca.value.toLowerCase().trim();


        let resultado = conteudos.find((item)=>


            item.palavras.includes(termo)

        );



        if(resultado){


            window.location.href = resultado.link;


        }else{


            alert("Nenhum resultado encontrado para: " + termo);


        }


    }


});