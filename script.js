let bgPosX = 0
let fgPosX = 0
let rDis = parseFloat("42195")
let coins = 0
let pDis = 0
let wDis = 0

let coinVal = 1
function move() {
    bgPosX += 2;
    fgPosX += 16
    rDis -= 200
    wDis += 200
    pDis = wDis / 42195 
    clearTimeout(coinJmp)
    document.documentElement.style.setProperty('--jmpHg','0px');
    document.getElementById("stepL").innerText = 'faltando:' + rDis.toFixed(1)
    document.documentElement.style.setProperty('--bgPosX', bgPosX + 'px');
    document.documentElement.style.setProperty('--fgPosX', fgPosX + 'px');
    document.documentElement.style.setProperty('--jmpHg','10px');
    document.documentElement.style.setProperty('--percentage', pDis);
    document.getElementById("progressBar").value = pDis
    coins+= coinVal;
    coinsDisplay.textContent = coins;
    var coinJmp =setTimeout(() => {
       document.documentElement.style.setProperty('--jmpHg','0px'); 
    }, 100);
}


const coinsDisplay = document.getElementById("coins");

function jmpDis(){}
function hpmHgt(){}
function autoJmp(){}
function valCoinUp()
{
    if (coins >= 10)
        {
            coinVal +=1;
            coins -= 10
            coinsDisplay.textContent = coins;
        }
        return null
}