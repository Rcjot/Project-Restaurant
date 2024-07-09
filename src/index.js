import './style.css';
import homeDisplay from './home';
import menuDisplay from './menu';
import aboutDisplay from './about';
import cocos from './images/cocos.png';

console.log('alsdfi');

(function(){
    const mainModule = {
        init: function(){
            this.cacheDOM();
            this.btnFunctions();
        },
        cacheDOM: function(){
            this.homeBtn = document.querySelector('#homebtn');
            this.menuBtn = document.querySelector('#menubtn');
            this.aboutBtn = document.querySelector('#aboutbtn');
            const cocosContain = document.querySelector('.image');

            const cocosLogo = new Image();
            cocosLogo.src = cocos;
            cocosLogo.classList.add('cocoslogo'); 

            cocosContain.appendChild(cocosLogo);
        },
        btnFunctions: function(){
            this.homeBtn.addEventListener('click', () => {
                homeDisplay();
            });
            this.menuBtn.addEventListener('click', () => {
                menuDisplay();
            });
            this.aboutBtn.addEventListener('click', () => {
                aboutDisplay();
            })
        }
    }
    mainModule.init();
})();
