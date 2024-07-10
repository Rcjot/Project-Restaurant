import beefstew from './images/beefstew.png';
import omurice from './images/omurice.png';
import milkcoco from './images/milkcoco.png';
import milfleure from './images/milfleure.png';
import parfey from './images/parfey.png';
import matcha from './images/matcha.png';
import raana from './images/raana.png';

const menuDisplay = {
    content: document.querySelector('#content'),
    Foods: {
        myBeefstew: {
            foodName: 'beefstew',
            img: beefstew,
            h1Name: 'Luxurious Beefstew Hamburger',
            pText: 'Delicious combination of beefstew and burger steak!',
            h2Price: '¥1,190',
            second: false,
        },
        myOmurice: {
            foodName: 'omurice',
            img: omurice,
            h1Name: 'Colorfuly Melty Omurice',
            pText: 'Omurice with softly cooked eggs! <br> A colorful enticing dish!',
            h2Price: '¥990',
            second: true,
        },
        myMilkcoco: {
            foodName: 'milkcoco',
            img: milkcoco,
            h1Name: 'Honey Milk Coco',
            pText: 'Milk cream filled baked coco topped off with plenty of sweet honey!',
            h2Price: '¥790',
            second: false,
        },
        myMilfleure: {
            foodName: 'milfleure',
            img: milfleure,
            h1Name: "Rockin' Millefeuille",
            pText: 'Tall tower of brownies, icecream, and chocolate.<br> Having the usual exquisite taste of Millefeuille!',
            h2Price: '¥790',
            second: true,
        },
        myParfey: {
            foodName: 'parfey',
            img: parfey,
            h1Name: "Classic Honey Tea Parfait",
            pText: "Honey's alluring taste is quite shown boldly in this desert. <br> A strong recommendation to savor!",
            h2Price: '¥890',
            second: false,
        },
        myMatcha: {
            foodName: 'matcha',
            img: matcha,
            h1Name: "Tapioca Matcha Milk",
            h2Price: '¥500',
            second: true,
        },

    },
    init: function(){
        this.content.innerHTML = '';

        this.content.setAttribute("id", "contentMenu");

        this.createMenuFood('myBeefstew');
        this.createMenuFood('myOmurice');
        this.createMenuFood('myMilkcoco');
        this.createMenuFood('myMilfleure');
        this.createMenuFood('myParfey');
        this.createMenuFood('myMatcha');

    },
    createMenuFood: function(myFood){
        const food = this.Foods[myFood];

        const menuFood = document.createElement('div');
        menuFood.classList.add(`${food.foodName}`);
        menuFood.setAttribute('id', 'menuFood');

        const foodImgContainer = document.createElement('div');
        foodImgContainer.classList.add('foodimg');

        const fooddesc = document.createElement('div');
        fooddesc.classList.add('fooddesc');

        const foodImg = new Image();
        foodImg.src = food.img;
        foodImg.setAttribute('id', 'food');
        

        const h1Name = document.createElement('h1');
        h1Name.textContent = `${food.h1Name}`;
        fooddesc.appendChild(h1Name);

        const h2Price = document.createElement('h2');
        h2Price.textContent = `${food.h2Price}`;
        
        if (myFood === 'myMatcha'){
            const raanaDiv = document.createElement('div');
            raanaDiv.classList.add('raanaDiv');

            const raanaImg = new Image();
            raanaImg.src = raana;
            raanaImg.classList.add('raana');
            const raanaP = document.createElement('p');
            raanaP.textContent = 'Raana Approved!';
            raanaDiv.appendChild(raanaImg);
            raanaDiv.appendChild(raanaP);      
            fooddesc.appendChild(raanaDiv);

        }else{
            const pText = document.createElement('p');
            pText.innerHTML = food.pText;
            fooddesc.appendChild(pText);
        }


        if (food.second) {
            console.log(food);
            menuFood.classList.add('secondMenu');
            menuFood.appendChild(fooddesc);
            menuFood.appendChild(foodImgContainer);
        }else{
            menuFood.appendChild(foodImgContainer);
            menuFood.appendChild(fooddesc);
        }

        foodImgContainer.appendChild(foodImg);

        fooddesc.appendChild(h2Price);

        this.content.appendChild(menuFood);
    }
}
export default menuDisplay;