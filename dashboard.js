const favStar = document.querySelector('.fa fa-star-o');
const favEye = document.querySelector('.fa fa-eye');

console.log(favEye)

favStar.addEventListener("click", (event) => {
    let input = prompt("Enter grid dimension: ", "64");
    const rowList = document.querySelectorAll(".row");
  
    rowList.forEach(element => {
      container.removeChild(element);
    })
    
    createGrid(input);
  
  })