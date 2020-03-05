function openModal() {
  document.getElementById("aboutPage").style.width = "100%";
  document.querySelector(".modal--content").style.opacity = "100%"
}

function closeModal() {
  document.getElementById("aboutPage").style.width = "0%";
  document.querySelector(".modal--content").style.opacity = "0%"
}

var copyToClipboard = function() {
  const el = document.createElement('textarea');
  el.value = 'miashlei@amazon.com';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log('Copied.');
};

var init = function(){
  document.querySelector('.social-link--email').addEventListener('click', copyToClipboard);
};

init();