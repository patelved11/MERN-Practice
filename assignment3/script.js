document.getElementById("box-1").addEventListener("click",function(){
    this.style.backgroundColor ="red";
})
document.getElementById("box-2").addEventListener("click",function(){
    this.style.backgroundColor ="#00e12dff";
})
document.getElementById("box-3").addEventListener("click",function(){
    this.style.backgroundColor ="rgba(0, 115, 183, 1)";
})
document.getElementById("box-4").addEventListener("click",function(){
    this.style.backgroundColor="yellow";
})


document.getElementById("btn").addEventListener("click",function(){
    let name =document.getElementById("name").value;
    document.getElementById("greeting").textContent = "Hello, "+ name;
})