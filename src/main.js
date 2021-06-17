const btn = document.getElementById('submit')

const inputs = document.querySelectorAll('input')
const inputPairs = new Object();



btn.addEventListener('click', function () {
    inputs.forEach((key) => {
        inputPairs[key.id] = key.value
    });

    localStorage.setItem('inputPairs', JSON.stringify(inputPairs))
})