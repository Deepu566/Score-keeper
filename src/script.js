const player1 = document.querySelector(".btn1")
const player2 = document.querySelector(".btn2")
const displayP1 = document.querySelector(".player1")
const displayP2 = document.querySelector(".player2")
const reset = document.querySelector(".reset")
const select = document.getElementById("playingTo")
const winner = document.querySelector(".hidden")


let p1Score = 0;
let p2Score = 0;
let playingTo = 3;
let isGameOver = false;


select.addEventListener('change', (e) => {
    playingTo = parseInt(e.target.value);
    resetGame();
})
player1.addEventListener('click', () => {
    if (!isGameOver) {
        if (playingTo > p1Score) {
            p1Score++;
            displayP1.textContent = p1Score;
        }
    }
    if (p1Score === playingTo || playingTo === p2Score) {
        isGameOver = true;
        gameOver();
    }
})

player2.addEventListener('click', () => {
    if (!isGameOver) {
        if (playingTo > p2Score) {
            p2Score++;
            displayP2.textContent = p2Score;
        }
    }

    if (playingTo === p2Score || playingTo === p2Score) {
        isGameOver = true;
        gameOver()
    }
})
const resetGame = () => {
    displayP1.textContent = 0
    p1Score = 0;
    displayP2.textContent = 0
    p2Score = 0;
    isGameOver = false
}

reset.addEventListener("click", () => {
    resetGame();
    player1.style.backgroundColor = "#16A34A";
    player2.style.backgroundColor = "#2763EB";
    winner.classList = "hidden"
    player1.removeAttribute("disabled")
    player2.removeAttribute("disabled")
    winner.textContent = ""
})

function gameOver() {
    player1.style.backgroundColor = "#BBF7D0";
    player2.style.backgroundColor = "#BFDBFE";
    player1.setAttribute("disabled", true)
    player2.setAttribute("disabled", true)
    if (p1Score > p2Score) {
        winner.classList = `block text-[#16A34A] font-bold text-center`
        winner.append(`Player 1 Won by ${p1Score - p2Score} ${(p1Score - p2Score) === 1 ? "point" : "points"} `)
    } else {
        winner.classList = `block text-[#2763EB] font-bold text-center`
        winner.append(`Player 2 Won by ${p2Score - p1Score} ${(p2Score - p1Score) === 1 ? "point" : "points"} `)
    }
}