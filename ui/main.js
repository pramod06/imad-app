console.log('Loaded!');

// change some text
element = document.getElementById('newText');

element.innerHTML = 'This is the new modified text';

// move image
var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10 ;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
   var interval = setinterval(moveRight,100);
};