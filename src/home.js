import cocoall from './images/cocoall2.png';

const homeDisplay = {
    content: document.querySelector('#content'),
    test: function(){
        alert('asdflikj');
    },
    init: function() {
        this.content.innerHTML = '';

        this.content.setAttribute("id", "contentHome");
        this.appendLeftRight();
        this.appendLeftContent();
        this.appendRightContent();
    },
    appendLeftRight: function() {
        this.left = document.createElement('div');
        this.left.setAttribute("id", "left");
        this.right = document.createElement('div');
        this.right.setAttribute('id', 'right');
        this.content.appendChild(this.left);
        this.content.appendChild(this.right);
    },
    appendLeftContent: function() {
        const cocoallImgContainer = document.createElement('div');
        const cocoallImg = new Image();
        cocoallImg.src = cocoall;
        cocoallImgContainer.appendChild(cocoallImg);
        cocoallImg.classList.add('cocoallimg');
        this.left.appendChild(cocoallImgContainer);
    },
    appendRightContent: function(){
        const titleH1 = document.createElement('h1');
        titleH1.textContent = "COCO'S × バンドリ"
        const hr = document.createElement('hr');
        hr.setAttribute('id', 'hr');
        const p = document.createElement('p');
        p.textContent = "A collaboration that brings great delicacies to a whole new experience!";
        const reserveBtn = document.createElement('button');
        reserveBtn.setAttribute('id', 'reserveBtn');
        reserveBtn.textContent = 'Reserve Now';
        this.right.appendChild(titleH1);
        this.right.appendChild(hr);
        this.right.appendChild(p);
        this.right.appendChild(reserveBtn);
    },
}

export default homeDisplay;