let baseCalculator = new Calculatrice();

let listOfButtons = document.getElementsByTagName("button");

let mainStr = "";
let operation = "";
let secStr = "";
let strSel = false; // Pour dire dans quelle string on écrit les valeurs (false = main, true = sec)


console.log(listOfButtons[0].id);

for(let i = 0; i < listOfButtons.length; i++)
{
    console.log(listOfButtons[i].id);
    console.log(parseInt(listOfButtons[i].id));
    if(!isNaN(parseInt(listOfButtons[i].id)))
    {
        listOfButtons[i].addEventListener('click', function(){if(!strSel){mainStr += listOfButtons[i].id}else{secStr += listOfButtons[i].id}; baseCalculator.display(mainStr + operation + secStr)}, false);
    }
    else if(listOfButtons[i].id == ".")
    {
        listOfButtons[i].addEventListener('click', function(){if(!strSel){mainStr += listOfButtons[i].id}else{secStr += listOfButtons[i].id}; baseCalculator.display(mainStr + operation + secStr)}, false);

    }
    else if(listOfButtons[i].id == "+" || listOfButtons[i].id == "-" || listOfButtons[i].id == "/" || listOfButtons[i].id == "*")
    {
        listOfButtons[i].addEventListener('click', function(){if(operation == ""){strSel = true; operation = listOfButtons[i].id; baseCalculator.display(mainStr + operation + secStr)}else{mainStr = baseCalculator.operate(mainStr, secStr, operation); baseCalculator.display(mainStr); secStr = ""; operation = listOfButtons[i].id; strSel = true}}, false); // Rajouter un if(operation != "") pour tester si il y avait déjà un signe

    }
    else if(listOfButtons[i].id == "clear")
    {
        listOfButtons[i].addEventListener('click', function(){baseCalculator.display(""); mainStr = ""; operation = ""; secStr = ""; strSel = false});

    }
    else // donc si on appuie sur =
    {
        listOfButtons[i].addEventListener('click', function(){mainStr = baseCalculator.operate(mainStr, secStr, operation); baseCalculator.display(mainStr); secStr = ""; strSel = false});

    }
}

document.addEventListener('keydown', function(event){console.log(!isNaN(event.key)); if(!isNaN(event.key)){if(!strSel){mainStr += event.key}else{secStr += event.key}; baseCalculator.display(mainStr + operation + secStr)}});