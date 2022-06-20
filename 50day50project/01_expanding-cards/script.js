const panelDivs = document.querySelectorAll(".panel");

panelDivs.forEach(element => {
  element.addEventListener("mouseover", () => {
    removeActiveClasses(); 
    element.classList.add('active');
  })
})
// 去除所有panel 的active
function removeActiveClasses() {
  panelDivs.forEach(element => {
    element.classList.remove('active');
  })
}
