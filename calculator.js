const valueDOM = document.getElementById('value');
let buttonsDOM = Array.from(document.getElementsByClassName('btn'));
function update(event, action) {
    valueDOM.textContent = action;
}
buttonsDOM.map(button => {
    button.addEventListener('click', e => {
        switch (e.target.innerHTML) {
            case 'Ac':
                valueDOM.innerHTML = '';
                break;
            case '=':
                valueDOM.innerHTML = eval(valueDOM.innerHTML);
                break;
            default:
                valueDOM.innerHTML += e.target.innerHTML;
        }
    });
});


