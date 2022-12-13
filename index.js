

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var milliSeconds = document.getElementById("milliseconds");

var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

 var started = false;
var id;
var secondsCounter = 00;
var minutesCounter = 00;
var milliSecondsCounter = 00;

function stopTimer() {
  clearInterval(id);
}

var startTimer = () => {
  started = true;
  id = setInterval(() => {
    milliSecondsCounter++;
    if (milliSecondsCounter == 100) {
      secondsCounter++;
      if (secondsCounter == 60) {
        minutesCounter++;
        if (minutesCounter < 10) {
          minutes.innerHTML = "0" + minutesCounter;
        } else {
          minutes.innerHTML = minutesCounter;
        }

        secondsCounter =00;
        seconds.innerHTML = secondsCounter;
        milliSecondsCounter = 00;
        milliSeconds.innerHTML = "00";
      } else if (secondsCounter < 10) {
        seconds.innerHTML = "0" + secondsCounter;
        milliSecondsCounter=00
        milliSeconds.innnerHTML="00"
      } else {
        seconds.innerHTML = secondsCounter;

        milliSecondsCounter = 00;
        milliSeconds.innerHTML = "00";
      }
    } else if (milliSecondsCounter< 10) {
      milliSeconds.innerHTML = "0" + milliSecondsCounter;
    } else {
      milliSeconds.innerHTML = milliSecondsCounter;
    }
  }, 10)
};
console.log(startBtn);
console.log(milliSeconds.innerHTML);

startBtn.addEventListener("click", () => {

   if(!started){
    startTimer()
   }

});

function stopTimer(){
    if(started){
    clearInterval(id)}
    
}

function resetTimer(){
    stopTimer()
    seconds.innerHTML="00"
    minutes.innerHTML="00"
    milliSeconds.innerHTML="00"
}


stopBtn.addEventListener("click", stopTimer)
resetBtn.addEventListener("click", resetTimer)




//practice
// //timer objects
// var mins = document.getElementById('minutes');
// var secs = document.getElementById('seconds');
// var milisecs = document.getElementById('milliseconds');

// //button objects
// var startButton = document.getElementById('start');
// var stopButton = document.getElementById('stop');
// var resetButton = document.getElementById('reset');

// // variable used
// var secondsCounter = 00;
// var minsCounter = 00;
// var milisecondsCounter = 00;
// var started = false; // this variable to handle multiple clicks on the start button
// var id;

// var stopTimer = function(){
//     clearInterval(id);
// }

// var startTimer = ()=>{
//     started = true;
//     id = setInterval(()=>{
//     // console.log('inside id');
//     milisecondsCounter++;
//     if(milisecondsCounter=='100'){
//         secondsCounter++;
//         if(secondsCounter=='60'){
//             minsCounter++;
//             if(minsCounter<10){
//                 mins.innerHTML = '0' + minsCounter;

//             }else{
//                 mins.innerHTML = minsCounter;
//             }
//             secondsCounter = '00';
//             secs.innerHTML = secondsCounter;
//             milisecondsCounter = 00;
//             milisecs.innerHTML = '00';
//         }else if(secondsCounter<10){
//             secs.innerHTML = '0' + secondsCounter;
//             milisecondsCounter = 00;
//             milisecs.innerHTML = '00';
//         }else{
//         secs.innerHTML = secondsCounter;
//         milisecondsCounter = 00;
//         milisecs.innerHTML = '00';
//     }
//     }else if(milisecondsCounter<10){
//     milisecs.innerHTML = '0' + milisecondsCounter;
//     }else{
//     milisecs.innerHTML = milisecondsCounter;
//     }
// },10)
// };

// //Event handling of each buttons

// startButton.addEventListener('click',function(){
//     if(!started){
//     startTimer();
//     }
// })

// stopButton.addEventListener('click',function(){
//     stopTimer();
//     started = false;
// })

// resetButton.addEventListener('click',function(){
//     stopTimer();
//     secondsCounter = 00;
//     minsCounter = 00;
//     milisecondsCounter = 00;
//     started = false;
//     milisecs.innerHTML = '0' +milisecondsCounter;
//     secs.innerHTML = '0' +secondsCounter;
//     mins.innerHTML = '0' + minsCounter;
// })