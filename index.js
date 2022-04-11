let button = document.querySelector('.btn');
button.addEventListener('click', function(){
    let str = document.querySelector('.str').value;
    let count = str.length;
    let output = document.querySelector('.output');
    output.innerHTML = count;
});