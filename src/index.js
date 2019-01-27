const $root = document.querySelector("#root");

memoryCardFrontElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();
memoryCardCollabElement();

function memoryCardCollabElement(){
  const $memoryCard = document.createElement("article");
  const $iconCollab = `<img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon'
        >`;

  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);  
  
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
  $root.insertBefore($memoryCardFront,null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJava);

}

