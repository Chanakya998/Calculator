var a,b;

function store() {
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    console.log(a,b);
}

function add(a,b) {
    document.getElementById("answer").innerHTML = a + b;
}

function sub(a,b) {
    document.getElementById("answer").innerHTML = a - b;
}

function mul(a,b) {
    document.getElementById("answer").innerHTML = a * b;
}

function div(a,b) {
    document.getElementById("answer").innerHTML = a / b;
}
