let bgPosX = 0
let fgPosX = 0
let rDis = parseFloat("4219")
let coins = 0

function move() {
    bgPosX += 2;
    fgPosX += 16
    rDis -= 0.1
    clearTimeout()
    document.documentElement.style.setProperty('--jmpHg','0px');
    document.getElementById("stepL").innerText = 'faltando:' + rDis.toFixed(1)
    document.documentElement.style.setProperty('--bgPosX', bgPosX + 'px');
    document.documentElement.style.setProperty('--fgPosX', fgPosX + 'px');
    document.documentElement.style.setProperty('--jmpHg','10px');
    coins++;
    coinsDisplay.textContent = coins;
    
    setTimeout(() => {
       document.documentElement.style.setProperty('--jmpHg','0px'); 
    }, 200);
}


const coinsDisplay = document.getElementById("coins");

