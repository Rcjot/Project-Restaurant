import homeDisplay from './home';
import menuDisplay from './menu';
import aboutDisplay from './about';

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
