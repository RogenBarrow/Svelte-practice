

function calculateTotalAmount(result) {
  return result.reduce((total, result) => total + result.amount, 0);
}

export default calculateTotalAmount;