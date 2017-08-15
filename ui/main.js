console.log('Loaded!');

// change some text
element = document.getElementById('newText');

element.innerHTML = 'This is the new modified text';

// move image
var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 1 ;
    img.style.marginRight = marginLeft + 'px';
}
img.onclick = function(){
   var interval = setInterval(moveRight,10);
};