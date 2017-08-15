// counter code
var button = document.getElementById('counterbtn');

var counter = 0;

button.onclick = function() {
    //Render  
    counter = counter + 1;
    
    var span = document.getElementById('count');
    span.innerHTML = counter.toString(); 
    
};

