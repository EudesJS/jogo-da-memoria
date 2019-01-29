const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = memoryCardCollabElement({src:"img/icon-collabcode.png", alt: "Gueio mascote da Collabcode"});
const $memoryCardFront = memoryCardCollabElement({src: "img/icon-java.png", alt: "Ícone livro Java", changeClassName: "-front"});
const $memoryCardFrontJS = memoryCardCollabElement({src: "img/icon-js.png", alt:"Ícone livro Javascript",changeClassName: "-front"});
const $memoryCardFrontPHP = memoryCardCollabElement({src:"img/icon-php.png", alt:"Ícone livro PHP",changeClassName:"-front"});
const $memoryCardFrontC = memoryCardCollabElement({src:"img/icon-c.png", alt:"Ícone livro C++",changeClassName:"-front"});
const $memoryCardFrontHead = memoryCardCollabElement({src:"img/icon-cabeca.png", alt:"Ícone cabeca de tag",changeClassName:"-front"});

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




