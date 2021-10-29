const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    const color = document.querySelector('#colorPanel').value;
    document.body.style.backgroundColor = color;
    document.querySelector('#box').value = color;
})
