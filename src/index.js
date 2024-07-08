import homeDisplay from './home';

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
                console.log('menu');
            });
            this.menuBtn.addEventListener('click', () => {
                console.log('about');
            })
        }
    }
    mainModule.init();
})();
