class Calculatrice{
    display(str)
    {
        let txt = document.getElementById("affichage");
        txt.innerText = str;
    }
    add(n1, n2)
    {
        return(parseFloat(n1) + parseFloat(n2));
    }
    sub(n1, n2)
    {
        return(parseFloat(n1) - parseFloat(n2));
    }

    div(n1, n2)
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

    mul(n1, n2)
    {
        return(parseFloat(n1) * parseFloat(n2));
    }

    operate(n1, n2, str)
    {
        // On vérifie les paramètres:
        if((n1 == "" && n2 == "") || n1.toString().indexOf(".") != n1.toString().lastIndexOf(".") || n2.toString().indexOf(".") != n2.toString().lastIndexOf("."))
        {
            return('Error');
        }
        else if(this.operation = "")
        {
            return(this.mainStr);
        }

        switch (str) {
            case "+":
                return this.add(n1, n2);
                break;
            
            case "-":
                return this.sub(n1, n2);
                break;

            case "/":
                return this.div(n1, n2);
                break;

            case "*":
                return this.mul(n1, n2);
                break;

            default:
                return n1; // Pour le cas où on appuie sur = sans avoir effectué d'opération
        }
        
    }
}
