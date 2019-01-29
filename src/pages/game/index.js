const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = memoryCardCollabElement("img/icon-collabcode.png","Gueio mascote da Collabcode");
const $memoryCardFront = memoryCardCollabElement("img/icon-java.png", "Ícone livro Java","-front");
const $memoryCardFrontJS = memoryCardCollabElement("img/icon-js.png", "Ícone livro Javascript","-front");
const $memoryCardFrontPHP = memoryCardCollabElement("img/icon-php.png", "Ícone livro PHP","-front");
const $memoryCardFrontC = memoryCardCollabElement("img/icon-c.png", "Ícone livro C++","-front");
const $memoryCardFrontHead = memoryCardCollabElement("img/icon-cabeca.png", "Ícone cabeca de tag","-front");

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontHead);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontHead);

$root.insertAdjacentElement("beforeend", $cardsWrapper);




