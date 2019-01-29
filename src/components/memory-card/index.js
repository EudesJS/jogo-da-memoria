const memoryCardCollabElement = changeClassName => `<article class='memory-card ${changeClassName}'><img src='${changeClassName=='-front' ? 'img/icon-java.png':'img/icon-collabcode.png'}'alt='Gueio mascote da Collabcode'class='icon'onClick = 'handleClick()'></article>`;

//const memoryCardFrontElement = () => "<article class='memory-card -front'><img        src='img/icon-java.png'alt='Ícone livro Java'class='icon'onClick = 'handleClick()'></article>";

function handleClick() {
  console.log("funciona :)");
}

