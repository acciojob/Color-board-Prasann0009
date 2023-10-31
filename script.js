//your JS code here. If required.
 const cont = document.querySelector(".container");

for(let i=1;i<=800;i++)
{
  const box = document.createElement("div");
  box.setAttribute('class','square');
  cont.appendChild(box);
}
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', function () {
        square.style.backgroundColor = 'red'; // Remove the hover effect
        setTimeout(() => {
            square.style.backgroundColor = '#1d1d1d'; // Ensures the smooth transition after 1 second
        }, 1000);
    });
});