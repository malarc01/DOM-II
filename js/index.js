// Your code goes here

//1
const mouseOver = document.querySelector('.logo-heading')
mouseOver.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "purple";
  }, 1000);
}, false);

// 2
// const linkBlog = document.querySelectorAll('a')[2]
// linkBlog.addEventListener('keydown',(key)=>{linkBlog.style.color = 'purple'} ;
// )};

// const linkBlog = document.querySelectorAll('a')[2]
// linkBlog.addEventListener('keydown', function (event){
//     event.target.style.color = 'red';
// })
//3
window.addEventListener('resize', function(event) {
    event.target.color='pink';
    document.querySelector('html').style.backgroundColor = 'pink'
    console.log('change pink')
})


//4
window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
  });

//5
var boatimg = document.querySelectorAll('img')[3];
var html = document.querySelector('html');

function random(number) {
    return Math.floor(Math.random() * number);
  }

  boatimg.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    boatimg.style.backgroundColor = rndCol;
  };

  boatimg.onauxclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    boatimg.style.color = rndCol;
  }

//6
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}




document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'Hello, world!');
    e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
    e.preventDefault(); // We want to write our data to the clipboard, not data from any user selection
});



let log = document.querySelectorAll('img')[0];

document.onclick = inputChange;

function inputChange(e) {
  console.log(`Position: (${e.clientX}, ${e.clientY})`)
}

document.addEventListener('onclick')




let container = document.querySelector('.container')
let button0 = document.querySelectorAll('.btn')[0]
let button1 = document.querySelectorAll('.btn')[1]
let button2 = document.querySelectorAll('.btn')[2]
//7



// button1.addEventListener('select', logSelection);
window.addEventListener('keyup', (e)=>{
  event.target.style.backgroundColor = 'gray';
  button2.style.color = 'black'
  console.log('keyupped')
})
//8
window.addEventListener('scroll', ()=>{
  // event.target.style.backgroundColor = 'yellow';
  button1.style.backgroundColor = 'yellow'
  console.log('scrolled')
  event.stopPropagation()
})

//9
container.addEventListener('mouseenter', (event)=>{
  container.style.backgroundColor = 'lime'
  container.style.borderColor = 'yellow'

})

//10
container.addEventListener('mouseleave',(event)=>{
  container.style.backgroundColor = 'white'
  container.style.borderColor = 'black'
})

container.addEventListener('dblclick', (event) => {
  alert('You clicked the container')
})
