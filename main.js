
function validateNumber(){
    let numberInput = document.getElementById("number-input").value;
    const numberOutput = document.getElementById("number");
    const wrongFormat = document.getElementById("wrong")
    const zeroNumber = document.querySelector(".num")
    const borderNumber = document.getElementById("number-input");
    numberInput = numberInput.replace(/\s/g, '');
    if (isNaN(numberInput) || numberInput.length > 16){
        borderNumber.style.border = "1px solid hsl(0, 100%, 66%)";
        wrongFormat.innerText = "Wrong format, numbers only and must be 16 digit.";


    }else{
       
        zeroNumber.style.display = "none";
        borderNumber.style.border = "1px solid hsl(279, 6%, 55%)";
        wrongFormat.innerText = "";
        numberInput = numberInput.replace(/\D/g, ' ');
        numberInput = numberInput.replace(/(\d{4})/g, '$1 ').trim();
        numberOutput.innerText = numberInput;;
        
}
}

function validateName(){
    const nameInput = document.getElementById("name-input").value;
    const nameOutput = document.getElementById("name-output");
    const borderName = document.getElementById("name-input")
    const wrongName = document.getElementById("wrong-name")
    const nameUser = document.querySelector(".jane")

    if (/\d/.test(nameInput)) {
        borderName.style.border = "1px solid hsl(0, 100%, 66%)";
        wrongName.innerText = "Error: Name should not contain numbers.";
    } else {
        // Clear error message
        borderName.style.border = "1px solid hsl(279, 6%, 55%)";
        nameUser.style.display = "none";
       wrongName.innerText = "";
       nameOutput.innerText = nameInput;

        // Continue with other validations or actions
    }
}

function monthInput(){
    const monthBorder = document.getElementById("month")
    const monthInput = document.getElementById("month").value;
    const monthOutput = document.getElementById("month-output")
    const wrongMonth = document.getElementById("wrong-month")
    const monthUser = document.querySelector(".month-input")

    if (isNaN(monthInput) || monthInput < 1 || monthInput > 12 || monthInput.length > 3){
        monthBorder.style.border = "1px solid hsl(0, 100%, 66%)";
        wrongMonth.innerText = "Error"

    }else{
        wrongMonth.innerText = "";
        monthBorder.style.border = "1px solid hsl(279, 6%, 55%)";
        monthUser.style.display = "none"
        monthOutput.innerText = monthInput;
    }
}

function yearInput(){
    const yearBorder = document.getElementById("year")
    const yearInputed = document.getElementById("year").value;
    const yearOutput = document.getElementById("year-output")
    const wrongYear = document.getElementById("wrong-year")
    const yearUser = document.querySelector(".year-input")

    if (isNaN(yearInputed) || yearInputed.length > 3){
        yearBorder.style.border = "1px solid hsl(0, 100%, 66%)";
        wrongYear.innerText = "Error"

    }else{
        wrongYear.innerText = "";
        yearBorder.style.border = "1px solid hsl(279, 6%, 55%)";
        yearUser.style.display = "none"
        yearOutput.innerText = "/" + yearInputed;
    }
}

function cvcInput(){
    const cvcBorder = document.getElementById("cvc")
    const cvcInputed = document.getElementById("cvc").value;
   
    const cvcOutput = document.getElementById("cvc-output")
    const wrongCVC = document.getElementById("wrong-cvc")
    const cvcUser = document.querySelector(".zero")

    if (isNaN(cvcInputed) || cvcInputed.length > 3){
        cvcBorder.style.border = "1px solid hsl(0, 100%, 66%)";
        wrongCVC.innerText = "Error"

    }else{
        wrongCVC.innerText = "";
        cvcBorder.style.border = "1px solid hsl(279, 6%, 55%)";
        cvcUser.style.display = "none"
        cvcOutput.innerText = cvcInputed;
    }
}

function fillComplete(){
    const monthInput = document.getElementById("month").value;
    const nameInput = document.getElementById("name-input").value;
    let numberInput = document.getElementById("number-input").value;
    const yearInputed = document.getElementById("year").value;
    const cvcInputed = document.getElementById("cvc").value;
    const complete = document.getElementById("complete");
    const form = document.getElementById("form");
    const emptyName = document.getElementById("empty-name");
    const emptyNumber = document.getElementById("empty-number");
    const emptyMonth = document.getElementById("empty-month");
    const emptyCVC = document.getElementById("empty-cvc");
    const emptyYear = document.getElementById("empty-year");
    const button = document.getElementById("btn")


    if (nameInput === "" && numberInput === "" && monthInput === "" &&  cvcInputed === "" && yearInputed === ""){
        emptyName.innerText = "Can't be blank!";
        emptyNumber.innerText = "Can't be blank!";
        emptyMonth.innerText = "Can't be blank!";
        emptyCVC.innerText = "Can't be blank!";
        emptyYear.innerText = "Can't be blank!";
        button.classList.add("shake-button");
        setTimeout(function () {
          
            button.classList.add("shake-button");
        }, 1000)

 }else if(nameInput === ""){
        emptyName.innerText = "Can't be blank!";
    }else if(numberInput === ""){
        emptyNumber.innerText = "Can't be blank!";
    }else if(monthInput === ""){
        emptyMonth.innerText = "Can't be blank!";
    }else if(yearInput === ""){
        emptyCVC.innerText = "Can't be blank!";
    }else if(cvcInput === ""){
        emptyYear.innerText = "Can't be blank!";    
    }else{
        
        button.classList.remove("shake-button");
        form.style.display = "none";
        complete.style.display = "flex";
    }
}