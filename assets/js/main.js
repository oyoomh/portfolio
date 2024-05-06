

const lenis = new Lenis({})

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 800)
})

gsap.ticker.lagSmoothing(0)

/**
 * 
 * mouse
 * 
 */
$(document).mousemove(function(e) {
  gsap.to('.cursor', {
    x: e.clientX,
    y: e.clientY
  });
});








$('.sc-work .link').hover(function(){
  $('.cursor').toggleClass('on');
});

$('#gnb .link, #footer .group-contact .link').hover(function(){
  $('.cursor').toggleClass('active');
});

setTimeout(function() {
  $('.cursor').addClass('show');
}, 2000);


let lastScroll = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr > lastScroll) {
    $('#header .inner').addClass('hide');
  } else {
    $('#header .inner').removeClass('hide');
  }
  lastScroll = curr;
})

lenis.stop()










$('#gnb .item').click(function(){
  // $(this).addClass('on').siblings().removeClass('on');
  lenis.scrollTo($(this).find('a').attr('href'))
})

const introDesc = new SplitType('.sc-intro .content .text-area p', { types: 'words, chars', });






/**
 * 
 * load
 * 
 */
window.addEventListener('load', function() {

  gsap.to(".loading #num", {
    duration: 1, 
    innerHTML: 100, 
    roundProps: "innerHTML", 
    ease: "power1.inOut", 
    onComplete:function(){
      gsap.to('.loading',{autoAlpha:0})
      introMotion.play();
      lenis.start();
    }
  });
  

  introMotion = gsap.timeline({
    paused:true,
  })
  introMotion.to('.sc-intro .word .char', {
    stagger: 0.02,
    transform: 'translateY(0)'
  },'a');
  introMotion.to('.sc-intro .text-line .text', {
    transform: 'translateY(0)'
  },'a');

});





ScrollTrigger.create({
  trigger: ".sc-work",
  start: "0% 0%",
  end: "100% 50%",
  toggleClass:{targets:"#main",className:"dark"}
})



/**
 * 
 * dark
 * 
 */

ScrollTrigger.create({
  trigger: `#footer`,
  start: "0% 10%",
  end: "100% 10%",
  // markers: true, 
  onEnter: function () {
    $('#gnb .list').addClass('dark');
  },
  onLeaveBack: function () {
    $('#gnb .list').removeClass('dark');
  }
})



ScrollTrigger.create({
  trigger: "#wrapper",
  start: "0% 0%",
  end: "100% 100%",
  onUpdate:function(self){
    $('.progress').html(Math.round(self.progress*100)+'%')

  }
})

$('[data-target]').each(function(){
  idx=$(this).data('target');
  ScrollTrigger.create({
    trigger: $(this),
    start: "-1% 0%",
    end: "100% 0%",
    // markers:true,
    toggleClass:{
      targets:$('#gnb .item').eq(idx),
      className:"on"
    }
  })
})





