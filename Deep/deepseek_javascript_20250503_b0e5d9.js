// Example API call
async function sendToBackend(transaction) {
    const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(transaction)
    });
    return await response.json();
}