document.getElementById("myButton").addEventListener("click",function(){alert("Button clicked!");});

function displayDateTime(){
    x = new Date();
    document.getElementById("demo").innerHTML = x;
}