function toggleNav() {
  let outerGrid = document.querySelector(".outer-grid");
  console.log(outerGrid.classList);
  outerGrid.classList.toggle('outer-grid-expanded');

  const nav = document.querySelector('nav');
  nav.classList.toggle('hide-nav');
}


