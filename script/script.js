let myContent,
siteIcon1,siteIcon2,siteIcon3,siteIcon4,
siteImage1,siteImage2,siteImage3,siteImage4,
myWorksBtn,aboutMeBtn,contactMeBtn,
myWindow,windowCloseBtn,
aboutMeDisplay,contactDisplay,worksDisplay,
first_column,second_column,third_column;

window.addEventListener('load', function(e) {
       setTimeout(function() { window.scrollTo(0, 1); }, 1);
     }, false);


document.addEventListener("DOMContentLoaded", () => {
  myContent=document.getElementsByClassName("main-content")[0];
  siteIcon1 = document.getElementsByClassName("small-img-1")[0];
  siteIcon2 = document.getElementsByClassName("small-img-2")[0];
  siteIcon3 = document.getElementsByClassName("small-img-3")[0];
  siteIcon4 = document.getElementsByClassName("small-img-4")[0];

  siteImage1 = document.getElementsByClassName("big-img-1")[0];
  siteImage2 = document.getElementsByClassName("big-img-2")[0];
  siteImage3 = document.getElementsByClassName("big-img-3")[0];
  siteImage4 = document.getElementsByClassName("big-img-4")[0];

  myWorksBtn = document.getElementsByClassName("my-works-div")[0];
  aboutMeBtn = document.getElementsByClassName("about-me-div")[0];
  contactMeBtn = document.getElementsByClassName("contact-div")[0];

  myWindow = document.getElementsByClassName("my-works-window")[0];

  windowCloseBtn = document.getElementsByClassName("close-btn-div")[0];

  aboutMeDisplay = document.getElementsByClassName("about-me-display")[0];
  contactDisplay = document.getElementsByClassName("contact-display")[0];
  worksDisplay = document.getElementsByClassName("works-display")[0];

  first_column = document.getElementsByClassName("first-column")[0];
  second_column = document.getElementsByClassName("second-column")[0];
  third_column = document.getElementsByClassName("third-column")[0];

  let KeyUpHandler= event=>{
    if(event.key == "Escape"){
      myWindow.style["-moz-transform"] = "translate(-50%,101vh)";
      myWindow.style.transform = "translate(-50%,101vh)";

      windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
      windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";

      setTimeout(()=>{
        myContent.style["-moz-transform"]="scale(1)";
        myContent.style.transform="scale(1)";
        // myWindow.style.display="none";
      },1000);
      windowCloseBtn.addEventListener('mousedown', mouseDown, false);
      window.removeEventListener('mouseup', mouseUp, false);
      myWindow.style["-moz-transition"] = "all 1s ease-in-out";
      myWindow.style.transition = "all 1s ease-in-out";

      setTimeout(()=>{
        siteImage1.style.display="none";
        siteImage2.style.display="none";
        siteImage3.style.display="none";
        siteImage4.style.display="none";
      },1000);
      window.removeEventListener('keyup',KeyUpHandler,false);
    };
  };

let topButtonEnter=()=>{
  windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(1)";
  windowCloseBtn.style.transform="translateY(-100px)scaleY(1)";
  setTimeout(()=>{
    windowCloseBtn.style["-moz-transform"]="translateY(0)";
    windowCloseBtn.style.transform="translateY(0)";
    windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";
    windowCloseBtn.style.transition="all 0.5s ease-in-out";
  },1200);
};

/*---The way contents of window enter screen--*/
let enterWorksContent = ()=>{
  siteIcon1.style.border = "2px solid lightcoral";
  siteIcon2.style.border = "none";
  siteIcon3.style.border = "none";
  siteIcon4.style.border = "none";
  setTimeout(()=>{
    siteImage1.style.display="block";
  },1050);
};
let enterAboutMeContent = () => {
  first_column.style["-moz-transition"]="none";
  first_column.style.transition="none";

  second_column.style["-moz-transition"]="none";
  second_column.style.transition="none";

  third_column.style.transition="none";
  third_column.style["-moz-transition"]="none";

  first_column.style["-moz-transform"] = 'translate(-1500px,0px)';
  second_column.style["-moz-transform"] = 'scaleX(0)rotate3d(0,1,0,-90deg)';
  third_column.style["-moz-transform"] = 'translate(1500px,0px)';
  first_column.style.transform = 'translate(-1500px,0px)';
  second_column.style.transform = 'scaleX(0)rotate3d(0,1,0,-90deg)';
  second_column.style.opacity = '0.1';

  third_column.style.transform = 'translate(1500px,0px)';

  setTimeout(()=>{
    first_column.style.transition="all 0.5s ease-in-out";
    second_column.style.transition="all 1s ease-in-out";
    third_column.style.transition="all 0.5s ease-in-out";

    first_column.style["-moz-transition"]="all 0.7s ease-in-out";
    second_column.style["-moz-transition"]="all 1s ease-in-out";
    second_column.style.transitionDelay="0.5s";

    second_column.style.opacity = '1';

    third_column.style["-moz-transition"]="all 0.7s ease-in-out";

    first_column.style["-moz-transform"] = 'translate(0px,0px)';
    second_column.style["-moz-transform"] = 'scaleX(1)rotate3d(0,1,0,0deg)';
    third_column.style["-moz-transform"] = 'translate(0px,0px)';
    first_column.style.transform = 'translate(0px,0px)';
    second_column.style.transform = 'scaleX(1)rotate3d(0,1,0,0deg)';
    third_column.style.transform = 'translate(0px,0px)';
  },750);
}
let enterContactContent=()=>{

}

/*---The way window enters screen--*/
let windowEnterAnimation = (enterButton,enterContent) => {
    myWindow.style["-moz-transform"] = "translate(-50%,-50%)";
    myWindow.style.transform = "translate(-50%,-50%)";

    enterContent();

    window.addEventListener('keyup',KeyUpHandler,false);

    setTimeout(()=>{
      enterButton();
      siteImage1.style.display="block";
    },700);
};

/*---Content of the window depends on button clicked on main screen--*/
let displayWorks = enterAnimation => {
  aboutMeDisplay.style.display='none';
  contactDisplay.style.display='none';
  worksDisplay.style.display='block';
  enterAnimation(topButtonEnter,enterWorksContent);
};
let displayAboutMe = enterAnimation => {
  aboutMeDisplay.style.display='block';
  contactDisplay.style.display='none';
  worksDisplay.style.display='none';
  enterAnimation(topButtonEnter,enterAboutMeContent);
};
let displayContact = enterAnimation => {
  aboutMeDisplay.style.display='none';
  contactDisplay.style.display='block';
  worksDisplay.style.display='none';
  enterAnimation(topButtonEnter,enterContactContent);
};

/*---Some basic preparation before window is being opened--*/
let prepareWindowToEnter = runDisplay =>{
  windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
  windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";
  windowCloseBtn.style.transition="all 0.5s ease-in-out";
  windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";
  myContent.style["-moz-transform"]="scale(0)";
  myContent.style.transform="scale(0)";

  myWindow.style["-moz-transform"] = "translate(-50%,900px)";
  myWindow.style.transform = "translate(-50%,900px)";

  myWindow.style["-moz-transition"]="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";
  myWindow.style.transition="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";

  runDisplay(windowEnterAnimation);
};

  // My works button click
  myWorksBtn.addEventListener('click',()=>{
    prepareWindowToEnter(displayWorks);
  });

  // About me button click
  aboutMeBtn.addEventListener('click',()=>{
    prepareWindowToEnter(displayAboutMe);
  });

  // Contact button click
  contactMeBtn.addEventListener('click',()=>{
    prepareWindowToEnter(displayContact);
  });

  /*---Hide window click--*/
  /*---Hide window mouse gesture--*/
let divMove = e => {
  myWindow.style["-moz-transform"] = "translate(-50%,"+(e.clientY-500)+"px)";
  myWindow.style.transform = "translate(-50%,"+(e.clientY-500)+"px)";

  if(e.clientY>=250 || e.clientY==0){

    myWindow.style["-moz-transform"] = "translate(-50%,101vh)";
    myWindow.style.transform = "translate(-50%,101vh)";

    windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
    windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";

    setTimeout(()=>{
      myContent.style.display="block";
      myContent.style["-moz-transform"]="scale(1)";
      myContent.style.transform="scale(1)";

    },1001);
    windowCloseBtn.addEventListener('mousedown', mouseDown, false);
    window.removeEventListener('mouseup', mouseUp, false);

    myWindow.style["-moz-transition"] = "all 1s ease-in-out";
    myWindow.style.transition = "all 1s ease-in-out";

    window.removeEventListener('mousemove', divMove, true);
    windowCloseBtn.addEventListener('mousedown', mouseDown, false);

    setTimeout(()=>{
      siteImage1.style.display="none";
      siteImage2.style.display="none";
      siteImage3.style.display="none";
      siteImage4.style.display="none";
    },1000);
  }
}

let mouseUp = e => {
    if(e.clientY>=150 || e.clientY<=70){
      console.log("over 250");
      myWindow.style["-moz-transform"] = "translate(-50%,101vh)";
      myWindow.style.transform = "translate(-50%,101vh)";

      windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
      windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";

      setTimeout(()=>{
        myContent.style["-moz-transform"]="scale(1)";
        myContent.style.transform="scale(1)";
        // myWindow.style.display="none";
      },1000);
      windowCloseBtn.addEventListener('mousedown', mouseDown, false);
      window.removeEventListener('mouseup', mouseUp, false);
      myWindow.style["-moz-transition"] = "all 1s ease-in-out";
      myWindow.style.transition = "all 1s ease-in-out";

      setTimeout(()=>{
        siteImage1.style.display="none";
        siteImage2.style.display="none";
        siteImage3.style.display="none";
        siteImage4.style.display="none";
      },1000);
    }else{
      myWindow.style["-moz-transform"] = "translate(-50%,-50%)";
      myWindow.style.transform = "translate(-50%,-50%)";

      console.log("under 250");
      myWindow.style["-moz-transition"] = "all 1s ease-in-out";
      myWindow.style.transition = "all 1s ease-in-out";

      setTimeout(()=>{
        myWindow.style["-moz-transition"] = "all 0.020s linear";
        myWindow.style.transition = "all 0.020s linear";
      },100);
    }
    window.removeEventListener('mousemove', divMove, true);
    windowCloseBtn.addEventListener('mousedown', mouseDown, false);
}
let mouseDown = e => {
  myWindow.style.transition = "all 0.020s linear";
  myWindow.style["-moz-transition"] = "all 0.020s linear";

  window.addEventListener('mousemove', divMove, true);
  window.addEventListener('mouseup', mouseUp, false);
  windowCloseBtn.removeEventListener('mousedown', mouseDown, false);
}

let addListeners= () => {
  windowCloseBtn.addEventListener('mousedown', mouseDown, false);
};

addListeners();

/*---Behaviour - on change picture event--*/
let turnOffPointerEvents = () => {
  siteIcon1.style.pointerEvents = "none";
  siteIcon2.style.pointerEvents = "none";
  siteIcon3.style.pointerEvents = "none";
  siteIcon4.style.pointerEvents = "none";
};
let turnOnPointerEvents = () => {
  siteIcon1.style.pointerEvents = "auto";
  siteIcon2.style.pointerEvents = "auto";
  siteIcon3.style.pointerEvents = "auto";
  siteIcon4.style.pointerEvents = "auto";
};

siteIcon1.addEventListener('click',event=>{
  turnOffPointerEvents();

  siteImage2.style.animationDuration="0s";
  siteImage3.style.animationDuration="0s";
  siteImage4.style.animationDuration="0s";

  siteImage2.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage3.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage4.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage2.style.zIndex= '-1';
  siteImage3.style.zIndex= '-1';
  siteImage4.style.zIndex= '-1';

  setTimeout(()=>{
    siteImage1.style.display="block";

    siteImage2.style.zIndex= '2';
    siteImage3.style.zIndex= '2';
    siteImage4.style.zIndex= '2';

    setTimeout(()=>{
      turnOnPointerEvents();
    },1700);
  },850);

  setTimeout(()=>{
    siteImage2.style.display="none";
    siteImage3.style.display="none";
    siteImage4.style.display="none";
    siteImage2.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage3.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage4.style.transform="translate(-50%,-50%)rotate(0)";

    siteImage2.style.animationDuration="1.7s";
    siteImage3.style.animationDuration="1.7s";
    siteImage4.style.animationDuration="1.7s";

  },1600);

  siteIcon1.style.border = "2px solid lightcoral";
  siteIcon2.style.border = "none";
  siteIcon3.style.border = "none";
  siteIcon4.style.border = "none";
});

siteIcon2.addEventListener('click',event=>{
  turnOffPointerEvents();

  siteImage1.style.animationDuration="0s";
  siteImage3.style.animationDuration="0s";
  siteImage4.style.animationDuration="0s";

  siteImage1.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage3.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage4.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage1.style.zIndex= '-1';
  siteImage3.style.zIndex= '-1';
  siteImage4.style.zIndex= '-1';

  setTimeout(()=>{
    siteImage2.style.display="block";

    siteImage1.style.zIndex= '2';
    siteImage3.style.zIndex= '2';
    siteImage4.style.zIndex= '2';
    setTimeout(()=>{
      turnOnPointerEvents();
    },1700);
  },850);

  setTimeout(()=>{
    siteImage1.style.display="none";
    siteImage3.style.display="none";
    siteImage4.style.display="none";

    siteImage1.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage3.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage4.style.transform="translate(-50%,-50%)rotate(0)";

    siteImage1.style.animationDuration="1.7s";
    siteImage3.style.animationDuration="1.7s";
    siteImage4.style.animationDuration="1.7s";

  },1600);

  siteIcon2.style.border = "2px solid lightcoral";
  siteIcon1.style.border = "none";
  siteIcon3.style.border = "none";
  siteIcon4.style.border = "none";
});

siteIcon3.addEventListener('click',event=>{
  turnOffPointerEvents();

  siteImage1.style.animationDuration="0s";
  siteImage2.style.animationDuration="0s";
  siteImage4.style.animationDuration="0s";

  siteImage1.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage2.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage4.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage1.style.zIndex= '-1';
  siteImage2.style.zIndex= '-1';
  siteImage4.style.zIndex= '-1';

  setTimeout(()=>{
    siteImage3.style.display="block";

    siteImage1.style.zIndex= '2';
    siteImage2.style.zIndex= '2';
    siteImage4.style.zIndex= '2';

    setTimeout(()=>{
      turnOnPointerEvents();
    },1700);
  },850);

  setTimeout(()=>{
    siteImage1.style.display="none";
    siteImage2.style.display="none";
    siteImage4.style.display="none";

    siteImage1.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage2.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage4.style.transform="translate(-50%,-50%)rotate(0)";

    siteImage1.style.animationDuration="1.7s";
    siteImage2.style.animationDuration="1.7s";
    siteImage4.style.animationDuration="1.7s";
  },1600);

  siteIcon3.style.border = "2px solid lightcoral";
  siteIcon1.style.border = "none";
  siteIcon2.style.border = "none";
  siteIcon4.style.border = "none";
});

siteIcon4.addEventListener('click',event=>{
  turnOffPointerEvents();

  siteImage1.style.animationDuration="0s";
  siteImage2.style.animationDuration="0s";
  siteImage3.style.animationDuration="0s";

  siteImage1.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage2.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage3.style.transform="translate(-50%,350%)rotate(30deg)";
  siteImage1.style.zIndex= '-1';
  siteImage2.style.zIndex= '-1';
  siteImage3.style.zIndex= '-1';


  setTimeout(()=>{

    siteImage4.style.display="block";

    siteImage1.style.zIndex= '2';
    siteImage2.style.zIndex= '2';
    siteImage3.style.zIndex= '2';
    setTimeout(()=>{
      turnOnPointerEvents();
    },1700);
  },850);

  setTimeout(()=>{
    siteImage1.style.display="none";
    siteImage2.style.display="none";
    siteImage3.style.display="none";

    siteImage1.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage2.style.transform="translate(-50%,-50%)rotate(0)";
    siteImage3.style.transform="translate(-50%,-50%)rotate(0)";

    siteImage1.style.animationDuration="1.7s";
    siteImage2.style.animationDuration="1.7s";
    siteImage3.style.animationDuration="1.7s";
  },1600);

  siteIcon4.style.border = "2px solid lightcoral";
  siteIcon1.style.border = "none";
  siteIcon2.style.border = "none";
  siteIcon3.style.border = "none";
});
});
