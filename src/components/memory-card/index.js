const memoryCardGame = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `

      .memory-card{
        width: 155px;
        height: 155px;
        position:relative;
        align-self:auto; 
        margin-top:10px;
      }
      
      .memory-card .card {
        width:100%;
        height: 100%;
        background-color: #F25A70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: absolute;
        cursor: pointer;
      }

      .memory-card.-active .card{
        display:none;
      }

      .memory-card.-active .card.-front{
        display:flex;
      }
            
      .memory-card .card.-front{
        background-color:#fff;
      }
            
      .memory-card .card.-front::before {
        content: '';
        width: 95px;
        height: 95px;
        border-radius: 50%;
        background-color:#D4D4D4;
        position: absolute;
      }
     
      .memory-card .card > .icon {
        width: 100px;
        height: 100px;
      }
 

      .memory-card .card.-front > .icon {
        position: absolute;
        transform: translateY(-10px);
      }  

      `;

  $head.insertBefore($style, null);

  return ({src, alt}) => `
      <div class='memory-card' onClick='handleClick(this)'>
        <article class='card -front'>
          <img src='${src}' 
          alt= '${alt}'
          class='icon'
          />
        </article>
        <article class='card'>
          <img src='img/icon-collabcode.png' 
          alt= 'Gueio mascote da Collabcode' 
          class='icon'
          />
        </article>
      </div>
      `;
};

const handleClick = $card => $card.classList.toggle("-active");

