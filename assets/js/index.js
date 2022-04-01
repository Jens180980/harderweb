window.addEventListener('keydown', (e) => {
  console.log(e.key);
  if(e.key == 'y' || e.key == 'Y'){
    window.location = './menu.html'
  }
  else {
    window.location = 'https://disney.com'
  }

})
