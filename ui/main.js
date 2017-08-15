
var button = document.getElementbyId('counter');
var counter = 0;
button.onclick = function(){
    
    
  //Render  
    counter = counter + 1;
    var span = document.getElementbyId('count');
    span.InnerHTML = counter.toString();
};

