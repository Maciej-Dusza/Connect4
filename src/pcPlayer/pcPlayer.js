import { checkWinner } from "../Game/CheckWinner.jsx";

function findBestPlace(possibleFields) {
    if (possibleFields.length === 0) {
        return -1;
    }
    let maxIndexes = [0];
    let max = possibleFields[0].win;

    for (let i = 0; i < possibleFields.length - 1; i++) {
        // Check if you can win
        if (possibleFields[i].win > 2) { return i; }
        // Check if you can lose
        if (possibleFields[i].lose > 2) { return i; }

        //If checked Field is better, reset best and save checked field 
        if (max < possibleFields[i + 1].win) {
            max = possibleFields[i + 1].win;
            maxIndexes = [i + 1];
        }
        // If checked Field is as good as best, add to posible choice
        else if (max === possibleFields[i + 1].win) {
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
                lose: checkWinner(gameBoard, index - 1, subindex, "red")
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