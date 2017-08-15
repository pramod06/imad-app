console.log('Loaded!');

// change some text
element = document.getElementById('newText');

element.innerHTML = 'This is the new modified text';

// move image
var img = document.getElementById('madi');
img.onClick = function(){
    img.style.marginLeft = '100px';
}