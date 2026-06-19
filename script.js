//Variveis pro css
let bgPosX = 0
let fgPosX = 0
let rDis = parseFloat("42195")
let pDis = 0
let wDis = 0
const cssVar = document.documentElement.style
const coinsDisplay = document.getElementById("coins");
//variaveis pro jogo
let coins = 0
let coinVal = 1
let walkVal = 0.1
let coinMult = 1
let walkMult = 1
function move() {
    // move o fundo e o chao de acordo como o pulo
    bgPosX += 20 * (walkVal * walkMult);
    fgPosX += 160 * (walkVal * walkMult);
    //atualiza o marcador de distancia
    rDis -= walkVal
    wDis += walkVal
    pDis = wDis / 42195
    clearTimeout(coinJmp)
    cssVar.setProperty('--jmpHg','0px');
    document.getElementById("stepL").innerText = 'faltando:' + rDis.toFixed(1)
    cssVar.setProperty('--bgPosX', bgPosX + 'px');
    cssVar.setProperty('--fgPosX', fgPosX + 'px');
    cssVar.setProperty('--jmpHg','10px');
    cssVar.setProperty('--percentage', pDis);
    document.getElementById("progressBar").value = pDis
    coins+= coinVal * coinMult;
    coinsDisplay.textContent = parseInt(coins);
    var coinJmp =setTimeout(() => {
       cssVar.setProperty('--jmpHg','0px'); 
    }, 100);
}


//estou fazendo a divisao dos upgrades em melhora a obtencao de moedas 
// e outra que melhora a progressao do objetivo
//assim como multiplicadores respectivamente
//nao sei direito como fazer para animar o autoclicker
function jmpDis(){}
function jpmHgt(){}
function autoJmp(){}
function valCoinUp()
{
    if (coins >= 10)
        {
            //falta incrementar o valor
            coinVal +=1;
            coins -= 10
            coinsDisplay.textContent =parseInt(coins);
        }
        return null
}
function valCoinMult()
{
     if (coins >= 30)
        {
            //falta incrementar o valor
            coinMult +=0.25;
            coins -= 30
            coinsDisplay.textContent = parseInt(coins);
        }
        return null
}