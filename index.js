

/*
The switchDisplayState() func is responsible for changing the css display property on the mobileMenu form
  "none" to "active"----- when?--- when the menuIcon is clicked and the event is triggered
*/
function switchDisplayState() {
  // accessing the id for the mobileMenu, and assigning it as a value to the mobileMenu variable
  const mobileMenu = document.getElementById('mobileMenu');

  //An if statement with a test to determine the current state of the display property
  if (mobileMenu.style.display === "block") {
    return mobileMenu.style.display = "none";// if "block" then hide the menu by switching it to "none"
  } else {
    return mobileMenu.style.display = "block";// Otherwise, show menu by switching the property value to "block" i.e active 
  }

}
window.onload = function () {
  // Getting the id for the hamburger icon, to add a click event to it     
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');

  // added a click event listener to the menu icon    
  mobileMenuIcon.addEventListener('click', () => {

// calling the switchActiveClass when the click event connected to the menuIcon is fired     
    switchDisplayState(eObj);
  })
}

















