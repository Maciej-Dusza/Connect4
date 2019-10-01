import { checkPc } from "./checkPc.js";
import { checkWinner } from "../Game/CheckWinner.jsx";
import { oponenet } from "../helpers/helper.js";

const NO_FIELDS = [-1, -1];

export function pcPlayer(gameBoard, player, rows, columns) {

    let possibleFields = findPossibleFields(gameBoard, player, rows, columns)
    if (possibleFields.length === 0) {
        return NO_FIELDS;
    }
    let indexOfWin = checkWin(possibleFields)
    if (indexOfWin !== -1) { return ([possibleFields[indexOfWin].row, possibleFields[indexOfWin].column]) }

    let indexOfLose = checkLose(possibleFields)
    if (indexOfLose !== -1) { return ([possibleFields[indexOfLose].row, possibleFields[indexOfLose].column]) }

    let chosenIndex = findBestPlace(gameBoard, possibleFields, player);


    return ([possibleFields[chosenIndex].row, possibleFields[chosenIndex].column])
};

function findPossibleFields(gameBoard, player, rows, columns) {
    let index = 0;
    let subindex = 0;
    let possibleFields = [];
    while (subindex < columns) {
        if (gameBoard[index][subindex] === "") {
            while (index < rows && gameBoard[index][subindex] === "") {
                index++;
            }
            index--;

            possibleFields = [...possibleFields,
            {
                row: index,
                column: subindex,
                win: checkWinner(gameBoard, index, subindex, oponenet(player)),
                lose: checkWinner(gameBoard, index, subindex, player),
            }]
        }
        subindex++;
        index = 0;
    }
    return possibleFields;
}


function checkWin(possibleFields) {
    let wins = possibleFields.map((element) => element.win);
    if (Math.max(...wins) > 2) { return wins.indexOf(Math.max(...wins)) }
    return -1;
}

function checkLose(possibleFields) {
    let loses = possibleFields.map((element) => element.lose);
    if (Math.max(...loses) > 2) { return loses.indexOf(Math.max(...loses)) }
    return -1;
}

function countScore(gameBoard, index, subindex, player) {
    const winScore = checkPc(gameBoard, index, subindex, player);
    const loseScore = checkPc(gameBoard, index, subindex, oponenet(player));
    console.log(winScore, "  ", loseScore)
    return winScore + 2 * loseScore;
}

function findBestPlace(gameBoard, possibleFields, player) {
    let fieldScore = possibleFields
        .map((element, index) =>
            (countScore(gameBoard, possibleFields[index].row, possibleFields[index].column, player)))
    console.log("Field Score: ", fieldScore)
    console.log("Possible Fields: ", possibleFields)

    let maxIndexes = [0];
    let max = fieldScore[0];
    for (let i = 0; i < possibleFields.length - 1; i++) {

        //If checked Field is better, reset best and save checked field 
        if (max < fieldScore[i + 1]) {
            max = fieldScore[i + 1];
            maxIndexes = [i + 1];
        }
        // If checked Field is as good as best, add to posible choice
        else if (max === fieldScore[i + 1]) {
            maxIndexes = [...maxIndexes, i + 1];
        }
        //If checked is Worst do nothing
    }
    //Pick random number from 0 to count of best options
    let chosenBestIndex = Math.floor(Math.random() * 100) % maxIndexes.length;

    return maxIndexes[chosenBestIndex];
}