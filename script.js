let bgPosX = 0
let fgPosX = 0
let rDis = parseFloat("42195")
let coins = 0

function move() {
    bgPosX += 2;
    fgPosX += 16
    rDis -= 0.1
    document.getElementById("stepL").innerText = 'faltando:' + rDis.toFixed(1)
    document.documentElement.style.setProperty('--bgPosX', bgPosX + 'px');
    document.documentElement.style.setProperty('--fgPosX', fgPosX + 'px');
    coins++;
    coinsDisplay.textContent = coins;
}

const coinsDisplay = document.getElementById("coins");
