let bgPosX = 0
let fgPosX = 0
let rDis = parseFloat("42195")
let coins = 0
let pDis = 0
let wDis = 0
function move() {
    bgPosX += 2;
    fgPosX += 16
    rDis -= 200
    wDis += 200
    pDis = wDis / 42195 
    clearTimeout()
    document.documentElement.style.setProperty('--jmpHg','0px');
    document.getElementById("stepL").innerText = 'faltando:' + rDis.toFixed(1)
    document.documentElement.style.setProperty('--bgPosX', bgPosX + 'px');
    document.documentElement.style.setProperty('--fgPosX', fgPosX + 'px');
    document.documentElement.style.setProperty('--jmpHg','10px');
    document.documentElement.style.setProperty('--percentage', pDis);
    document.getElementById("progressBar").value = pDis
    coins++;
    coinsDisplay.textContent = coins;
    
    setTimeout(() => {
       document.documentElement.style.setProperty('--jmpHg','0px'); 
    }, 200);
}


const coinsDisplay = document.getElementById("coins");

