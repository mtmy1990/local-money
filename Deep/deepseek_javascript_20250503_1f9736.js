function calculateFees(amount) {
    const fee = Math.min(50, Math.max(10, amount * 0.01));
    return {
        amount: amount,
        fee: fee,
        total: amount + fee
    };
}