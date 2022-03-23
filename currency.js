document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.onsubmit = () => {
    fetch(
      'http://api.exchangeratesapi.io/v1/latest?access_key=f8b3ea5c9bbc2f61d66b9fa5e0339483&format=1'
    )
      .then((response) => response.json())
      .then((data) => {
        const currency = document
          .querySelector('#currency')
          .value.toUpperCase();
        const rate = data.rates[currency];
        const result = document.querySelector('#result');

        if (rate !== undefined) {
          result.innerHTML = `1 EUR is equal to ${rate.toFixed(
            3
          )} ${currency}.`;
        } else {
          result.innerHTML = 'Invalid currency.';
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    return false;
  };
});
