console.log("Radhe Radhe");

function loco() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()

var clutter = "";

document.querySelector(".page2>h1").textContent.split(" ").forEach(function (dets) {
  clutter += `<span> ${dets}</span>`;

  document.querySelector(".page2>h1").innerHTML = clutter;
})



gsap.to(".page2>h1>span", {
  scrollTrigger: {
    trigger: `.page2>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `.main`,
    scrub: .5
  },
  stagger: .2,
  color: '#fff'
})

// canvas loading speed js


// document.addEventListener("DOMContentLoaded", function () {
//   const canvasSection = document.querySelector(".page3 canvas");

//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               loadCanvas();  // Function to initialize canvas
//               observer.disconnect(); // Stop observing after loading
//           }
//       });
//   }, { rootMargin: "200px" }); // Start loading when user is 200px away

//   observer.observe(canvasSection);
// });

// function loadCanvas() {
//   console.log("Canvas Loading...");
//   // Initialize Three.js or other 3D rendering logic here
// }








// 1st canvas page 3
function canvas() {

  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {

    var data = `
    https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00007.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00010.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00013.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00016.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00019.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00022.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00025.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00028.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00031.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00034.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00037.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00040.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00043.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00046.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00049.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00052.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00055.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00058.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00061.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00064.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00067.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00070.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00073.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00076.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00079.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00082.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00085.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00088.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00091.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00094.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00097.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00100.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00103.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00106.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00109.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00112.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00115.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00118.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00121.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00124.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00127.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00130.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00133.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00136.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00139.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00142.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00145.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00148.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00151.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00154.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00157.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00160.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00163.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00166.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00169.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00172.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00175.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00178.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00181.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00184.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00187.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00190.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00193.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00196.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00199.png
https://ik.imagekit.io/kanhaashutech/Assets/Frames%20Img/frames00202.png
    `;
    
    // var data = `
    // ./Assets/Frames img/frames00007.png
    // ./Assets/Frames img/frames00010.png
    // ./Assets/Frames img/frames00013.png
    // ./Assets/Frames img/frames00016.png
    // ./Assets/Frames img/frames00019.png
    // ./Assets/Frames img/frames00022.png
    // ./Assets/Frames img/frames00025.png
    // ./Assets/Frames img/frames00028.png
    // ./Assets/Frames img/frames00031.png
    // ./Assets/Frames img/frames00034.png
    // ./Assets/Frames img/frames00037.png
    // ./Assets/Frames img/frames00040.png
    // ./Assets/Frames img/frames00043.png
    // ./Assets/Frames img/frames00046.png
    // ./Assets/Frames img/frames00049.png
    // /Assets/Frames img/frames00052.png
    // /Assets/Frames img/frames00055.png
    // /Assets/Frames img/frames00058.png
    // ./Assets/Frames img/frames00061.png
    // ./Assets/Frames img/frames00064.png
    // ./Assets/Frames img/frames00067.png
    // ./Assets/Frames img/frames00070.png
    // ./Assets/Frames img/frames00073.png
    // ./Assets/Frames img/frames00076.png
    // ./Assets/Frames img/frames00079.png
    // ./Assets/Frames img/frames00082.png
    // ./Assets/Frames img/frames00085.png
    // ./Assets/Frames img/frames00088.png
    // ./Assets/Frames img/frames00091.png
    // ./Assets/Frames img/frames00094.png
    // ./Assets/Frames img/frames00097.png
    // ./Assets/Frames img/frames00100.png
    // ./Assets/Frames img/frames00103.png
    // ./Assets/Frames img/frames00106.png
    // ./Assets/Frames img/frames00109.png
    // ./Assets/Frames img/frames00112.png
    // ./Assets/Frames img/frames00115.png
    // ./Assets/Frames img/frames00118.png
    // ./Assets/Frames img/frames00121.png
    // ./Assets/Frames img/frames00124.png
    // ./Assets/Frames img/frames00127.png
    // ./Assets/Frames img/frames00130.png
    // ./Assets/Frames img/frames00133.png
    // ./Assets/Frames img/frames00136.png
    // ./Assets/Frames img/frames00139.png
    // ./Assets/Frames img/frames00142.png
    // ./Assets/Frames img/frames00145.png
    // ./Assets/Frames img/frames00148.png
    // ./Assets/Frames img/frames00151.png
    // ./Assets/Frames img/frames00154.png
    // ./Assets/Frames img/frames00157.png
    // ./Assets/Frames img/frames00160.png
    // ./Assets/Frames img/frames00163.png
    // ./Assets/Frames img/frames00166.png
    // ./Assets/Frames img/frames00169.png
    // ./Assets/Frames img/frames00172.png
    // ./Assets/Frames img/frames00175.png
    // ./Assets/Frames img/frames00178.png
    // ./Assets/Frames img/frames00181.png
    // ./Assets/Frames img/frames00184.png
    // ./Assets/Frames img/frames00187.png
    // ./Assets/Frames img/frames00190.png
    // ./Assets/Frames img/frames00193.png
    // ./Assets/Frames img/frames00196.png
    // ./Assets/Frames img/frames00199.png
    // ./Assets/Frames img/frames00202.png
    //  `;

  
    return data.split("\n")[index];
  }

  const frameCount = 66;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page3>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page3",
    pin: true,
    // markers:true,
    scroller: `.main`,
    //   set start end according to preference
    start: `top  top`,
    end: `600% top`,
  });
}
canvas();

// 
// 
//  PAGE 4
// 
// 


var clutter = "";

document.querySelector(".page4>h1").textContent.split(" ").forEach(function (dets) {
  clutter += `<span> ${dets}</span>`;

  document.querySelector(".page4>h1").innerHTML = clutter;
})



gsap.to(".page4>h1>span", {
  scrollTrigger: {
    trigger: `.page4>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: '.main',
    scrub: .5
  },
  stagger: .2,
  color: '#fff'
})



// 
// 
//  PAGE 5
// 
// 


// canvas loading speed js


// document.addEventListener("DOMContentLoaded", function () {
//   const canvasSection = document.querySelector(".page5 canvas");

//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               loadCanvas();  // Function to initialize canvas
//               observer.disconnect(); // Stop observing after loading
//           }
//       });
//   }, { rootMargin: "200px" }); // Start loading when user is 200px away

//   observer.observe(canvasSection);
// });

// function loadCanvas() {
//   console.log("Canvas Loading...");
//   // Initialize Three.js or other 3D rendering logic here
// }






function canvas5() {

  const canvas = document.querySelector(".page5 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {

    //   var data = `
    // ./Assets/Bridge img/bridges00004.png
    // ./Assets/Bridge img/bridges00007.png
    // ./Assets/Bridge img/bridges00010.png
    // ./Assets/Bridge img/bridges00013.png
    // ./Assets/Bridge img/bridges00016.png
    // ./Assets/Bridge img/bridges00019.png
    // ./Assets/Bridge img/bridges00022.png
    // ./Assets/Bridge img/bridges00025.png
    // ./Assets/Bridge img/bridges00028.png
    // ./Assets/Bridge img/bridges00031.png
    // ./Assets/Bridge img/bridges00034.png
    // ./Assets/Bridge img/bridges00037.png
    // ./Assets/Bridge img/bridges00040.png
    // ./Assets/Bridge img/bridges00043.png
    // ./Assets/Bridge img/bridges00046.png
    // ./Assets/Bridge img/bridges00049.png
    // ./Assets/Bridge img/bridges00052.png
    // ./Assets/Bridge img/bridges00055.png
    // ./Assets/Bridge img/bridges00058.png
    // ./Assets/Bridge img/bridges00061.png
    // ./Assets/Bridge img/bridges00064.png
    // ./Assets/Bridge img/bridges00067.png
    // ./Assets/Bridge img/bridges00070.png
    // ./Assets/Bridge img/bridges00073.png
    // ./Assets/Bridge img/bridges00076.png
    // ./Assets/Bridge img/bridges00079.png
    // ./Assets/Bridge img/bridges00082.png
    // ./Assets/Bridge img/bridges00085.png
    // ./Assets/Bridge img/bridges00088.png
    // ./Assets/Bridge img/bridges00091.png
    // ./Assets/Bridge img/bridges00094.png
    // ./Assets/Bridge img/bridges00097.png
    // ./Assets/Bridge img/bridges00100.png
    // ./Assets/Bridge img/bridges00103.png
    // ./Assets/Bridge img/bridges00106.png
    // ./Assets/Bridge img/bridges00109.png
    // ./Assets/Bridge img/bridges00112.png
    // ./Assets/Bridge img/bridges00115.png
    // ./Assets/Bridge img/bridges00118.png
    // ./Assets/Bridge img/bridges00121.png
    // ./Assets/Bridge img/bridges00124.png
    // ./Assets/Bridge img/bridges00127.png
    // ./Assets/Bridge img/bridges00130.png
    // ./Assets/Bridge img/bridges00133.png
    // ./Assets/Bridge img/bridges00136.png
    // ./Assets/Bridge img/bridges00139.png
    // ./Assets/Bridge img/bridges00142.png
    // ./Assets/Bridge img/bridges00145.png
    // ./Assets/Bridge img/bridges00148.png
    // ./Assets/Bridge img/bridges00151.png
    // ./Assets/Bridge img/bridges00154.png
    // ./Assets/Bridge img/bridges00157.png
    // ./Assets/Bridge img/bridges00160.png
    // ./Assets/Bridge img/bridges00163.png
    // `;


    var data = `
  https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00004.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00007.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00010.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00013.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00016.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00019.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00022.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00025.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00028.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00031.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00034.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00037.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00040.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00043.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00046.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00049.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00052.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00055.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00058.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00061.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00064.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00067.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00070.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00073.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00076.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00079.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00082.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00085.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00088.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00091.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00094.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00097.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00100.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00103.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00106.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00109.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00112.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00115.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00118.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00121.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00124.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00127.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00130.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00133.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00136.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00139.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00142.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00145.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00148.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00151.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00154.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00157.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00160.png
https://ik.imagekit.io/kanhaashutech/Assets/Bridge%20img/bridges00163.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 54;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `.page5>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `800% top`,  //600 default
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page5",
    pin: true,
    // markers:true,
    scroller: `.main`,
    //   set start end according to preference
    start: `top  top`,
    end: `600% top`,
  });

}
canvas5()


// 
// 
// Page 6 
// 
// 

var clutter = "";

document.querySelector(".page6>h1").textContent.split(" ").forEach(function (dets) {
  clutter += `<span> ${dets}</span>`;

  document.querySelector(".page6>h1").innerHTML = clutter;
})



gsap.to(".page6>h1>span", {
  scrollTrigger: {
    trigger: `.page6>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `.main`,
    scrub: .5
  },
  stagger: .2,
  color: '#fff'
})


// 
// 
//  Page 7
// 
// 


// canvas loading speed js


// document.addEventListener("DOMContentLoaded", function () {
//   const canvasSection = document.querySelector(".page7 canvas");

//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               loadCanvas();  // Function to initialize canvas
//               observer.disconnect(); // Stop observing after loading
//           }
//       });
//   }, { rootMargin: "200px" }); // Start loading when user is 200px away

//   observer.observe(canvasSection);
// });

// function loadCanvas() {
//   console.log("Canvas Loading...");
//   // Initialize Three.js or other 3D rendering logic here
// }



function canvas7() {
  const canvas = document.querySelector(".page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
 var data = `
    https://ik.imagekit.io/kanhaashutech/Assets/Paper/1.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/2.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/3.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/4.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/5.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/6.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/7.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/8.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/9.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/10.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/11.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/12.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/13.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/14.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/15.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/16.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/17.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/18.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/19.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/20.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/21.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/22.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/23.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/24.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/25.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/26.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/27.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/28.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/29.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/30.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/31.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/32.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/33.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/34.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/35.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/36.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/37.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/38.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/39.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/40.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/41.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/42.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/43.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/44.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/45.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/46.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/47.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/48.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/49.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/50.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/51.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/52.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/53.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/54.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/55.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/56.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/57.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/58.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/59.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/60.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/61.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/62.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/63.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/64.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/65.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/66.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/67.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/68.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/69.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/70.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/71.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/72.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/73.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/74.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/75.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/76.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/77.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/78.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/79.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/80.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/81.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/82.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/83.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/84.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/85.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/86.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/87.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/88.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/89.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/90.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/91.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/92.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/93.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/94.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/95.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/96.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/97.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/98.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/99.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/100.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/101.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/102.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/103.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/104.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/105.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/106.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/107.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/108.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/109.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/110.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/111.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/112.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/113.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/114.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/115.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/116.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/117.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/118.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/119.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/120.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/121.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/122.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/123.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/124.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/125.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/126.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/127.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/128.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/129.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/130.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/131.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/132.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/133.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/134.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/135.webp
https://ik.imagekit.io/kanhaashutech/Assets/Paper/136.webp
 `;

//     var data = `
// ./Assets/Paper/1.webp
// ./Assets/Paper/2.webp
// ./Assets/Paper/3.webp
// ./Assets/Paper/4.webp
// ./Assets/Paper/5.webp
// ./Assets/Paper/6.webp
// ./Assets/Paper/7.webp
// ./Assets/Paper/8.webp
// ./Assets/Paper/9.webp
// ./Assets/Paper/10.webp
// ./Assets/Paper/11.webp
// ./Assets/Paper/12.webp
// ./Assets/Paper/13.webp
// ./Assets/Paper/14.webp
// ./Assets/Paper/15.webp
// ./Assets/Paper/16.webp
// ./Assets/Paper/17.webp
// ./Assets/Paper/18.webp
// ./Assets/Paper/19.webp
// ./Assets/Paper/20.webp
// ./Assets/Paper/21.webp
// ./Assets/Paper/22.webp
// ./Assets/Paper/23.webp
// ./Assets/Paper/24.webp
// ./Assets/Paper/25.webp
// ./Assets/Paper/26.webp
// ./Assets/Paper/27.webp
// ./Assets/Paper/28.webp
// ./Assets/Paper/29.webp
// ./Assets/Paper/30.webp
// ./Assets/Paper/31.webp
// ./Assets/Paper/32.webp
// ./Assets/Paper/33.webp
// ./Assets/Paper/34.webp
// ./Assets/Paper/35.webp
// ./Assets/Paper/36.webp
// ./Assets/Paper/37.webp
// ./Assets/Paper/38.webp
// ./Assets/Paper/39.webp
// ./Assets/Paper/40.webp
// ./Assets/Paper/41.webp
// ./Assets/Paper/42.webp
// ./Assets/Paper/43.webp
// ./Assets/Paper/44.webp
// ./Assets/Paper/45.webp
// ./Assets/Paper/46.webp
// ./Assets/Paper/47.webp
// ./Assets/Paper/48.webp
// ./Assets/Paper/49.webp
// ./Assets/Paper/50.webp
// ./Assets/Paper/51.webp
// ./Assets/Paper/52.webp
// ./Assets/Paper/53.webp
// ./Assets/Paper/54.webp
// ./Assets/Paper/55.webp
// ./Assets/Paper/56.webp
// ./Assets/Paper/57.webp
// ./Assets/Paper/58.webp
// ./Assets/Paper/59.webp
// ./Assets/Paper/60.webp
// ./Assets/Paper/61.webp
// ./Assets/Paper/62.webp
// ./Assets/Paper/63.webp
// ./Assets/Paper/64.webp
// ./Assets/Paper/65.webp
// ./Assets/Paper/66.webp
// ./Assets/Paper/67.webp
// ./Assets/Paper/68.webp
// ./Assets/Paper/69.webp
// ./Assets/Paper/70.webp
// ./Assets/Paper/71.webp
// ./Assets/Paper/72.webp
// ./Assets/Paper/73.webp
// ./Assets/Paper/74.webp
// ./Assets/Paper/75.webp
// ./Assets/Paper/76.webp
// ./Assets/Paper/77.webp
// ./Assets/Paper/78.webp
// ./Assets/Paper/79.webp
// ./Assets/Paper/80.webp
// ./Assets/Paper/81.webp
// ./Assets/Paper/82.webp
// ./Assets/Paper/83.webp
// ./Assets/Paper/84.webp
// ./Assets/Paper/85.webp
// ./Assets/Paper/86.webp
// ./Assets/Paper/87.webp
// ./Assets/Paper/88.webp
// ./Assets/Paper/89.webp
// ./Assets/Paper/90.webp
// ./Assets/Paper/91.webp
// ./Assets/Paper/92.webp
// ./Assets/Paper/93.webp
// ./Assets/Paper/94.webp
// ./Assets/Paper/95.webp
// ./Assets/Paper/96.webp
// ./Assets/Paper/97.webp
// ./Assets/Paper/98.webp
// ./Assets/Paper/99.webp
// ./Assets/Paper/100.webp
// ./Assets/Paper/101.webp
// ./Assets/Paper/102.webp
// ./Assets/Paper/103.webp
// ./Assets/Paper/104.webp
// ./Assets/Paper/105.webp
// ./Assets/Paper/106.webp
// ./Assets/Paper/107.webp
// ./Assets/Paper/108.webp
// ./Assets/Paper/109.webp
// ./Assets/Paper/110.webp
// ./Assets/Paper/111.webp
// ./Assets/Paper/112.webp
// ./Assets/Paper/113.webp
// ./Assets/Paper/114.webp
// ./Assets/Paper/115.webp
// ./Assets/Paper/116.webp
// ./Assets/Paper/117.webp
// ./Assets/Paper/118.webp
// ./Assets/Paper/119.webp
// ./Assets/Paper/120.webp
// ./Assets/Paper/121.webp
// ./Assets/Paper/122.webp
// ./Assets/Paper/123.webp
// ./Assets/Paper/124.webp
// ./Assets/Paper/125.webp
// ./Assets/Paper/126.webp
// ./Assets/Paper/127.webp
// ./Assets/Paper/128.webp
// ./Assets/Paper/129.webp
// ./Assets/Paper/130.webp
// ./Assets/Paper/131.webp
// ./Assets/Paper/132.webp
// ./Assets/Paper/133.webp
// ./Assets/Paper/134.webp
// ./Assets/Paper/135.webp
// ./Assets/Paper/136.webp
// `
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page7",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas7()


gsap.to(".page7 .p7_cir", {
  scrollTrigger: {
    trigger: ".p7_cir",
    // markers:true,
    scrub: 4,
    start: "0% 60%",
    end: "bottom top",
    scroller: ".main",
  },
  scale: 4
})


gsap.to(".page7 .p7_cir_inner", {
  scrollTrigger: {
    trigger: ".p7_cir_inner",
    // markers:true,
    scrub: 4,
    start: "0% 60%",
    end: "bottom top",
    scroller: ".main",
  },
  backgroundColor: "#0F35C5"
});





// Page 10 Canvas side change on scroll


// canvas loading speed js


// document.addEventListener("DOMContentLoaded", function () {
//   const canvasSection = document.querySelector(".page10 .rgt canvas");

//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               loadCanvas();  // Function to initialize canvas
//               observer.disconnect(); // Stop observing after loading
//           }
//       });
//   }, { rootMargin: "200px" }); // Start loading when user is 200px away

//   observer.observe(canvasSection);
// });

// function loadCanvas() {
//   console.log("Canvas Loading...");
//   // Initialize Three.js or other 3D rendering logic here
// }




function canvas10() {
  const canvas = document.querySelector(".page10>.rgt>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
    https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/1.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/2.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/3.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/4.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/5.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/6.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/7.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/8.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/9.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/10.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/11.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/12.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/13.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/14.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/15.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/16.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/17.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/18.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/19.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/20.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/21.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/22.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/23.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/24.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/25.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/26.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/27.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/28.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/29.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/30.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/31.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/32.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/33.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/34.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/35.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/36.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/37.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/38.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/39.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/40.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/41.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/42.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/43.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/44.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/45.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/46.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/47.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/48.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/49.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/50.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/51.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/52.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/53.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/54.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/55.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/56.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/57.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/58.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/59.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/60.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/61.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/62.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/63.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/64.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/65.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/66.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/67.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/68.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/69.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/70.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/71.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/72.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/73.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/74.jpg
https://ik.imagekit.io/kanhaashutech/Assets/rotating%20symbols/75.jpg
    `;


//     var data = `
// ./Assets/rotating symbols/1.jpg
// ./Assets/rotating symbols/2.jpg
// ./Assets/rotating symbols/3.jpg
// ./Assets/rotating symbols/4.jpg
// ./Assets/rotating symbols/5.jpg
// ./Assets/rotating symbols/6.jpg
// ./Assets/rotating symbols/7.jpg
// ./Assets/rotating symbols/8.jpg
// ./Assets/rotating symbols/9.jpg
// ./Assets/rotating symbols/10.jpg
// ./Assets/rotating symbols/11.jpg
// ./Assets/rotating symbols/12.jpg
// ./Assets/rotating symbols/13.jpg
// ./Assets/rotating symbols/14.jpg
// ./Assets/rotating symbols/15.jpg
// ./Assets/rotating symbols/16.jpg
// ./Assets/rotating symbols/17.jpg
// ./Assets/rotating symbols/18.jpg
// ./Assets/rotating symbols/19.jpg
// ./Assets/rotating symbols/20.jpg
// ./Assets/rotating symbols/21.jpg
// ./Assets/rotating symbols/22.jpg
// ./Assets/rotating symbols/23.jpg
// ./Assets/rotating symbols/24.jpg
// ./Assets/rotating symbols/25.jpg
// ./Assets/rotating symbols/26.jpg
// ./Assets/rotating symbols/27.jpg
// ./Assets/rotating symbols/28.jpg
// ./Assets/rotating symbols/29.jpg
// ./Assets/rotating symbols/30.jpg
// ./Assets/rotating symbols/31.jpg
// ./Assets/rotating symbols/32.jpg
// ./Assets/rotating symbols/33.jpg
// ./Assets/rotating symbols/34.jpg
// ./Assets/rotating symbols/35.jpg
// ./Assets/rotating symbols/36.jpg
// ./Assets/rotating symbols/37.jpg
// ./Assets/rotating symbols/38.jpg
// ./Assets/rotating symbols/39.jpg
// ./Assets/rotating symbols/40.jpg
// ./Assets/rotating symbols/41.jpg
// ./Assets/rotating symbols/42.jpg
// ./Assets/rotating symbols/43.jpg
// ./Assets/rotating symbols/44.jpg
// ./Assets/rotating symbols/45.jpg
// ./Assets/rotating symbols/46.jpg
// ./Assets/rotating symbols/47.jpg
// ./Assets/rotating symbols/48.jpg
// ./Assets/rotating symbols/49.jpg
// ./Assets/rotating symbols/50.jpg
// ./Assets/rotating symbols/51.jpg
// ./Assets/rotating symbols/52.jpg
// ./Assets/rotating symbols/53.jpg
// ./Assets/rotating symbols/54.jpg
// ./Assets/rotating symbols/55.jpg
// ./Assets/rotating symbols/56.jpg
// ./Assets/rotating symbols/57.jpg
// ./Assets/rotating symbols/58.jpg
// ./Assets/rotating symbols/59.jpg
// ./Assets/rotating symbols/60.jpg
// ./Assets/rotating symbols/61.jpg
// ./Assets/rotating symbols/62.jpg
// ./Assets/rotating symbols/63.jpg
// ./Assets/rotating symbols/64.jpg
// ./Assets/rotating symbols/65.jpg
// ./Assets/rotating symbols/66.jpg
// ./Assets/rotating symbols/67.jpg
// ./Assets/rotating symbols/68.jpg
// ./Assets/rotating symbols/69.jpg
// ./Assets/rotating symbols/70.jpg
// ./Assets/rotating symbols/71.jpg
// ./Assets/rotating symbols/72.jpg
// ./Assets/rotating symbols/73.jpg
// ./Assets/rotating symbols/74.jpg
// ./Assets/rotating symbols/75.jpg
// `;
    return data.split("\n")[index];
  }

  const frameCount = 75;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    // images.push(img); 
    if (i % 1 === 0) images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.page10 `,
      start: `top top`,
      end: `100% 90%`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    // var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".page10 .rgt",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `190%  bottom`,
  });
}
canvas10()



// page 11

// const scrollContainer = document.querySelector('.scroll_cont');
//         let isDown = false;
//         let startX;
//         let scrollLeft;

//         scrollContainer.addEventListener('mousedown', (e) => {
//             isDown = true;
//             scrollContainer.classList.add('active');
//             startX = e.pageX - scrollContainer.offsetLeft;
//             scrollLeft = scrollContainer.scrollLeft;
//             scrollContainer.style.cursor = "grabbing"; // Change cursor on click
//         });

//         scrollContainer.addEventListener('mouseleave', () => {
//             isDown = false;
//             scrollContainer.style.cursor = "grab"; // Revert cursor
//         });

//         scrollContainer.addEventListener('mouseup', () => {
//             isDown = false;
//             scrollContainer.style.cursor = "grab"; // Revert cursor
//         });

//         scrollContainer.addEventListener('mousemove', (e) => {
//             if (!isDown) return;
//             e.preventDefault();
//             const x = e.pageX - scrollContainer.offsetLeft;
//             const walk = (x - startX) * 2; // Multiply for faster scroll
//             scrollContainer.scrollLeft = scrollLeft - walk;
//         });







