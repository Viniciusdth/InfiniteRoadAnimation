// isle function
function isleDefine(){
  new Promise((resolve, reject) => {
    isles = document.querySelectorAll('.isle');
    for (let i = 0; i < isles.length; i++) {
      randomIsle = Math.round(Math.random())
      if (randomIsle === 0) {
        if (isles[i].classList.contains('isle-left')) {
        } else {
          isles[i].classList.add("isle-left");
        }
      } else if (randomIsle === 1) {
        if (isles[i].classList.contains('isle-right')) {
        } else {
          isles[i].classList.add("isle-right");
        }
      } 
    }
    resolve();
  })
  .then(() => {
    animateIsles();
  })
}

function animateIsles(){
  new Promise((resolve, reject) => {
    leftIsles = document.querySelectorAll('.isle-left');
    rightIsles = document.querySelectorAll('.isle-right');
    leftIslesStyle = [];
    rightIslesStyle = [];
    for (let i = 0; i < leftIsles.length; i++) {   
      leftIslesStyle[i] = leftIsles[i].style;
      leftIslesStyle[0].top = "1%";
      leftIslesStyle[i].left = "-20%";
    };  
    for (let i = 0; i < rightIsles.length; i++) {
      rightIslesStyle[i] = rightIsles[i].style;
      rightIslesStyle[0].top = "1%";
      rightIslesStyle[i].marginLeft = "80%";
      
    };
    setTimeout(function() {
      resolve();
    }, 5000);
  }).then(() => {
    leftIsles = document.querySelectorAll('.isle-left');
    rightIsles = document.querySelectorAll('.isle-right');
    leftIslesStyle = [];
    rightIslesStyle = [];
    for (let i = 0; i < leftIsles.length; i++) {
      leftIslesStyle[i] = leftIsles[i].style;
      leftIslesStyle[0].top = "50%";
      leftIslesStyle[i].left = "50%";
    };  
    for (let i = 0; i < rightIsles.length; i++) {
      rightIslesStyle[i] = rightIsles[i].style;
      rightIslesStyle[0].top = "50%";
      rightIslesStyle[i].marginLeft = "0%";
    }
  }).then(() => {
    isleRemove();
  });
}
function isleRemove(){
  console.log("isle remove access");
  isles = document.querySelectorAll('.isle');
  for (let i = 0; i < isles.length; i++) {
    if (isles[i].classList.contains('isle-left')) {
      isles[i].classList.remove("isle-left");
    } else if (isles[i].classList.contains('isle-right')) {
      isles[i].classList.remove("isle-right");
    }
  }
  setTimeout(function() {
    isleDefine();
  }, 1500);
  
}

// Road Functions
function roadStrip() {
  let roadStripHeight = document.getElementById("strip"),
  height = window.getComputedStyle(roadStripHeight);
  function animateRoadStrip() {
    roadStripHeight.classList.add("road-strip-animation")
    setTimeout(function() {
      roadStripHeight.classList.remove("road-strip-animation")
    }, 700);
    setTimeout(function() {
      animateRoadStrip();
    }, 750);
  }
  animateRoadStrip();
};


window.onload = function() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  isleDefine();
  roadStrip();
  
};