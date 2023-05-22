window.addEventListener('DOMContentLoaded', function() {
  const ourteam = document.querySelector('.uncommon-ourteam'),
        switcher = document.querySelector('.uncommon-ourteam-switcher');
  switcher.addEventListener('click', ()=> {
    ourteam.classList.toggle('uncommon-ourteam--listview');
    switcher.classList.toggle('uncommon-ourteam-switcher--listview');
  })
});