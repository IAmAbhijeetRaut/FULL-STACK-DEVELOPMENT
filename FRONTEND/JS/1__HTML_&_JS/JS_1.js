function msg_1(){
    alert("Hello World");
}

function display(){
    alert(b)
    console.log("b :",b);
    console.log("window b : ",window.b)
    
}
//console.log("b :",b);

function msg_2(){
    window.b=333;
    document.write(window.b);
    display();
}

console.log("window b outside : ",window.b)

