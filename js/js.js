var Matriz1 = new Array();
var Matriz2 = new Array();

var NumLin1 = prompt("Insira a quantia de linhas da 1ª matriz: ");
var NumCol1 = prompt("Insira a quantia de colunas da 1ª matriz: ");

var NumLin2 = prompt("Insira a quantia de linhas da 2ª matriz: ");
var NumCol2 = prompt("Insira a quantia de colunas da 2ª matriz: ");

var RandMan = prompt("Você deseja inserir aleatorizr os valores das matrizes? (s para sim, n para não");

if (isNaN(NumCol1)) {
    NumCol1 = 1;
}

if (isNaN(NumLin1)) {
    NumLin1 = 1;
}

if (isNaN(NumLin2)) {
    NumLin2 = 1;
}

if (isNaN(NumCol2)) {
    NumCol2 = 1;
}

if (RandMan != "s" && RandMan != "n") {
    alert("Insira uma resposta válida.");
} else if (RandMan == "s") {

    for (var i = 0; i < NumLin1; i++) {
        Matriz1.push([]);
        for (var j = 0; j < NumCol1; j++) {
            Matriz1[i].push(0);
        }
    }

    for (var i = 0; i < NumLin1; i++) {
        for (var j = 0; j < NumCol1; j++) {
            Matriz1[i][j] = parseFloat(prompt("Insira o valor da linha " + (i + 1) + ", da 1ª matriz, coluna " + (j + 1) + ": "));
        }
    }

    for (var i = 0; i < NumLin2; i++) {
        Matriz2.push([]);
        for (var j = 0; j < NumCol2; j++) {
            Matriz2[i].push(0);
        }
    }

    for (var i = 0; i < NumLin2; i++) {
        for (var j = 0; j < NumCol2; j++) {
            Matriz2[i][j] = parseFloat(prompt("Insira o valor da linha " + (i + 1) + ", da 2ª matriz, coluna " + (j + 1) + ": "));
        }
    }

} else {

    for (var i = 0; i < NumLin1; i++) {
        Matriz1.push([]);
        for (var j = 0; j < NumCol1; j++) {
            Matriz1[i].push(0);
        }
    }

    for (var i = 0; i < NumLin1; i++) {
        for (var j = 0; j < NumCol1; j++) {
            Matriz1[i][j] = parseInt(Math.random() * 100);
        }
    }

    for (var i = 0; i < NumLin2; i++) {
        Matriz2.push([]);
        for (var j = 0; j < NumCol2; j++) {
            Matriz2[i].push(0);
        }
    }

    for (var i = 0; i < NumLin2; i++) {
        for (var j = 0; j < NumCol2; j++) {
            Matriz2[i][j] = parseInt(Math.random() * 100);
        }
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////

var SeSoma = false;
var SeSubtracao = false;
var SeMultiplicacao = false;
var Pergunta;

function AtivVarSom() {
    Pergunta = "som";

    var SomaMatriz1_2 = new Array();

    if (NumLin1 == NumLin2 && NumCol1 == NumCol2) {
        for (var i = 0; i < NumLin1; i++) {
            SomaMatriz1_2[i] = new Array()

            for (var j = 0; j < NumCol1; j++) {
                SomaMatriz1_2[i].push(Matriz1[i][j] + Matriz2[i][j]);
            }
        }

    } else {
        alert("Você não pode executar uma soma entre matrizes de tamanhos diferentes!");
    }

    var TabelaSoma = document.createElement("table");
    TabelaSoma.setAttribute("class", "tabelas");
    var CabecaTabelaSoma = document.createElement("thead");
    var LinhaCabecaTabSoma = document.createElement("tr");
    var CelulaCabecaTabSoma = document.createElement("th");
    var TextoCabecaTabSoma = document.createTextNode("Valores da Soma: ");

    CelulaCabecaTabSoma.appendChild(TextoCabecaTabSoma);
    LinhaCabecaTabSoma.appendChild(CelulaCabecaTabSoma);
    CabecaTabelaSoma.appendChild(LinhaCabecaTabSoma);

    CelulaCabecaTabSoma.setAttribute("colspan", NumCol2);
    CelulaCabecaTabSoma.setAttribute("class", "TituloTabela");

    var CorpoTabelaSoma = document.createElement("tbody");

    for (var i = 0; i < SomaMatriz1_2.length; i++) {
        var LinhasTabelaSoma = document.createElement("tr");

        for (var j = 0; j < SomaMatriz1_2[i].length; j++) {
            var CelulaTabelaSoma = document.createElement("td");
            var ValorCelulaTabelaSoma = document.createTextNode(SomaMatriz1_2[i][j]);

            CelulaTabelaSoma.appendChild(ValorCelulaTabelaSoma);
            LinhasTabelaSoma.appendChild(CelulaTabelaSoma);

            CelulaTabelaSoma.className = "CelulasTabela";
        }

        CorpoTabelaSoma.appendChild(LinhasTabelaSoma);

    }

    TabelaSoma.appendChild(CabecaTabelaSoma);
    TabelaSoma.appendChild(CorpoTabelaSoma);
    document.body.appendChild(TabelaSoma);

    var ResultSoma = document.createElement("div");
    ResultSoma.setAttribute("id", "ResultSoma");

    document.body.appendChild(ResultSom);

    document.getElementById("ResultSoma").outerHTML = TabelaSoma;

    SeSoma = false;

    document.write("<br>");
}

function AtivVarSub() {
    Pergunta = "sub";

    var SubtracaoMatriz1_2 = new Array();

    if (NumLin1 == NumLin2 && NumCol1 == NumCol2) {
        for (var i = 0; i < NumLin1; i++) {
            SubtracaoMatriz1_2[i] = new Array()

            for (var j = 0; j < NumCol1; j++) {
                SubtracaoMatriz1_2[i].push(Matriz1[i][j] - Matriz2[i][j]);
            }
        }

    } else {
        alert("Você não pode executar uma subtração entre matrizes de tamanhos diferentes!");
    }

    var TabelaSub = document.createElement("table");
    TabelaSub.setAttribute("class", "tabelas");
    var CabecaTabelaSub = document.createElement("thead");
    var LinhaCabecaTabSub = document.createElement("tr");
    var CelulaCabecaTabSub = document.createElement("th");
    var TextoCabecaTabSub = document.createTextNode("Valores da Subtração: ");

    CelulaCabecaTabSub.appendChild(TextoCabecaTabSub);
    LinhaCabecaTabSub.appendChild(CelulaCabecaTabSub);
    CabecaTabelaSub.appendChild(LinhaCabecaTabSub);

    CelulaCabecaTabSub.setAttribute("colspan", NumCol2);
    CelulaCabecaTabSub.setAttribute("class", "TituloTabela");

    var CorpoTabelaSub = document.createElement("tbody");

    for (var i = 0; i < SubtracaoMatriz1_2.length; i++) {
        var LinhasTabelaSub = document.createElement("tr");

        for (var j = 0; j < SubtracaoMatriz1_2[i].length; j++) {
            var CelulaTabelaSub = document.createElement("td");
            var ValorCelulaTabelaSub = document.createTextNode(SubtracaoMatriz1_2[i][j]);

            CelulaTabelaSub.appendChild(ValorCelulaTabelaSub);
            LinhasTabelaSub.appendChild(CelulaTabelaSub);

            CelulaTabelaSub.className = "CelulasTabela";
        }

        CorpoTabelaSub.appendChild(LinhasTabelaSub);

    }

    TabelaSub.appendChild(CabecaTabelaSub);
    TabelaSub.appendChild(CorpoTabelaSub);
    document.body.appendChild(TabelaSub);

    var ResultSub = document.createElement("div");
    ResultSub.setAttribute("id", "ResultSub");

    document.body.appendChild(ResultSom);

    document.getElementById("ResultSub").outerHTML = TabelaSub;

    SeSubtracao = false;

    document.write("<br>");
}

function AtivVarMult() {
    Pergunta = "mult";

    var MultMatriz1_2 = new Array();

    if (NumCol1 == NumLin2) {

        for (var i = 0; i < NumLin1; i++) {
            MultMatriz1_2[i] = new Array();

            for (var j = 0; j < NumCol2; j++) {
                MultMatriz1_2[i][j] = 0;

                for (var k = 0; k < NumCol1; k++) {
                    MultMatriz1_2[i][j] += (Matriz1[i][k] * Matriz2[k][j]);
                }
            }
        }
    } else if (NumCol1 != NumLin2) {
        alert("O número de colunas da 1ª matriz precisa ser igual ao número de linhas da 2ª matriz para realizar a multiplicação.");
    }

    var TabelaMult = document.createElement("table");
    TabelaMult.setAttribute("class", "tabelas");
    var CabecaTabelaMult = document.createElement("thead");
    var LinhaCabecaTabMult = document.createElement("tr");
    var CelulaCabecaTabMult = document.createElement("th");
    var TextoCabecaTabMult = document.createTextNode("Valores da Multiplicação: ");

    CelulaCabecaTabMult.appendChild(TextoCabecaTabMult);
    LinhaCabecaTabMult.appendChild(CelulaCabecaTabMult);
    CabecaTabelaMult.appendChild(LinhaCabecaTabMult);

    CelulaCabecaTabMult.setAttribute("colspan", NumCol2);
    CelulaCabecaTabMult.setAttribute("class", "TituloTabela");

    var CorpoTabelaMult = document.createElement("tbody");

    for (var i = 0; i < MultMatriz1_2.length; i++) {
        var LinhasTabelaMult = document.createElement("tr");

        for (var j = 0; j < MultMatriz1_2[i].length; j++) {
            var CelulaTabelaMult = document.createElement("td");
            var ValorCelulaTabelaMult = document.createTextNode(MultMatriz1_2[i][j]);

            CelulaTabelaMult.appendChild(ValorCelulaTabelaMult);
            LinhasTabelaMult.appendChild(CelulaTabelaMult);

            CelulaTabelaMult.className = "CelulasTabela";
        }

        CorpoTabelaMult.appendChild(LinhasTabelaMult);

    }

    TabelaMult.appendChild(CabecaTabelaMult);
    TabelaMult.appendChild(CorpoTabelaMult);
    document.body.appendChild(TabelaMult);

    var ResultMult = document.createElement("div");
    ResultMult.setAttribute("id", "ResultMult");

    document.body.appendChild(ResultSom);

    document.getElementById("ResultMult").outerHTML = TabelaMult;

    SeMultiplicacao = false;

    document.write("<br>");
}

////////////////////////

if (Pergunta == "som") {
    SeSoma = true;

} else if (Pergunta == "sub") {
    SeSubtracao = true;

} else if (Pergunta == "mult") {
    SeMultiplicacao = true;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////

var DivTab1_2 = document.createElement("div");
DivTab1_2.setAttribute("class", "container");

var DivTab1_2Row = document.createElement("div");
DivTab1_2Row.setAttribute("class", "row");

var DivTab1_2Col = document.createElement("div");
DivTab1_2Col.setAttribute("class", "col-lg-6 col-md-6 col-sm-12");

var TabelaMatriz1 = document.createElement("table");
TabelaMatriz1.setAttribute("class", "tabelas");

var CabecaTabelaMatriz1 = document.createElement("thead");
var LinhaCabecaTabMatriz1 = document.createElement("tr");
var CelulaCabecaTabMatriz1 = document.createElement("th");
var TextoCabecaTabMatriz1 = document.createTextNode("Valores da 1ª Matriz: ");

CelulaCabecaTabMatriz1.appendChild(TextoCabecaTabMatriz1);
LinhaCabecaTabMatriz1.appendChild(CelulaCabecaTabMatriz1);
CabecaTabelaMatriz1.appendChild(LinhaCabecaTabMatriz1);

CelulaCabecaTabMatriz1.setAttribute("colspan", NumCol1);
CelulaCabecaTabMatriz1.setAttribute("class", "TituloTabela");

var CorpoTabelaMatriz1 = document.createElement("tbody");

for (var i = 0; i < Matriz1.length; i++) {
    var LinhasTabelaMatriz1 = document.createElement("tr");

    for (var j = 0; j < Matriz1[i].length; j++) {
        var CelulaTabelaMatriz1 = document.createElement("td");
        var ValorCelulaTabelaMatriz1 = document.createTextNode(Matriz1[i][j]);

        CelulaTabelaMatriz1.appendChild(ValorCelulaTabelaMatriz1);
        LinhasTabelaMatriz1.appendChild(CelulaTabelaMatriz1);

        CelulaTabelaMatriz1.className = "CelulasTabela";
    }

    CorpoTabelaMatriz1.appendChild(LinhasTabelaMatriz1);

}

TabelaMatriz1.appendChild(CabecaTabelaMatriz1);
TabelaMatriz1.appendChild(CorpoTabelaMatriz1);
document.body.appendChild(TabelaMatriz1);

DivTab1_2Col.appendChild(TabelaMatriz1);
DivTab1_2Row.appendChild(DivTab1_2Col);

document.write("<br>");

/////////////////////////////////////////////////////////////////////////////////

var DivTab1_2Col = document.createElement("div");
DivTab1_2Col.setAttribute("class", "col-lg-6 col-md-6 col-sm-12");

var TabelaMatriz2 = document.createElement("table");
TabelaMatriz2.setAttribute("class", "tabelas");
var CabecaTabelaMatriz2 = document.createElement("thead");
var LinhaCabecaTabMatriz2 = document.createElement("tr");
var CelulaCabecaTabMatriz2 = document.createElement("th");
var TextoCabecaTabMatriz2 = document.createTextNode("Valores da 2ª Matriz: ");

CelulaCabecaTabMatriz2.appendChild(TextoCabecaTabMatriz2);
LinhaCabecaTabMatriz2.appendChild(CelulaCabecaTabMatriz2);
CabecaTabelaMatriz2.appendChild(LinhaCabecaTabMatriz2);


CelulaCabecaTabMatriz2.setAttribute("colspan", NumCol2);
CelulaCabecaTabMatriz2.setAttribute("class", "TituloTabela");

var CorpoTabelaMatriz2 = document.createElement("tbody");

for (var i = 0; i < Matriz2.length; i++) {
    var LinhasTabelaMatriz2 = document.createElement("tr");

    for (var j = 0; j < Matriz2[i].length; j++) {
        var CelulaTabelaMatriz2 = document.createElement("td");
        var ValorCelulaTabelaMatriz2 = document.createTextNode(Matriz2[i][j]);

        CelulaTabelaMatriz2.appendChild(ValorCelulaTabelaMatriz2);
        LinhasTabelaMatriz2.appendChild(CelulaTabelaMatriz2);

        CelulaTabelaMatriz2.className = "CelulasTabela";
    }

    CorpoTabelaMatriz2.appendChild(LinhasTabelaMatriz2);

}

TabelaMatriz2.appendChild(CabecaTabelaMatriz2);
TabelaMatriz2.appendChild(CorpoTabelaMatriz2);

DivTab1_2Col.appendChild(TabelaMatriz2);
DivTab1_2Row.appendChild(DivTab1_2Col);
DivTab1_2.appendChild(DivTab1_2Row);

document.body.appendChild(DivTab1_2);

document.write("<br>");

//////////////////////////////////////////////////////////////////

console.table(Matriz1);
console.table(Matriz2);
console.table(SomaMatriz1_2);
console.table(SubtracaoMatriz1_2);
console.table(MultMatriz1_2);