const now=new Date();
now;
console.log(now.getUTCFullYear());
console.log(now.getUTCMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCSeconds());
now.setFullYear(2021)
console.log(now.getFullYear());


const button=document.querySelector('button');
const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
    console.log(event.target);
});





/*
document.addEventListener('keydown', event => {
    var element = document.querySelector('h1');

    // Set variables for keydown codes
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';


    // Set a direction for each code
    switch (event.code) {
        case a:
            element.textContent = 'Left';
            break;
        case s:
            element.textContent = 'Down';
            break;
        case d:
            element.textContent = 'Right';
            break;
        case w:
            element.textContent = 'Up';
            break;
    }
});
*/

////////////////////////////////////////////////////////////


/*
const ce =()=>{
    const p= document.querySelector('h1');
    p.textContent="Year is ${now.getFullYear()}";
    alert("changed");
}
const button= document.querySelector('button');
button.addEventListener('click',ce)
*/