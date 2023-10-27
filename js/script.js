// DATI

const btnElem      = document.querySelector(".start");
const gridElem     = document.querySelector(".grid");
const numbersArray = cellsNumber(100);

// LOGICA

btnElem.addEventListener("click", handleBtnClick);

/***********************/
// FUNZIONI

function cellsNumber(maxNumber) {
    const result = [];

    for (let i = 1; i <= maxNumber; i++) { 
        result.push(i);
    }

    return result;
}

function createCells(innerNumber) {

    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;

    return newCell;

}

function handleBtnClick() {
    for (let i = 0; i < numbersArray.length; i++) {

        const curNumber = numbersArray[i];
        const cell = createCells(curNumber);

        cell.addEventListener("click", function(){

            const clickedNumber = parseInt(this.textContent);
            console.log(clickedNumber);
            cell.classList.add("azure");
        });

        gridElem.append(cell);
        gridElem.classList.add("show");
    }
}