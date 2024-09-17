function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  const mainContent = document.querySelector('main');
  navList.classList.toggle('nav-open');
  if (navList.classList.contains('nav-open')) {
    mainContent.classList.add('blurred');
    document.body.style.overflow = 'hidden'; // Prevent body from being scrollable
  } else {
    mainContent.classList.remove('blurred');
    document.body.style.overflow = 'auto'; // Restore scrolling when sidebar is closed
  }
}

document.addEventListener('click', function(event) {
  const navList = document.querySelector('.nav-list');
  const menuIcon = document.querySelector('.menu-icon');
  const mainContent = document.querySelector('main');
  // If the click is outside the nav-list and not on the menu-icon
  if   ((!navList.contains(event.target) && !menuIcon.contains(event.target)) || event.target.closest('.nav-link')) {
    navList.classList.remove('nav-open');
    mainContent.classList.remove('blurred');
    document.body.style.overflow = 'auto';
  }
});
let lastScrollPosition = 0;
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  // If scrolling down, hide the navbar
  if (currentScrollPosition > lastScrollPosition) {
    navbar.style.top = '-65px'; // Adjust this value based on your navbar height
  } 
  // If scrolling up, show the navbar
  else {
    navbar.style.top = '0';
  }

  // Update lastScrollPosition to the current position
  lastScrollPosition = currentScrollPosition;
});