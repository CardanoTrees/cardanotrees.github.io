

 document.addEventListener("click",function (e){
   if(e.target.classList.contains("text-dark")){
   	  const src = e.target.getAttribute("srci");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })