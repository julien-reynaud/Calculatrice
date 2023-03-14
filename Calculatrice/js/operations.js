function add(n1, n2)
{
    return(parseFloat(n1) + parseFloat(n2));
}

function sub(n1, n2)
{
    return(parseFloat(n1) - parseFloat(n2));
}

function div(n1, n2)
{
    if(n2 != 0)
    {
        return(parseFloat(n1) / parseFloat(n2));
    }
    else
    {
        return("Error");
    }
}

function mul(n1, n2)
{
    return(parseFloat(n1) * parseFloat(n2));
}

function operate(n1, n2, str)
{
    // On vérifie les paramètres:
    if((n1 == "" && n2 == "") || n1.toString().indexOf(".") != n1.toString().lastIndexOf(".") || n2.toString().indexOf(".") != n2.toString().lastIndexOf("."))
    {
        return('Error');
    }
    else if(operation = "")
    {
        return(mainStr);
    }

    switch (str) {
        case "+":
            return add(n1, n2);
            break;
        
        case "-":
            return sub(n1, n2);
            break;

        case "/":
            return div(n1, n2);
            break;

        case "*":
            return mul(n1, n2);
            break;

        default:
            return n1; // Pour le cas où on appuie sur = sans avoir effectué d'opération
    }
}