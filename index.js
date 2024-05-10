let form = document.forms.namedItem('add');

form.onsubmit = (e) => {
    e.preventDefault();
    let inputs = form.querySelectorAll('input');
    let selectBoxes = form.querySelectorAll('select');
    let error = false;
    let object = {};

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            error = true;
            input.style.border = '1px solid red'; 
        } else {
            input.style.border = '1px solid green'; 
            object[input.placeholder] = input.value; 
        }
    });

    selectBoxes.forEach(selectBox => {
        if (selectBox.value.trim() === '') {
            error = true;
            selectBox.style.border = '1px solid red'; 
            selectBox.style.border = '1px solid black'; 
            object[selectBox.name] = selectBox.value;  
        }
    });

    if (error) {
        alert('Please fill in all fields.');
        return;
    }
form.reset()
    console.log(object); 
};
