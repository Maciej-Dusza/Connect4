import { checkWinner } from "../Game/CheckWinner.jsx";

function bestPlace(possibleFields) {
    if (possibleFields.length === 0) {
        return -1;
    }
    let max = possibleFields[0].win;
    let maxIndex = 0;
    let loseIndex = -1;

    for (let i = 0; i < possibleFields.length; i++) {
        if (possibleFields[i].lose > 2) {
            loseIndex = i;
            console.log("Lose: ", loseIndex);
        }
        if (possibleFields[i].win > max) {
            maxIndex = i;
            max = possibleFields[i].win;
        }
    }
    let chosenIndex = 0;
    if (loseIndex === -1) { chosenIndex = maxIndex }
    else { chosenIndex = loseIndex }

    return [possibleFields[chosenIndex].row, possibleFields[chosenIndex].column];
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



    console.log("Najlepsze pole ", bestPlace(possibleFields))
    console.log(possibleFields)


    return (
        bestPlace(possibleFields)
    )
};