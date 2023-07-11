const form = document.getElementById('currencyForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const amountInNaira = document.getElementById('amount').value;

  const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates.NGN;
      const amountInDollars = amountInNaira * exchangeRate;

      const resultElement = document.getElementById('result');
      resultElement.textContent = `${amountInNaira} USD is approximately ${amountInDollars.toFixed(1)} NGN.`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
