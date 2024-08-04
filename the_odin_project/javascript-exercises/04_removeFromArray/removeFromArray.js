function removeFromArray(array, ...itemsToRemove) {
    let filtered = array.filter((current) => {
        //removeItems must be an array
        return !itemsToRemove.includes(current);
    });
    return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;
