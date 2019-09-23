import React from "react";

export const checkWinner = (gameBoard, index, subindex) => {

    let winVertical = checkVertical(gameBoard, index, subindex);
    let winHorizontal = checkHorizontal(gameBoard, index, subindex);
    let winSlantRight = checkSlantRight(gameBoard, index, subindex);
    let winSlantLeft = checkSlantLeft(gameBoard, index, subindex);
    return Math.max(winHorizontal, winVertical, winSlantRight, winSlantLeft);
};


const checkVertical = (gameBoard, index, subindex) => {
    let win = 0;
    let right = subindex;
    let left = subindex;
    while (gameBoard[index][right + 1] === gameBoard[index][right]) {
        win++;
        right++;
    };
    while (gameBoard[index][left - 1] === gameBoard[index][left]) {
        win++;
        left--;
    };
    return win;
};

const checkHorizontal = (gameBoard, index, subindex) => {
    let win = 0;
    let down = index;
    let up = index;

    while (gameBoard[down - 1] && gameBoard[down][subindex] === gameBoard[down - 1][subindex]) {
        win++;
        down--;
    };
    while (gameBoard[up + 1] && gameBoard[up][subindex] === gameBoard[up + 1][subindex]) {
        win++;
        up++;
    };
    return win;
};

const checkSlantRight = (gameBoard, index, subindex) => {
    let win = 0;
    let down = index;
    let up = index;
    let right = subindex;
    let left = subindex;

    while (gameBoard[up + 1] && gameBoard[up][right] === gameBoard[up + 1][right + 1]) {
        win++;
        up++;
        right++;
    };
    while (gameBoard[down - 1] && gameBoard[down][left] === gameBoard[down - 1][left - 1]) {
        win++;
        down--;
        left--;
    };
    return win;
};

const checkSlantLeft = (gameBoard, index, subindex) => {
    let win = 0;
    let down = index;
    let up = index;
    let right = subindex;
    let left = subindex;

    while (gameBoard[down - 1] && gameBoard[down][right] === gameBoard[down - 1][right + 1]) {
        win++;
        down--;
        right++;
    };
    while (gameBoard[up + 1] && gameBoard[up][left] === gameBoard[up + 1][left - 1]) {
        win++;
        up++;
        left--;
    };
    return win;
};


