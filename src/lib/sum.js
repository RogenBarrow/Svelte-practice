import file from "./data.json"

function sumOfAll() {
    
const totalAmount = file.reduce((accumulator, item) => accumulator + item.amount, 0);
console.log("Total Amount:", totalAmount);

return sumOfAll;
}

export default sumOfAll;