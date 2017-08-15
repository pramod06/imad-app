console.log('Loaded!');

// change some text
element = document.getElementById('newText');

element.innerHTML = 'This is the new modified text';

// move image
var img = document.getElementById('madi');

var marginLft = 0;

function moveRight(){
    marginLft = marginLft + 10 ;
    img.style.marginLeft = marginLft + 'px';
}
img.onclick = function(){
   var interval = setinterval(moveRight,100);
};