let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },

    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },

    palavra003 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "MADRID",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "CANADA",
        categoria: "LUGARES"
    },

    palavra006 = {
        nome: "ARGENTINA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "CUBA",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "MEXICO",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "CHINA",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "CAVALO",
        categoria: "ANIMAL"
    },
    palavra012 = {
        nome: "OVELHA",
        categoria: "ANIMAL"
    },
    palavra013 = {
        nome: "CACHORRO",
        categoria: "ANIMAL"
    },
    palavra014 = {
        nome: "COELHO",
        categoria: "ANIMAL"
    },
    palavra015 = {
        nome: "VACA",
        categoria: "ANIMAL"
    },
    palavra016 = {
        nome: "COBRA",
        categoria: "ANIMAL"
    },
    palavra017 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAL"
    },
    palavra018 = {
        nome: "COALA",
        categoria: "ANIMAL"
    },
    palavra019 = {
        nome: "JUMENTO",
        categoria: "ANIMAL"
    },
    palavra020 = {
        nome: "GAMBA",
        categoria: "ANIMAL"
    },













];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)


}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

        }
    }

}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra)
        montarPalavraNaTela();
    };

}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal("OPS!", "Nao foi dessa vez .... A palavra secreta era <br>" + palavraSecretaSorteada);
        }

    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", "Você venceu....!!!<br>");
        tentativas = 0;
    }
}
function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./assets/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./assets/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./assets/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./assets/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./assets/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./assets/forca06.png')";
            break;
        default: document.getElementById("imagem").style.background = "url('./assets/forca.png')";
            break;
    }
}


function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;
    $("#myModal").modal({
        show: true
    });

}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function () {
    location.reload();
});



