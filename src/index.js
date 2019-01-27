const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardJava = document.createElement("article");
const $icon = `<img 
        src='img/icon-collabcode.png' 
        alt='Gueio mascote da Collabcode' 
        class='icon'
        >`;
const $iconJava = `<section class='ball'>
        <img 
        src='img/icon-java.png' 
        alt='Ícone livro Java' 
        class='icon'
        >
        </section>`;

$memoryCard.classList.add("memory-card");
$memoryCardJava.classList.add("javabook-card");

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardJava, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCardJava.insertAdjacentHTML("afterbegin", $iconJava);

