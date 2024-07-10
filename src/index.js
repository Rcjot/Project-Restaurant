import './style.css';
import homeDisplay from './home';
import menuDisplay from './menu';
import aboutDisplay from './about';
import cocos from './images/cocos.png';

console.log('alsdfi');

(function(){
    const mainModule = {
        init: function(){
            homeDisplay.init();
            this.cacheDOM();
            this.btnFunctions();
            this.cacheLogo();
        },
        cacheDOM: function(){
            this.homeBtn = document.querySelector('#homebtn');
            this.menuBtn = document.querySelector('#menubtn');
            this.aboutBtn = document.querySelector('#aboutbtn');
        },
        cacheLogo: function(){
            const cocosContain = document.querySelector('.image');
            const cocosLogo = new Image();
            cocosLogo.src = cocos;
            cocosLogo.classList.add('cocoslogo'); 
            cocosContain.appendChild(cocosLogo);
        },
        btnFunctions: function(){
            this.homeBtn.addEventListener('click', () => {
                homeDisplay.init();
            });
            this.menuBtn.addEventListener('click', () => {
                menuDisplay.init();
            });
            this.aboutBtn.addEventListener('click', () => {
                aboutDisplay();
            })
        },
    }
    mainModule.init();
})();
