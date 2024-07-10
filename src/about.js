import cocoran from './images/cocoran.png';

const aboutDisplay = {
    content: document.querySelector('#content'),
    init: function(){
        this.content.innerHTML = '';
        this.content.setAttribute('id', 'contentAbout');

        this.appendImg();
        this.appendRight();
    },
    appendImg: function(){
        const cocoranImg = new Image();
        cocoranImg.src = cocoran;
        this.content.appendChild(cocoranImg);
        cocoranImg.classList.add('cocoran');
    },
    appendRight: function(){
        const aboutRight = document.createElement('div');
        aboutRight.classList.add('aboutRight');
        const h1 = document.createElement('h1');
        h1.textContent = 'About';
        const p1 = document.createElement('p');
        p1.textContent = "A collaboration between Bang Dream franchise and Coco's Restaurant. Lots of Bang Dream merchandise and fun limited delicacies are available during this event.";
        const p2 = document.createElement('p');
        p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus eveniet? Maiores libero commodi laudantium labore, nostrum pariatur itaque minima reiciendis ut alias in, doloremque quas cumque assumenda harum id.";
        const p3 = document.createElement('p');
        p3.textContent = "Sorry I'm too lazy to style more, especially typography :(";

        this.content.appendChild(aboutRight);
        aboutRight.appendChild(h1);
        aboutRight.appendChild(p1);
        aboutRight.appendChild(p2);
        aboutRight.appendChild(p3);
    }
}

export default aboutDisplay;