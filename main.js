let numberInput = document.getElementById('number');
let clickbutton = document.getElementById('button');
let output = document.getElementById('output');

function answer()
{
    let list_number = Number(numberInput.value);
    let output_number = '';

    for(i = 1 ; i <= 12 ; i++)
    {
        output_number += '<p>';
        output_number += list_number + ' x ' + i + ' = '  + (list_number*i)  ;
        output_number += '</p>' ;
    }

    output.innerHTML = output_number;
}

clickbutton.addEventListener('click', answer);