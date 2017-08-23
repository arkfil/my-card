/*---Show window click--*/
var myContent;
var siteIcon1;
var siteIcon2;
var siteIcon3;
var siteIcon4;

var siteImage1;
var siteImage2;
var siteImage3;
var siteImage4;

var myWorksBtn;
var aboutMeBtn;
var contactMeBtn;

var myWindow;
var windowCloseBtn;

var aboutMeDisplay;
var contactDisplay;
var worksDisplay;

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
  let KeyUpHandler= event=>{
    console.log(event);
    if(event.key == "Escape"){
      myWindow.style["-moz-transform"] = "translate(-50%,800px)";
      myWindow.style.transform = "translate(-50%,800px)";

      setTimeout(()=>{
        myContent.style["-moz-transform"]="scale(1)";
        myContent.style.transform="scale(1)";
        myWindow.style.display="none";
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

  myWorksBtn.addEventListener('click',()=>{
    windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
    windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";

    windowCloseBtn.style.transition="all 0.5s ease-in-out";
    windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";

    myContent.style["-moz-transform"]="scale(0)";
    myContent.style.transform="scale(0)";

    myWindow.style.display='block';
    myWindow.style["-moz-transition"]="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";
    myWindow.style.transition="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";

    aboutMeDisplay.style.display='none';
    contactDisplay.style.display='none';
    worksDisplay.style.display='block';

    setTimeout(()=>{

      myWindow.style["-moz-transform"] = "translate(-50%,-50%)";
      myWindow.style.transform = "translate(-50%,-50%)";

      siteIcon1.style.border = "2px solid lightcoral";
      siteIcon2.style.border = "none";
      siteIcon3.style.border = "none";
      siteIcon4.style.border = "none";
    },10);
    setTimeout(()=>{
      siteImage1.style.display="block";
      windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(1)";
      windowCloseBtn.style.transform="translateY(-100px)scaleY(1)";
    },1050);

    setTimeout(()=>{
      windowCloseBtn.style["-moz-transform"]="translateY(0)";
      windowCloseBtn.style.transform="translateY(0)";
      windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";
      windowCloseBtn.style.transition="all 0.5s ease-in-out";
    },2000);
    window.addEventListener('keyup',KeyUpHandler,false);
  });

  // About me click
  aboutMeBtn.addEventListener('click',()=>{
    worksDisplay.style.display='none';
    contactDisplay.style.display='none';
    aboutMeDisplay.style.display='block';

    windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";
    windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";
    windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";

    windowCloseBtn.style.transition="all 0.5s ease-in-out";

    myContent.style["-moz-transform"]="scale(0)";
    myContent.style.transform="scale(0)";

    // const myWindow=document.getElementsByClassName("my-works-window");

    myWindow.style.display='block';
    myWindow.style["-moz-transition"]="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";
    myWindow.style.transition="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";

    setTimeout(()=>{
      myWindow.style["-moz-transform"] = "translate(-50%,-50%)";
      myWindow.style.transform = "translate(-50%,-50%)";
    },10);
    setTimeout(()=>{
      windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(1)";
      windowCloseBtn.style.transform="translateY(-100px)scaleY(1)";
    },1050);

    setTimeout(()=>{
      windowCloseBtn.style["-moz-transform"]="translateY(0)";
      windowCloseBtn.style.transform="translateY(0)";

      windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";
      windowCloseBtn.style.transition="all 0.5s ease-in-out";
    },2000);

    window.addEventListener('keyup',KeyUpHandler,false);
  });

  // Contact click
  contactMeBtn.addEventListener('click',()=>{
    aboutMeDisplay.style.display='none';
    worksDisplay.style.display='none';
    contactDisplay.style.display='block';

    windowCloseBtn.style.transform="translateY(-100px)scaleY(0)";
    windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(0)";

    windowCloseBtn.style.transition="all 0.5s ease-in-out";
    windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";

    myContent.style["-moz-transform"]="scale(0)";
    myContent.style.transform="scale(0)";

    // const myWindow=document.getElementsByClassName("my-works-window");
    myWindow.style.display='block';
    myWindow.style["-moz-transition"]="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";
    myWindow.style.transition="all 1s cubic-bezier(0.24, 0.17, 0.74, 1.29)";

    setTimeout(()=>{
      myWindow.style["-moz-transform"] = "translate(-50%,-50%)";
      myWindow.style.transform = "translate(-50%,-50%)";

    },10);
    setTimeout(()=>{
      windowCloseBtn.style["-moz-transform"]="translateY(-100px)scaleY(1)";
      windowCloseBtn.style.transform="translateY(-100px)scaleY(1)";

    },600);

    setTimeout(()=>{
      windowCloseBtn.style["-moz-transform"]="translateY(0)";
      windowCloseBtn.style.transform="translateY(0)";
      windowCloseBtn.style["-moz-transition"]="all 0.5s ease-in-out";
      windowCloseBtn.style.transition="all 0.5s ease-in-out";

    },1000);
    window.addEventListener('keyup',KeyUpHandler,false);

  });


  /*---Hide window click--*/
  // let myWindow=document.getElementsByClassName("my-works-window");
  /*---Hide window mouse gesture--*/


  let divMove = e => {
    myWindow.style["-moz-transform"] = "translate(-50%,"+(e.clientY-500)+"px)";
    myWindow.style.transform = "translate(-50%,"+(e.clientY-500)+"px)";

    if(e.clientY>=250 || e.clientY==0){
      myWindow.style["-moz-transform"] = "translate(-50%,800px)";
      myWindow.style.transform = "translate(-50%,800px)";

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
      // console.log(e.clientY);
      if(e.clientY>=150 || e.clientY<=70){
        console.log("over 250");
        myWindow.style["-moz-transform"] = "translate(-50%,800px)";
        myWindow.style.transform = "translate(-50%,800px)";

        setTimeout(()=>{
          myContent.style["-moz-transform"]="scale(1)";
          myContent.style.transform="scale(1)";
          myWindow.style.display="none";
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

  /*---End of dragable--*/

  /*---behaviour - on change picture event--*/

  siteIcon1.addEventListener('click',event=>{
    siteIcon1.style.pointerEvents = "none";
    siteIcon2.style.pointerEvents = "none";
    siteIcon3.style.pointerEvents = "none";
    siteIcon4.style.pointerEvents = "none";

    siteImage2.style.transform="translateY(1900px)rotate(30deg)";
    siteImage3.style.transform="translateY(1900px)rotate(30deg)";
    siteImage4.style.transform="translateY(1900px)rotate(30deg)";
    siteImage2.style.zIndex= '-1';
    siteImage3.style.zIndex= '-1';
    siteImage4.style.zIndex= '-1';

    setTimeout(()=>{
      siteImage1.style.display="block";

      siteImage2.style.transform="translateY(0)rotate(0)";
      siteImage3.style.transform="translateY(0)rotate(0)";
      siteImage4.style.transform="translateY(0)rotate(0)";

      siteImage2.style.display="none";
      siteImage3.style.display="none";
      siteImage4.style.display="none";
      // siteImage1.style.zIndex= '2';
      siteImage2.style.zIndex= '2';
      siteImage3.style.zIndex= '2';
      siteImage4.style.zIndex= '2';

      setTimeout(()=>{
        siteIcon1.style.pointerEvents = "auto";
        siteIcon2.style.pointerEvents = "auto";
        siteIcon3.style.pointerEvents = "auto";
        siteIcon4.style.pointerEvents = "auto";
      },1650)

    },850);

    siteIcon1.style.border = "2px solid lightcoral";
    siteIcon2.style.border = "none";
    siteIcon3.style.border = "none";
    siteIcon4.style.border = "none";
  });

  siteIcon2.addEventListener('click',event=>{
    siteIcon1.style.pointerEvents = "none";
    siteIcon2.style.pointerEvents = "none";
    siteIcon3.style.pointerEvents = "none";
    siteIcon4.style.pointerEvents = "none";

    siteImage1.style.transform="translateY(1900px)rotate(30deg)";
    siteImage3.style.transform="translateY(1900px)rotate(30deg)";
    siteImage4.style.transform="translateY(1900px)rotate(30deg)";
    siteImage1.style.zIndex= '-1';
    siteImage3.style.zIndex= '-1';
    siteImage4.style.zIndex= '-1';

    setTimeout(()=>{
      siteImage2.style.display="block";

      siteImage1.style.transform="translateY(0)rotate(0)";
      siteImage3.style.transform="translateY(0)rotate(0)";
      siteImage4.style.transform="translateY(0)rotate(0)";

      siteImage1.style.display="none";
      siteImage3.style.display="none";
      siteImage4.style.display="none";
      // siteImage1.style.zIndex= '2';
      siteImage1.style.zIndex= '2';
      siteImage3.style.zIndex= '2';
      siteImage4.style.zIndex= '2';

      setTimeout(()=>{
        siteIcon1.style.pointerEvents = "auto";
        siteIcon2.style.pointerEvents = "auto";
        siteIcon3.style.pointerEvents = "auto";
        siteIcon4.style.pointerEvents = "auto";
      },1650)
    },850);

    siteIcon2.style.border = "2px solid lightcoral";
    siteIcon1.style.border = "none";
    siteIcon3.style.border = "none";
    siteIcon4.style.border = "none";
  });

  siteIcon3.addEventListener('click',event=>{
    siteIcon1.style.pointerEvents = "none";
    siteIcon2.style.pointerEvents = "none";
    siteIcon3.style.pointerEvents = "none";
    siteIcon4.style.pointerEvents = "none";

    siteImage1.style.transform="translateY(1900px)rotate(30deg)";
    siteImage2.style.transform="translateY(1900px)rotate(30deg)";
    siteImage4.style.transform="translateY(1900px)rotate(30deg)";
    siteImage1.style.zIndex= '-1';
    siteImage2.style.zIndex= '-1';
    siteImage4.style.zIndex= '-1';

    setTimeout(()=>{
      siteImage3.style.display="block";

      siteImage1.style.transform="translateY(0)rotate(0)";
      siteImage2.style.transform="translateY(0)rotate(0)";
      siteImage4.style.transform="translateY(0)rotate(0)";

      siteImage1.style.display="none";
      siteImage2.style.display="none";
      siteImage4.style.display="none";
      // siteImage1.style.zIndex= '2';
      siteImage1.style.zIndex= '2';
      siteImage2.style.zIndex= '2';
      siteImage4.style.zIndex= '2';

      setTimeout(()=>{
        siteIcon1.style.pointerEvents = "auto";
        siteIcon2.style.pointerEvents = "auto";
        siteIcon3.style.pointerEvents = "auto";
        siteIcon4.style.pointerEvents = "auto";
      },1650)
    },850);

    siteIcon3.style.border = "2px solid lightcoral";
    siteIcon1.style.border = "none";
    siteIcon2.style.border = "none";
    siteIcon4.style.border = "none";
  });

  siteIcon4.addEventListener('click',event=>{
    siteIcon1.style.pointerEvents = "none";
    siteIcon2.style.pointerEvents = "none";
    siteIcon3.style.pointerEvents = "none";
    siteIcon4.style.pointerEvents = "none";

    siteImage1.style.transform="translateY(1900px)rotate(30deg)";
    siteImage2.style.transform="translateY(1900px)rotate(30deg)";
    siteImage3.style.transform="translateY(1900px)rotate(30deg)";
    siteImage1.style.zIndex= '-1';
    siteImage2.style.zIndex= '-1';
    siteImage3.style.zIndex= '-1';

    setTimeout(()=>{
      siteImage4.style.display="block";

      siteImage1.style.transform="translateY(0)rotate(0)";
      siteImage2.style.transform="translateY(0)rotate(0)";
      siteImage3.style.transform="translateY(0)rotate(0)";

      siteImage1.style.display="none";
      siteImage2.style.display="none";
      siteImage3.style.display="none";
      // siteImage1.style.zIndex= '2';
      siteImage1.style.zIndex= '2';
      siteImage2.style.zIndex= '2';
      siteImage3.style.zIndex= '2';
      setTimeout(()=>{
        siteIcon1.style.pointerEvents = "auto";
        siteIcon2.style.pointerEvents = "auto";
        siteIcon3.style.pointerEvents = "auto";
        siteIcon4.style.pointerEvents = "auto";
      },1650)
    },850);

    siteIcon4.style.border = "2px solid lightcoral";
    siteIcon1.style.border = "none";
    siteIcon2.style.border = "none";
    siteIcon3.style.border = "none";
  });

});
