import { checkWinner } from "../Game/CheckWinner.jsx";

function bestPlace(possibleFields) {
    if (possibleFields.length === 0) {
        return -1;
    }
    let max = possibleFields[0].win;
    let maxIndex = 0;

    for (let i = 1; i < possibleFields.length; i++) {
        if (possibleFields[i].win > max) {
            maxIndex = i;
            max = possibleFields[i].win;
        }
    }
    return maxIndex;
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
            let winCount =
                possibleFields = [...possibleFields, { row: index - 1, column: subindex, win: checkWinner(gameBoard, index - 1, subindex, "yellow") }];
        }
        subindex++;
        index = 0;
    };
    let chosen = bestPlace(possibleFields);
    console.log("Najlepsze pole ", possibleFields[chosen].row, " ", possibleFields[chosen].column)

    console.log(possibleFields)

    return (
        [possibleFields[chosen].row, possibleFields[chosen].column]
    )
};