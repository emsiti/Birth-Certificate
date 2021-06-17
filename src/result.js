const inputPairs = JSON.parse(localStorage.getItem('inputPairs'))

const spans = document.querySelectorAll('span')

spans.forEach(span => {
    span.textContent = inputPairs[span.id]
});