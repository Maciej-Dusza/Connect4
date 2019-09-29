import { checkPc } from "./checkPc.js";
import { checkWinner } from "../Game/CheckWinner.jsx";

function findBestPlace(possibleFields) {
    if (possibleFields.length === 0) {
        return -1;
    }
    // Check if you can win
    let wins = possibleFields.map((element) => element.win);
    if (Math.max(...wins) > 2) { return wins.indexOf(Math.max(...wins)) }

    // Check if you can lose
    let loses = possibleFields.map((element) => element.lose);
    if (Math.max(...loses) > 2) { return loses.indexOf(Math.max(...loses)) }

    let maxIndexes = [0];
    let max = possibleFields[0].advanceWin;
    for (let i = 0; i < possibleFields.length - 1; i++) {

        //If checked Field is better, reset best and save checked field 
        if (max < possibleFields[i + 1].advanceWin) {
            max = possibleFields[i + 1].advanceWin;
            maxIndexes = [i + 1];
        }
        // If checked Field is as good as best, add to posible choice
        else if (max === possibleFields[i + 1].advanceWin) {
            maxIndexes = [...maxIndexes, i + 1];
        }
        //If checked is Worst do nothing
    }
    //Pick random number from 0 to count of best options
    let chosenBestIndex = Math.floor(Math.random() * 100) % maxIndexes.length;

    return maxIndexes[chosenBestIndex];
}

export function pcPlayer(gameBoard) {

    let index = 0;
    let subindex = 0;

    let possibleFields = [];

    while (subindex < 7) {
        if (gameBoard[index][subindex] === "") {
            while (index < 6 && gameBoard[index][subindex] === "") {
                index++;
            }
            possibleFields = [...possibleFields,
            {
                row: index - 1,
                column: subindex,
                win: checkWinner(gameBoard, index - 1, subindex, "yellow"),
                lose: checkWinner(gameBoard, index - 1, subindex, "red"),
                advanceWin: checkPc(gameBoard, index - 1, subindex, "yellow") + 3 * checkPc(gameBoard, index - 1, subindex, "red"),
                adWin: checkPc(gameBoard, index - 1, subindex, "yellow"),
                adLose: checkPc(gameBoard, index - 1, subindex, "red"),
            }];

        }
        subindex++;
        index = 0;
    };

    console.log(possibleFields)

    let chosenIndex = findBestPlace(possibleFields);
    console.log("Najlepsze pole ", possibleFields[chosenIndex].row, possibleFields[chosenIndex].column)


    return ([possibleFields[chosenIndex].row, possibleFields[chosenIndex].column])
};