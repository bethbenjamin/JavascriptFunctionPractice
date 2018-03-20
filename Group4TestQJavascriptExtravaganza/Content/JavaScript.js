


function checkPalindrome() {
    var userResponse = prompt('word')
    var var2 = userResponse.split('').reverse().join('');
    if (userResponse === var2) {
        alert('This is a palindrome');
    }
    else {
        alert('This is NOT a palindrome');
    }
}


function alphOrder() {
    var userResponse = prompt('word')
    var var2 = userResponse.split('').sort().join('');
    alert(var2);
}


function tringle() {
    var sideA = parseInt(prompt("Enter side one of Tringle : "));
    var sideB = parseInt(prompt("Enter side two of Tringle : "));
    var sideC = parseInt(prompt("Enter side three of Tringle:"));
    var s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    alert(area);


    document.write("<br>");
    document.write("<h3> Area of Tringle</h3>");
    document.write("<font face='arial' size='3'>");
    document.write(" The Area of Tringle is " + area + ".</font>");
}

function luckyNumber(){
    var r = Math.floor((Math.random() * 10) + 1);
    //alert(r);
    var userResponse = parseInt(prompt('Guess a number between 1 & 10!'));
    if (r === userResponse) {
        alert('Good work!');
    }
    else {
        alert('Not matched');
    }
}