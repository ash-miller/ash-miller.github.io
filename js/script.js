function openModal() {
  document.getElementById("aboutPage").style.width = "100%";
  document.querySelector(".modal--content").style.opacity = "100%"
}

function closeModal() {
  document.getElementById("aboutPage").style.width = "0%";
  document.querySelector(".modal--content").style.opacity = "0%"
}

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

var init = (function(){
  document.querySelector('.social-link--email').addEventListener('click', copyToClipboard('miashlei@amazon.com'));
})();