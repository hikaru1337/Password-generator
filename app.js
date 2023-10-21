let generateElement = document.getElementsByClassName('GenerateValue')[0]
let lengthElement = document.getElementsByClassName('Length Value')[0]

let upperCaseCheckBoxElement = document.getElementsByClassName('checkbox Uppercase')[0]
let lowerCaseCheckBoxElement = document.getElementsByClassName('checkbox Lowercase')[0]
let numbersElement = document.getElementsByClassName('checkbox Numbers')[0]
let symbolsElement = document.getElementsByClassName('checkbox Symbols')[0]

let generateButton = document.getElementsByClassName('button')[0]


generateButton.addEventListener('click', e => Calculate());

upperCaseCheckBoxElement.addEventListener('click', e => checkbox(e));
lowerCaseCheckBoxElement.addEventListener('click', e => checkbox(e));
numbersElement.addEventListener('click', e => checkbox(e));
symbolsElement.addEventListener('click', e => checkbox(e));




function Calculate () {

    const blops = document.getElementsByClassName("blop");


    if(!blops[0].classList.contains('green'))
    {
        blops[0].classList.add('green'); 
        blops[1].classList.add('green'); 

        setTimeout(function() {
            blops[0].classList.remove('green');
            blops[1].classList.remove('green');
        }, 1000);
    }




    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let length = lengthElement.value;
    if(numbersElement.checked)
        characters += '0123456789';
    if(symbolsElement.checked)
        characters += '~!@-#$';
    if(upperCaseCheckBoxElement.checked)
        characters = characters.toUpperCase();

    
    if(!length || length < 6)
        length = lengthElement.min;
    else if(length > 32)
        length = lengthElement.max;

    var generatePassword = () =>
            Array.from(crypto.getRandomValues(new Uint32Array(length)))
              .map((x) => characters[x % characters.length])
              .join('')
    
    generateElement.textContent = generatePassword();  
}

function checkbox (event) {
    var checkboxes = document.querySelectorAll('.block input[type="checkbox"]:checked');
    
    if (checkboxes.length == 1) {
        checkboxes[0].disabled = true;
    }
    else
    {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = false;
        }
    }
}




