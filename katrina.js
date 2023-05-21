document.getElementById("myButton").addEventListener("click",function(){alert("Button clicked!");});

function displayDateTime(){
    const now = new Date();
    document.getElementById("demo").innerHTML = now;
}