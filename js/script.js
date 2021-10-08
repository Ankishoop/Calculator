let screen = document.getElementById("screen");
let button = document.querySelectorAll("button");
let screenvalue = "";
for(variable of button)
{
    variable.addEventListener("click" , (e)=>
    {
        buttontext = e.target.innerText;     // e.target is click wala button
        // console.log(buttontext);   
        // screen.innerhtml = "buttontext";
        if(buttontext == "X")
        {
            buttontext = "*";   
            screen.value += '*';
        }
        else if(buttontext == "=")
        {
            screen.value = eval(screen.value);   
        }else if(buttontext == "C")
        {
            screen.value ="";
        }
        else
        {
            screen.value+= buttontext;
        }
    });
}


