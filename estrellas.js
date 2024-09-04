
/*función de estrellas*/
function generateStars(containerSelector, numberOfStars = 5) {
    const container = document.querySelector(containerSelector);
   
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        container.appendChild(star);
    }
   }
   generateStars('#stars1');
   generateStars('#stars2');
   generateStars('#stars3');
   generateStars('#stars4');/*poniendo un numero del 1 al 5 se pone las estrellas*/
   generateStars('#stars5');
   generateStars('#stars6');
   generateStars('#stars7');
   generateStars('#stars8');
   generateStars('#stars9');
   generateStars('#stars10');
   generateStars('#stars11');
   generateStars('#stars12');
   generateStars('#stars13');
   generateStars('#stars14');
   generateStars('#stars15');
   generateStars('#stars16');
   generateStars('#stars17');
   generateStars('#stars18');
   generateStars('#stars19');
   generateStars('#stars20');
   generateStars('#stars21');
   generateStars('#stars22');
   generateStars('#stars23');
   generateStars('#stars24');
   generateStars('#stars25');
   generateStars('#stars26');
