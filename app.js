const boxes        = document.querySelectorAll(".box");
const resetBtn     = document.querySelector("#reset");
const newGameBtn   = document.querySelector("#new-game");
const msgContainer = document.querySelector(".msg-container");
const msg          = document.querySelector("#msg");
let turnO = true; 
const winPattern = [
    [0,1,2],[3,4,5],[6,7,8],      
    [0,3,6],[1,4,7],[2,5,8],     
    [0,4,8],[2,4,6]               
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText = turnO ? "O" : "X";
        box.disabled  = true;
        if(checkWinner()){ showWinner(turnO ? "O" : "X"); }
        else if(isDraw()){ showWinner("Nobody – It’s a draw!"); }
        turnO = !turnO;
    });
});
function checkWinner(){
    return winPattern.some(p=>{
        const [a,b,c] = p;
        return boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText;
    });
}
function isDraw(){
    return [...boxes].every(b=>b.innerText);
}
function showWinner(winnerText){
    msg.textContent = `🎉 ${winnerText} wins!`;
    msgContainer.classList.remove("hide");
    boxes.forEach(b=>b.disabled=true);
}
function resetGame(){
    turnO = true;
    boxes.forEach(b=>{
        b.innerText = "";
        b.disabled  = false;
    });
    msgContainer.classList.add("hide");
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);