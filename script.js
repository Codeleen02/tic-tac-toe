let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset")
let new_btn=document.querySelector(".new-btn")
let msg=document.querySelector("#msg")
let msgContainer=document.querySelector(".msgContainer")
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6],
    [1,4,7]
]
const resetGame=()=>{
    turnO=true
    enableBoxes()
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
     if(turnO){
        box.innerText="X"
        turnO=false;
     }
     else{
        box.innerText="O"
        turnO=true
     }
     box.disabled=true
     checkWinner()
    })
   
})

const disabledboxes=()=>{
 for (let box of boxes) {
    box.disabled=true;
 }
}

const enableBoxes=()=>{
for (let box of boxes) {
    box.disabled=false;
    box.innerText=""
}
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledboxes();
}
const checkWinner=()=>{
    for (let pattern of winPatterns) {
    val1=boxes[pattern[0]].innerText,
    val2=boxes[pattern[1]].innerText,
    val3=boxes[pattern[2]].innerText 
    
    if(val1!="" && val2!="" && val3!=""){
        if(val1===val2 && val2===val3){
            console.log("Winner",val1);
            showWinner(val1)
        }
        }
    }
}
resetBtn.addEventListener("click",resetGame)
new_btn.addEventListener("click",resetGame)