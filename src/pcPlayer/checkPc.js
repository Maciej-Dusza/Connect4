import { oponenet } from "../helpers/helper";


export const checkPc = (gameBoard, index, subindex, player) => {
    const checksFun = [checkHorizontal, checkVertical, checkSlantRight, checkSlantLeft];
    return checksFun.reduce((acc, fun) => acc + fun(gameBoard, index, subindex, player), 0);
}

const checkHorizontal = (gameBoard, index, subindex, player) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        const subindexInRange = subindex - step >= 0 && subindex - step + 3 < gameBoard[0].length;
        if (subindexInRange) {
            const horizontal = gameBoard[index].slice(subindex - step, subindex - step + 4);
            cuts.push(horizontal);
        }
    }
    return cuts.reduce((win, element) => win + checkCut(element, player), 0);
};

const checkVertical = (gameBoard, index, subindex, player) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        const indexInRange = index + step <= 5 && index + step - 3 >= 0;
        if (indexInRange) {
            const vertical = gameBoard
                .slice(index + step - 3, index + step + 1)
                .map((element) => element[subindex])
            cuts.push(vertical)
        }
    }
    return cuts.reduce((win, element) => win + checkCut(element, player), 0)
};

const checkSlantRight = (gameBoard, index, subindex, player) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        const indexInRange = index + step <= 5 && index + step - 3 >= 0;
        const subindexInRange = subindex - step >= 0 && subindex - step + 3 < gameBoard[0].length;
        if (indexInRange && subindexInRange) {
            const slant = gameBoard
                .slice(index + step - 3, index + step + 1)
                .map((element, position) => element[subindex + 3 - position - step])
            cuts.push(slant);
        }
    }
    return cuts.reduce((win, element) => win + checkCut(element, player), 0)
};

const checkSlantLeft = (gameBoard, index, subindex, player) => {
    let cuts = [];
    for (let step = 0; step < 4; step++) {
        const indexInRange = index + step <= 5 && index + step - 3 >= 0;
        const subIndexInRange = subindex - 3 + step >= 0 && subindex - step < gameBoard[0].length
        if (indexInRange && subIndexInRange) {
            const slant = gameBoard
                .slice(index + step - 3, index + step + 1)
                .map((element, position) => element[subindex - 3 + position + step])
            cuts.push(slant);
        }
    }
    return cuts.reduce((win, element) => win + checkCut(element, player), 0)
};

const checkCut = (cut, player) => {
    if (cut.some((element) => element === oponenet(player))) { return 0; }
    return cut.reduce((win, element) => win + (element === player ? 30 : 1), 0)
}