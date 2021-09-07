const priceInput = document.querySelector("#price-input");
const stockInputqty = document.querySelector("#stock-input");
const currentInput = document.querySelector("#current-input");
const checkBtn = document.querySelector("#check-button");
const showMessage = document.querySelector("#show-message");

checkBtn.addEventListener("click", clickHandler);
function changeColor(color) {
    document.body.style.background = color;
}
  
function clickHandler(e){
    var pI = Number(priceInput.value);
    var sIqty = Number(stockInputqty.value);
    var cI = Number(currentInput.value);

    calculateProfitOrLoss(pI, sIqty, cI);
}

function calculateProfitOrLoss(initial , quantity, current){
if(initial > 0 && current > 0 && quantity > 0){

        if(initial === current){
            changeColor('black');
            showMessage.innerText = "You have neither Profit nor Loss 🤐" ;
        }
        else if(initial > current){
            var diff = (initial- current);
            var loss = diff * quantity;;
            var lossPercentage = (diff / initial) * 100;
            changeColor('green');
            showMessage.innerText = `Hey! the loss is Rs.${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)} % ☹️ ` ;
            
        } 
        else {
            changeColor('green');
            var diff = ( current - initial );
            var profit = diff * quantity;
            var profitPercentage = ( diff/ initial ) * 100;
            
            showMessage.innerText = `Hey! the profit is Rs.${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)} % 😊 ` ;

        }

 }else{
        changeColor('black');
        showMessage.innerText = "Please, Enter valid Inputs. 🤨";
    }
  
}


