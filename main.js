// ############## DECLARAÇÃO DAS VARIÁVEIS GLOBAIS ##############
var memoria = 0;
var visor = document.getElementById("visor");
var historico = "";
var total = 0;
var cal = "";


// ############## ESCONDENDO AS FUNÇÕES DA CALCULADORA CIENTÍFICA  ##############
document.getElementById("linha0").style.display = "none";


// ############## FUNÇÃO PARA EXIBIR A CALCULADORA NORMAL  ##############
function normal(){
    document.getElementById("linha0").style.display = "none";
    document.getElementById("contas").rows = 28;
}


// ############## FUNÇÃO PARA EXIBIR A CALCULADORA CIENTÍFICA  ##############
function cientifica(){
    document.getElementById("linha0").style.display = "block";
    document.getElementById("contas").rows = 33;
}


// ############## FUNÇÃO QUE PERMITE QUE APENAS UM PONTO/VIRGULA(CORRESPONDENTE A CASA DECIMAL) SEJA INSERIDO ######
function exibir(tecla) {
    if (visor.value.includes(".") && tecla === ".") {
        window.alert("Ponto já inserido.")
    } else {
        visor.value = visor.value + tecla;
    }
}


// ############## FUNÇÃO QUE ARMAZENA A OPERAÇÃO ESCOLHIDA ##############
function calculo(sinal) {
    cal = sinal;
    memoria = Number(visor.value);
    visor.value = "";
}


// ############## FUNÇÃO QUE CALCULA E EXIBE O RESULTADO NO VISOR E NO HISTÓRICO ##############
function resultado() {
    let total

    if (cal === "") {
        window.alert("Escolha uma operação.");
    } else {
        if (cal === '+') {
            total = memoria + Number(visor.value);
            historico = memoria + " + " + visor.value + " = " + total;
            //document.getElementById("contas").innerHTML= document.getElementById("contas").innerHTML + historico;
            document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
            visor.value = total;
            memoria = total;
        } else {
            if (cal === 'x') {
                total = memoria * Number(visor.value);
                historico = memoria + " x " + visor.value + " = " + total;
                document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
                visor.value = total;
                memoria = total;
            } else {
                if (cal === '÷') {
                    total = memoria / Number(visor.value);
                    historico = memoria + " ÷ " + visor.value + " = " + total;
                    document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
                    visor.value = total;
                    memoria = total;
                } else {
                    if (cal === '-') {
                        total = memoria - Number(visor.value);
                        historico = memoria + " - " + visor.value + " = " + total;
                        document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
                        visor.value = total;
                        memoria = total;
                    } else {
                        if (cal === '√') {
                            total = Math.sqrt(Number(visor.value));
                            historico = "√" + visor.value + " = " + total;
                            document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
                            visor.value = total;
                        } else{
                            if (cal === '^') {
                                total = Math.pow(memoria, Number(visor.value));
                                historico = memoria + "^" + visor.value + " = " + total;
                                document.getElementById("contas").value = document.getElementById("contas").value + "\n" + historico;
                                visor.value = total;
                            }
                        }
                    }
                }
            }
        }
    }
}


// ############## FUNÇÃO QUE INVERTE E EXIBE O NÚMERO COM O SINAL INVERTIDO ##############
function negativo(){
    visor.value = Number(visor.value * (-1)); 
}


// ############## FUNÇÃO QUE EXIBE O VALOR ABSOLUTO DO NÚMERO ##############
function abstl(){
    visor.value = Math.abs(Number(visor.value));
}


// ############## FUNÇÃO QUE APAGA NÚMERO POR NÚMERO EXIBIDO NO VISOR ##############
function apagar() {
    visor.value = visor.value.substring(0, visor.value.length -1); 
}


// ############## FUNÇÃO QUE APAGA OS VALORES EXIBIDOS NO HISTÓRICO ##############
function limparHist() {
    document.getElementById("contas").value = "";
}


// ############## FUNÇÃO QUE APAGA OS VALORES EXIBIDOS NO VISOR ##############
function limpar() {
    memoria = 0;
    visor.value = "";
    historico = "";
    total = 0;
    cal = "";
}