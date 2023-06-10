let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");

let total = (cantidad, categoria, div) => {
  if (categoria === "1") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (categoria === "2") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (categoria === "3") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`;
  }
};

let emptyInput = (input) => {
  if (input.value === "") {
    input.style.borderColor = "red";
    // Swal.fire('Completa el campo en rojo')
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Completa el campo en rojo!',
      })
    return true;
   } else {
     input.style.borderColor = "blue";
   }
 };



 let emptyInputM = (input) => {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    input.style.borderColor = "blue";
   } else {
     input.style.borderColor = "red";
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Complete el campo email Correctamente!',
      })
     return true;
   }
 };


select.addEventListener("change", (e) => {
  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a pagar: $";
  }
  total(cantidad.value, e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  total(cantidad.value, select.value, divTotal);
});



resume.addEventListener("click", (e) => {
  e.preventDefault();
 
  if (
    !emptyInput(nombre) &&
    !emptyInput(apellido) &&
    !emptyInputM(email) &&
    !emptyInput(cantidad)
  ) {
    

     Swal.fire({
       icon: "success",
       title: "Gracias por realizar tu compra",
       html: `<p>${nombre.value} ${apellido.value}</p>
       <p>Hemos enviado la informacion a tu mail: ${email.value}</p>
       <p>${divTotal.textContent}</p>`,
       confirmButtonText: "Continuar",
     }).then((result) => {
       if (result.isConfirmed) {
         window.location.href = "./index.html";
       }
     });
  }

});