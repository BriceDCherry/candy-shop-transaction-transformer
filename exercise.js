function candySalesToObject(sales){
    return {
        item: sales[0],
        price: +sales[1],
        quantity: sales[2]
    }
}

function salesDayToObject(date){
    return {
        date: Object.keys(date),
    }
}

module.exports = {
    candySalesToObject,
    salesDayToObject,
  //  allSalesToArray
};
