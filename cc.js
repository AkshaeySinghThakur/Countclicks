var box = document.getElementById('box');
var click_count = document.getElementById('click_count');
var count=0;
box.addEventListener('click' ,function(){
count++;
click_count.innerText=count;
})

// The Click in 4th Line represents Event will activate when clicked on the Box 