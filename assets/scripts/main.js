
TweenMax.to('.left',2, {
    delay:.8,
    width:'50%',
    ease:Power2.easeInOut
})

TweenMax.to('.right',2, {
    delay:.8,
    width:'50%',
    ease:Power3.easeInOut
})

TweenMax.from('.nav',2, {
    delay:.8,
    opacity:0,
    ease:Expo.easeInOut
})

TweenMax.from('.text h1',2, {
    delay:.6,
    opacity:0,
    ease:Circ.easeInOut
})

TweenMax.from('.text p',2, {
    delay:.7,
    x:1000,
    ease:Circ.easeInOut
})

TweenMax.to('.marina',2, {
    delay:1.5,
    width:'800px',
    ease:Power2.easeInOut
})

TweenMax.staggerFrom('.bottom-nav ul li',2, {
    delay:1,
    x:10000,
    ease:Circ.easeInOut
},0.08)  

TweenMax.staggerFrom('.info ul',2, {
    delay:0,
    y:200,
    ease:Circ.easeInOut
})

TweenMax.from('.name',2, {
    delay:1.5,
    x:-600,
    ease:Circ.easeInOut
})