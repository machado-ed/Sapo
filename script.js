// nao tem nada balanceado nos upgrades
//Variveis pro css
let bgPosX = 0 //posicao do background
let fgPosX = 0 //posicao da terra em que o sapo esta correndo
let objDistance = 500 // Distancia objetivo
let rDis = parseFloat(objDistance) // distancia faltando
let pDis = 0 // porcentagem da distancia percorrida
let frogJmpHgt = -20 //altura base que o sapo pula 
const cssVar = document.documentElement.style //um jeito mais conveniente de acessar as variaveis do css
const coinsDisplay = document.getElementById("coins"); //um jeito mais facil de acessar o display de moedas(motivicao)
const frog = document.getElementById("frog"); //variaveis para o sapo

//Variaveis pro jogo
let coins = 0; // quantidade de moedas
let coinVal = 1; // moedas por clique
let walkVal = 1; // distancia andada por clique
let coinMult = 1; // multiplicador de moedas por clique
let walkMult = 1; // multiplicador de disntancia andada por clique
let autoJmpTime = 2000; // tempo base do autojump
//Custos dos Upgrades
let costUp1 = 10;
let costUp2 = 20;
let costUp3 = 30;
let costUp4 = 30;
let costUp5 = 40;
//Quantidade de upgrades computadores
let qntUp1 = 0
let qntUp2 = 0
let qntUp3 = 0
let qntUp4 = 0
let qntUp5 = 0 
function move() {
    //soma moedas no contador
    coins += coinVal * coinMult;
    coinsDisplay.textContent = parseInt(coins);
    // move o fundo e o chao de acordo como o pulo
    bgPosX += 2 * (walkVal * walkMult);
    fgPosX += 16 * (walkVal * walkMult);
    //atualiza o marcador de distancia
    rDis -= walkVal * walkMult
    pDis = (objDistance - rDis)/ objDistance 
    // altera  a altura do pulo de acordo com os upgrades
    frogJmpHgt = -20 - (walkMult * walkVal)
    // limpa o timer de animacao do display moedas 
    clearTimeout(coinJmp)
    // altera o css e html
    cssVar.setProperty('--jmpHg', '0px'); //define a posicao do pulo do display moeda para 0px
    cssVar.setProperty('--frogJmpHg',frogJmpHgt+'px') // atualiza o a altura do pulo no css
    cssVar.setProperty('--bgPosX', bgPosX + 'px'); // altera a posX do background no css para dar impressao de movimento
    cssVar.setProperty('--fgPosX', fgPosX + 'px'); // altera a posX do chao no css para dar impressao de movimento
    cssVar.setProperty('--jmpHg', '10px');//define a posicao do pulo do display moeda para 10px
    cssVar.setProperty('--percentage', pDis); //define a porcetangem para mover a foto do sapo
    document.getElementById("progressBar").value = pDis // altera o valor da barra de progresso para a porcentagem
    document.getElementById("stepL").innerText = 'faltando: ' + rDis.toFixed(0) // atualiza a disntacia que falta no html
    
    // um jeito de animar o diisplay de moeda
    var coinJmp = setTimeout(() => {
        // define a posY do display de valor para 0px depois de 0.1s
        cssVar.setProperty('--jmpHg', '0px');
    }, 100);
    // reseta a variaveis de bgposx e fgposx para impedir um integer overflow
    if (bgPosX > 10000000) 
        {
            bgPosX = 0
        }
            if (fgPosX > 10000000) 
        {
            fgPosX = 0
        }
    // animação de pulo do sapo quero usar em booster tipo x2 quando clica mais rapido
    frog.classList.remove("frogJump");
    // força o navegador a reiniciar a animação se n ele vai funcionar so no primeiro clique
    void frog.offsetWidth;
    frog.classList.add("frogJump");

    // fim de jogo linha 37 a 41
    if (rDis <= 0) {
        alert("Parabéns!🐸 Depois de 500 m, o sapo finalmente terminou a maratona!");

        window.location.href = "https://www.google.com/search?q=MOUSE+NOVO";

        //if (rDis <= 0) {
        //window.open("https://www.google.com/search?q=mouse+novo", "_blank");
        //linha 52 e 53 são para abrir o link em uma nova aba, mas n ta funcionando, por isso coloqueiem comentario que é para abrir na mesma aba se abrir em uma nova aba fica negativo e abrindo dnv td hora  
    }
}

//todos os upgrades seguem a mesma base do primeiro
function valCoinUp() {
    // checa se tem as moedas necessarias
    if (coins >= costUp1) {
        coinVal += 1;// incrementa o upgrade especifico
        coins -= costUp1; // subtrai o valor de moedas
        costUp1 += 5 // incrementa o preco
        qntUp1 ++; // incrementa a quantidade de comprados
        coinsDisplay.textContent = parseInt(coins); // atualiza o display de moedas moedas
        document.getElementById("valor1").innerText = costUp1 // atualiza o preco 
        document.getElementById("numComp1").innerText = qntUp1 // atualiza a quantidade de comprados
    }
    return null
}
function jmpDis() {
    if (coins >= costUp2) {

        walkVal += 1;
        coins -= costUp2;
        costUp2 += 5
        qntUp2 ++;
        coinsDisplay.textContent = parseInt(coins);
        document.getElementById("valor2").innerText = costUp2
        document.getElementById("numComp2").innerText = qntUp2
    }
    return null
}
// esse e o unico que tem uma difrenca
function autoJmp() {
    // primeiro checa se tem o valor necessario
    if (coins >= costUp3) {
        // depois checa se e a primeira vez comprando o uprgade
        if (qntUp3 == 0) {
            // inicia um timer que ativa o click
                autoJmpRepeat()
        }
        autoJmpTime  = autoJmpTime / 2 // divide o tempo pela metade
        coins -= costUp3;// o resto e igual
        costUp3 = costUp3 *3
        qntUp3 ++;
        coinsDisplay.textContent = parseInt(coins);
        document.getElementById("valor3").innerText = costUp3
        document.getElementById("numComp3").innerText = qntUp3
    }

}
function autoJmpRepeat() {
    setTimeout(() => {
        move()
        autoJmpRepeat()
    }, autoJmpTime);
}
function valCoinMult() {
    if (coins >= costUp4) {

        coinMult += 0.25;
        coins -= costUp4;
        costUp4 += 15
        qntUp4 ++;
        coinsDisplay.textContent = parseInt(coins);
        document.getElementById("valor4").innerText = costUp4
        document.getElementById("numComp4").innerText = qntUp4
    }
    return null
}
function jmpHgt() {
    if (coins >= costUp5) {

        walkMult += 1;
        coins -= costUp5;
        costUp5 += 10
        qntUp5 ++;
        coinsDisplay.textContent = parseInt(coins);
        document.getElementById("valor5").innerText = costUp5
        document.getElementById("numComp5").innerText = qntUp5
    }
    return null
}