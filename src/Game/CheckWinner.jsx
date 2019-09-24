import React from "react";

export const checkWinner = (gameBoard, index, subindex, current) => {
    let x = current || gameBoard[index][subindex]
    let winVertical = checkVertical(gameBoard, index, subindex, x);
    let winHorizontal = checkHorizontal(gameBoard, index, subindex, x);
    let winSlantRight = checkSlantRight(gameBoard, index, subindex, x);
    let winSlantLeft = checkSlantLeft(gameBoard, index, subindex, x);
    return Math.max(winHorizontal, winVertical, winSlantRight, winSlantLeft);

};


const checkVertical = (gameBoard, index, subindex, x) => {
    let win = 0;
    let right = subindex;
    let left = subindex;
    while (gameBoard[index][right + 1] === x) {
        win++;
        right++;
    };
    while (gameBoard[index][left - 1] === x) {
        win++;
        left--;
    };
    return win;
};

const checkHorizontal = (gameBoard, index, subindex, x) => {
    let win = 0;
    let down = index;
    let up = index;

    while (gameBoard[down - 1] && x === gameBoard[down - 1][subindex]) {
        win++;
        down--;
    };
    while (gameBoard[up + 1] && x === gameBoard[up + 1][subindex]) {
        win++;
        up++;
    };
    return win;
};

const checkSlantRight = (gameBoard, index, subindex, x) => {
    let win = 0;
    let down = index;
    let up = index;
    let right = subindex;
    let left = subindex;

    while (gameBoard[up + 1] && x === gameBoard[up + 1][right + 1]) {
        win++;
        up++;
        right++;
    };
    while (gameBoard[down - 1] && x === gameBoard[down - 1][left - 1]) {
        win++;
        down--;
        left--;
    };
    return win;
};

const checkSlantLeft = (gameBoard, index, subindex, x) => {
    let win = 0;
    let down = index;
    let up = index;
    let right = subindex;
    let left = subindex;

    while (gameBoard[down - 1] && x === gameBoard[down - 1][right + 1]) {
        win++;
        down--;
        right++;
    };
    while (gameBoard[up + 1] && x === gameBoard[up + 1][left - 1]) {
        win++;
        up++;
        left--;
    };
    return win;
};


