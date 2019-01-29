const memoryCardCollabElement = ({src, alt, changeClassName}) =>`<article class='memory-card ${changeClassName}'><img src='${src}'alt='${alt}'class='icon'onClick = 'handleClick()'></article>`;

const handleClick = () => console.log("funciona :)");


