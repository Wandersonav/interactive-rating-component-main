const numero = document.querySelector("#envio");
const text1 = localStorage.getItem("texto1");

const envio  = [document.querySelector("#numero1"),
                document.querySelector("#numero2"),
                document.querySelector("#numero3"),
                document.querySelector("#numero4"),
                document.querySelector("#numero5")];
      

envio.forEach(element =>{

element.addEventListener("click", function (e){
  e.preventDefault();
 
 numero.addEventListener("click", function (even) {
  let text = element.value;
  localStorage.setItem('texto1', text);

})
})
});

