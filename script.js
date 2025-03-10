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
    //   var data = `
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

    var data = `
./frames00007.png
./frames00010.png
./frames00013.png
./frames00016.png
./frames00019.png
./frames00022.png
./frames00025.png
./frames00028.png
./frames00031.png
./frames00034.png
./frames00037.png
./frames00040.png
./frames00043.png
./frames00046.png
./frames00049.png
./frames00052.png
./frames00055.png
./frames00058.png
./frames00061.png
./frames00064.png
./frames00067.png
./frames00070.png
./frames00073.png
./frames00076.png
./frames00079.png
./frames00082.png
./frames00085.png
./frames00088.png
./frames00091.png
./frames00094.png
./frames00097.png
./frames00100.png
./frames00103.png
./frames00106.png
./frames00109.png
./frames00112.png
./frames00115.png
./frames00118.png
./frames00121.png
./frames00124.png
./frames00127.png
./frames00130.png
./frames00133.png
./frames00136.png
./frames00139.png
./frames00142.png
./frames00145.png
./frames00148.png
./frames00151.png
./frames00154.png
./frames00157.png
./frames00160.png
./frames00163.png
./frames00166.png
./frames00169.png
./frames00172.png
./frames00175.png
./frames00178.png
./frames00181.png
./frames00184.png
./frames00187.png
./frames00190.png
./frames00193.png
./frames00196.png
./frames00199.png
./frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 67;

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

    var data = `
  ./bridges00004.png
  ./bridges00007.png
  ./bridges00010.png
  ./bridges00013.png
  ./bridges00016.png
  ./bridges00019.png
  ./bridges00022.png
  ./bridges00025.png
  ./bridges00028.png
  ./bridges00031.png
  ./bridges00034.png
  ./bridges00037.png
  ./bridges00040.png
  ./bridges00043.png
  ./bridges00046.png
  ./bridges00049.png
  ./bridges00052.png
  ./bridges00055.png
  ./bridges00058.png
  ./bridges00061.png
  ./bridges00064.png
  ./bridges00067.png
  ./bridges00070.png
  ./bridges00073.png
  ./bridges00076.png
  ./bridges00079.png
  ./bridges00082.png
  ./bridges00085.png
  ./bridges00088.png
  ./bridges00091.png
  ./bridges00094.png
  ./bridges00097.png
  ./bridges00100.png
  ./bridges00103.png
  ./bridges00106.png
  ./bridges00109.png
  ./bridges00112.png
  ./bridges00115.png
  ./bridges00118.png
  ./bridges00121.png
  ./bridges00124.png
  ./bridges00127.png
  ./bridges00130.png
  ./bridges00133.png
  ./bridges00136.png
  ./bridges00139.png
  ./bridges00142.png
  ./bridges00145.png
  ./bridges00148.png
  ./bridges00151.png
  ./bridges00154.png
  ./bridges00157.png
  ./bridges00160.png
  ./bridges00163.png
  ./bridges00166.png
  ./bridges00169.png
  ./bridges00172.png
  ./bridges00175.png
  ./bridges00178.png
  ./bridges00181.png
  ./bridges00184.png
  ./bridges00187.png
  ./bridges00190.png
  ./bridges00193.png
  ./bridges00196.png
  ./bridges00199.png
  ./bridges00202.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 67;

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

https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2

`;
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
    var data = 
`https://thisismagma.com/assets/home/roadmap/seq/1.jpg
https://thisismagma.com/assets/home/roadmap/seq/2.jpg
https://thisismagma.com/assets/home/roadmap/seq/3.jpg
https://thisismagma.com/assets/home/roadmap/seq/4.jpg
https://thisismagma.com/assets/home/roadmap/seq/5.jpg
https://thisismagma.com/assets/home/roadmap/seq/6.jpg
https://thisismagma.com/assets/home/roadmap/seq/7.jpg
https://thisismagma.com/assets/home/roadmap/seq/8.jpg
https://thisismagma.com/assets/home/roadmap/seq/9.jpg
https://thisismagma.com/assets/home/roadmap/seq/10.jpg
https://thisismagma.com/assets/home/roadmap/seq/11.jpg
https://thisismagma.com/assets/home/roadmap/seq/12.jpg
https://thisismagma.com/assets/home/roadmap/seq/13.jpg
https://thisismagma.com/assets/home/roadmap/seq/14.jpg
https://thisismagma.com/assets/home/roadmap/seq/15.jpg
https://thisismagma.com/assets/home/roadmap/seq/16.jpg
https://thisismagma.com/assets/home/roadmap/seq/17.jpg
https://thisismagma.com/assets/home/roadmap/seq/18.jpg
https://thisismagma.com/assets/home/roadmap/seq/19.jpg
https://thisismagma.com/assets/home/roadmap/seq/20.jpg
https://thisismagma.com/assets/home/roadmap/seq/21.jpg
https://thisismagma.com/assets/home/roadmap/seq/22.jpg
https://thisismagma.com/assets/home/roadmap/seq/23.jpg
https://thisismagma.com/assets/home/roadmap/seq/24.jpg
https://thisismagma.com/assets/home/roadmap/seq/25.jpg
https://thisismagma.com/assets/home/roadmap/seq/26.jpg
https://thisismagma.com/assets/home/roadmap/seq/27.jpg
https://thisismagma.com/assets/home/roadmap/seq/28.jpg
https://thisismagma.com/assets/home/roadmap/seq/29.jpg
https://thisismagma.com/assets/home/roadmap/seq/30.jpg
https://thisismagma.com/assets/home/roadmap/seq/31.jpg
https://thisismagma.com/assets/home/roadmap/seq/32.jpg
https://thisismagma.com/assets/home/roadmap/seq/33.jpg
https://thisismagma.com/assets/home/roadmap/seq/34.jpg
https://thisismagma.com/assets/home/roadmap/seq/35.jpg
https://thisismagma.com/assets/home/roadmap/seq/36.jpg
https://thisismagma.com/assets/home/roadmap/seq/37.jpg
https://thisismagma.com/assets/home/roadmap/seq/38.jpg
https://thisismagma.com/assets/home/roadmap/seq/39.jpg
https://thisismagma.com/assets/home/roadmap/seq/40.jpg
https://thisismagma.com/assets/home/roadmap/seq/41.jpg
https://thisismagma.com/assets/home/roadmap/seq/42.jpg
https://thisismagma.com/assets/home/roadmap/seq/43.jpg
https://thisismagma.com/assets/home/roadmap/seq/44.jpg
https://thisismagma.com/assets/home/roadmap/seq/45.jpg
https://thisismagma.com/assets/home/roadmap/seq/46.jpg
https://thisismagma.com/assets/home/roadmap/seq/47.jpg
https://thisismagma.com/assets/home/roadmap/seq/48.jpg
https://thisismagma.com/assets/home/roadmap/seq/49.jpg
https://thisismagma.com/assets/home/roadmap/seq/50.jpg
https://thisismagma.com/assets/home/roadmap/seq/51.jpg
https://thisismagma.com/assets/home/roadmap/seq/52.jpg
https://thisismagma.com/assets/home/roadmap/seq/53.jpg
https://thisismagma.com/assets/home/roadmap/seq/54.jpg
https://thisismagma.com/assets/home/roadmap/seq/55.jpg
https://thisismagma.com/assets/home/roadmap/seq/56.jpg
https://thisismagma.com/assets/home/roadmap/seq/57.jpg
https://thisismagma.com/assets/home/roadmap/seq/58.jpg
https://thisismagma.com/assets/home/roadmap/seq/59.jpg
https://thisismagma.com/assets/home/roadmap/seq/60.jpg
https://thisismagma.com/assets/home/roadmap/seq/61.jpg
https://thisismagma.com/assets/home/roadmap/seq/62.jpg
https://thisismagma.com/assets/home/roadmap/seq/63.jpg
https://thisismagma.com/assets/home/roadmap/seq/64.jpg
https://thisismagma.com/assets/home/roadmap/seq/65.jpg
https://thisismagma.com/assets/home/roadmap/seq/66.jpg
https://thisismagma.com/assets/home/roadmap/seq/67.jpg
https://thisismagma.com/assets/home/roadmap/seq/68.jpg
https://thisismagma.com/assets/home/roadmap/seq/69.jpg
https://thisismagma.com/assets/home/roadmap/seq/70.jpg
https://thisismagma.com/assets/home/roadmap/seq/71.jpg
https://thisismagma.com/assets/home/roadmap/seq/72.jpg
https://thisismagma.com/assets/home/roadmap/seq/73.jpg
https://thisismagma.com/assets/home/roadmap/seq/74.jpg
https://thisismagma.com/assets/home/roadmap/seq/75.jpg`;
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








