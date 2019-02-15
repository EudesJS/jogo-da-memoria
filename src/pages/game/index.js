const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const memoryCardCollabElement = memoryCardGame();

const $memoryCardFrontJava = memoryCardCollabElement({
  src: "img/icon-java.png", 
  alt: "Ícone livro Java" 
});
const $memoryCardFrontJS = memoryCardCollabElement({
  src: "img/icon-js.png", 
  alt:"Ícone livro Javascript"
});
const $memoryCardFrontPHP = memoryCardCollabElement({
  src:"img/icon-php.png", 
  alt:"Ícone livro PHP"
});
const $memoryCardFrontC = memoryCardCollabElement({
  src:"img/icon-c.png", 
  alt:"Ícone livro C++" 
});
const $memoryCardFrontHead = memoryCardCollabElement({
  src:"img/icon-cabeca.png", 
  alt:"Ícone cabeça com símbolo tag"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontHead);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontHead);

$root.insertAdjacentElement("beforeend", $cardsWrapper);






