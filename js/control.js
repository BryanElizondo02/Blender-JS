'use strict'

var blender = document.getElementById('blender');
var soundBlender = document.getElementById('soundMotor');
var blenderButtom = document.getElementById('soundButton');

var blenderState = false;//off

function controllBlender(){

  if(blenderState){

    blenderState = false;

    blender.classList.remove("on");
    onSound()

  }else{

    blenderState = true;
    onSound();
    blender.classList.add("on");
  }


}//end function

function onSound(){
  if(soundBlender.paused){
    blenderButtom.play();
    soundBlender.play();
  }else{
    blenderButtom.play();
    soundBlender.pause();
    soundBlender.currentTime = 0;
  }

}//end function



