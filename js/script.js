// JQuery Smooth Scroll
$('.nav-bar a').on('click', function(e) {
   if (this.hash !== '') {
       e.preventDefault();

       const hash = this.hash;

       $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 800);
   }
});

// SmoothScroll script
// var scroll = new SmoothScroll('.nav-bar a', {
//     speed: 600
// });