export const initArray = (row, column, defaultValue = "") => {
    const tab = [];
    for (let i = 0; i < row; i++) {
        tab.push([]);
        for (let j = 0; j < column; j++) {
            tab[i].push(defaultValue)
        }
    }
    return tab
}