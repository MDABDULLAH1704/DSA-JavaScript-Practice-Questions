// Stock Buy and Sell          
// Prices = [7, 1, 5, 3, 6, 4] return max profit           
function maxProfitFunc(price) {
    let maxProfit = 0;
    let bestBuy = price[0];

    for (let i = 1; i < price.length; i++) {
        if (price[i] > bestBuy) {
            maxProfit = Math.max(maxProfit, price[i] - bestBuy);
        }
        bestBuy = Math.min(bestBuy, price[i]);
    }
    return maxProfit;
}
console.log(maxProfitFunc([7, 1, 5, 3, 6, 4]));
