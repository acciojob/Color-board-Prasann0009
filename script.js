//your JS code here. If required.
 const cont = document.querySelector(".container");

for(let i=1;i<=800;i++)
{
  const box = document.createElement("div");
  box.setAttribute('class','square');
  cont.appendChild(box);
}
