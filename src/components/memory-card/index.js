function memoryCardCollabElement() {
  const $memoryCard = document.createElement("article");
  const $iconCollab = `<img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon'
        >`;

  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab); 
  
  const $getMemoryCard = document.querySelector("article");
  $memoryCard.addEventListener('click', function(){
    console.log("oi");
  });
  
}

function memoryCardFrontElement() {
  const $memoryCardFront = document.createElement("article");

  const $iconJava = `
        <img 
        src='img/icon-java.png' 
        alt='Ícone livro Java' 
        class='icon'
        >
        `;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $wrapCards.insertBefore($memoryCardFront,null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJava);

  const $getMemoryCardFront = document.querySelector("article");
  $memoryCardFront.addEventListener('click', function(){
    console.log("oi");
  });
}

