
export const checkPc = (gameBoard, index, subindex) => {
    let horizontalWin = checkHorizontal(gameBoard, index, subindex);
    let verticalWin = checkVertical(gameBoard, index, subindex)
    return verticalWin + horizontalWin;
}

const checkHorizontal = (gameBoard, index, subindex) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        if (subindex - step >= 0 && subindex - step + 3 < 7) {
            cuts.push(gameBoard[index].slice(subindex - step, subindex - step + 4))
        }
    }
    return cuts.reduce((win, element) => win + checkCut(element), 0);
};

const checkVertical = (gameBoard, index, subindex) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        if (index - step >= 0 && index - step + 3 < 6) {
            cuts.push(gameBoard.slice(index - step, index - step + 4).map((element) => element[subindex]))
        }
    }
    let total = cuts.reduce((win, element) => win + checkCut(element), 0)

    console.log("Cuts: ", cuts);
    console.log("Total: ", total);
    return total;
};


const checkCut = (cut) => {
    const valueMap = {
        red: -100,
        yellow: 10,
    }
    if (cut.some((element) => element === "red")) { return 0; }
    return cut.reduce((win, element) => win + (valueMap[element] || 1), 0)
}