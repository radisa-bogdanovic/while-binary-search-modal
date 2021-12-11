'use strict'




const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal= document.querySelector('.close-modal');
const btnOpenModal1= document.querySelector('.show-modal1');
const btnOpenModal2= document.querySelector('.show-modal2');
const btnOpenModal3= document.querySelector('.show-modal3');
let ovoJeNiz= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,33,55,100,200,300,400,444,877,1155]
alert(`U ovom zadatku cemo ispitivati da li se u nizu nalaze brojevi koje upisemo. 
      Niz se sastoji iz brojeva: ${ovoJeNiz.join()}`)
let number1= Number(prompt(`Unesite vas prvi broj`));
while(isNaN(number1)||number1==''){
     alert(`Molimo unesite broj`)
     number1= Number(prompt(`Unesite vas prvi broj`))
}
let number2= Number(prompt(`Unesite vas drugi broj`));
while(isNaN(number2)||number2==''){
     alert(`Molimo unesite broj`)
     number2= Number(prompt(`Unesite vas prvi broj`))
}
let number3= Number(prompt(`Unesite vas treci broj`))
while(isNaN(number3||number3=='')){
     alert(`Molimo unesite broj`)
     number3= Number(prompt(`Unesite vas prvi broj`))
}
const closeModal= () =>{
 modal.classList.add('hidden')
overlay.classList.add('hidden')
}
const openModal= () =>{
    modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
   return document.getElementById('pTag').innerHTML="";
   }
   btnOpenModal1.onclick= function(){
        openModal();
        binarySearch(number1)
   }
   btnOpenModal2.onclick=function(){
        openModal();
        binarySearch(number2)
   }
   btnOpenModal3.onclick=function(){
     openModal();
     binarySearch(number3)
}
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)
function binarySearch(broj) {
     let pocetak = 0;
     let kraj = ovoJeNiz.length - 1;
     while (pocetak <= kraj) {  
          document.getElementById(`h1Tag`).innerHTML= `Potraga za brojem: ${broj}`      
          let srednjaVrednost = Math.trunc((pocetak + kraj) / 2);
          if (broj === ovoJeNiz[srednjaVrednost]) {
               return document.getElementById('pTag').innerHTML+=`Broj je pronadjen na indeksu: ${srednjaVrednost}   <br />`;
          }
          else if (broj > ovoJeNiz[srednjaVrednost]) {
               document.getElementById('pTag').innerHTML+=`Imamo onsovanu sumnju da se broj nalazi u desnoj strani niza  <br />`;
               pocetak = srednjaVrednost+1;
          }
          else if (broj < ovoJeNiz[srednjaVrednost]) {
               document.getElementById('pTag').innerHTML+=`Od pouzdanih izvora koji rade u Mup-u dobili smo informaciju da se broj nalazi na levoj strani niza <br />`;
               kraj = srednjaVrednost-1;
          }
          else {
               console.log("Ajmo Jovo nanovo.");
          }
     }
     document.getElementById('pTag').innerHTML+=`Kako zvanicno saznajemo meta/broj se ne nalazi u kvartu, molimo strpite se dok ne dobijemo jos info  <br />`;
}
