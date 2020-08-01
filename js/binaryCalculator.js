var btn0 = document.getElementById('btn0');
var btn1 = document.getElementById('btn1');
var result = document.getElementById('res');
var clear = document.getElementById('btnClr');
var btnSum = document.getElementById('btnSum');
var btnSub = document.getElementById('btnSub');
var btnMul = document.getElementById('btnMul');
var btnDiv = document.getElementById('btnDiv');
var btnEql = document.getElementById('btnEql');

var a, b;
var binNum = [];
var opr = "";

btn0.addEventListener('click', () => {
    binNum += "0";
    result.innerHTML = binNum;
});
btn1.addEventListener('click', () => {
    binNum += "1";
    result.innerHTML = binNum;
});

clear.addEventListener('click', () => {
    result.innerHTML = "";
});

btnSum.addEventListener('click', () => {
    a = parseInt(result.innerHTML, 2);
    binNum = "";
    result.innerHTML = binNum;
    opr = "+";
});
btnSub.addEventListener('click', () => {
    a = parseInt(result.innerHTML, 2);
    binNum = "";
    result.innerHTML = binNum;
    opr = "-";
});
btnMul.addEventListener('click', () => {
    a = parseInt(result.innerHTML, 2);
    binNum = "";
    result.innerHTML = binNum;
    opr = "*";
});
btnDiv.addEventListener('click', () => {
    a = parseInt(result.innerHTML, 2);
    binNum = "";
    result.innerHTML = binNum;
    opr = "/";
});


btnEql.addEventListener('click', () => {
    b = parseInt(result.innerHTML, 2);
    binNum = "";
    result.innerHTML = binNum;

    var ans;
    var r;
    switch(opr){
        case '+':
            r = a + b;
            console.log(res);
            ans = r.toString(2);
            console.log(ans);
            break;
        case '-':
            r = a - b;
            ans = r.toString(2);
            break;
        case '*':
            r =  a * b;
            ans = r.toString(2);
            break;
        case '/':
            r =  Math.floor(a / b);
            ans = r.toString(2);
            break;
        default:
            console.log("Operator Error");
            ans = "";
            break;
    }
    result.innerHTML = ans;
});