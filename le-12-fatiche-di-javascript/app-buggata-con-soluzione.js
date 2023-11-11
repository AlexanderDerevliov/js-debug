const input = document.querySelector('input');
const array = null; // 1. const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return; // 2. if (input.value == '') return;

    array.add(input.value); // 3. array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.text = input.value; // 4. li.innerText = input.value;
    document.querySelector('ul').push(li); // 5. document.querySelector('ul').append(li)

    let counter = ''; // 6. let counter = 0;
    let item    = array[0];
    const max   = 1; // 7. let max = 1;
    const elems = [];

    for (let i = 0; i < array; i++) { // 8. for (let i = 0; i < array; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) { // 9. for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) // 10. mancano le parentesi graffe
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert'); // 11. const alert = document.getElementsByClassName('alert')[0];

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte'); // 12. console.log(`${item} trovato ${max} volte`);
});