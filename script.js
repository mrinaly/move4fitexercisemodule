let userLevelName=["Beginner","Basic","Intermediate","Advanced"];
let userLevelNum;


// function getInputValue(){
document.getElementById("button1").addEventListener("click",function(){
    // Selecting the input element and get its value
    let userAge = document.getElementById("userAge").value;
    let userLevel = document.getElementById("userLevel").value;
    let userIntensity = document.getElementById("userIntensity").value;

    //delration for selection of sections for display
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    var z = document.getElementById("myDIV3");
    //

    if(userLevel===userLevelName[0]){
      userLevelNum="1";
    }else if(userLevel===userLevelName[1]){
      userLevelNum="2";
    }else if(userLevel===userLevelName[2]){
      userLevelNum="3";
    }else{
      userLevelNum="4";
    }
    let userKey=[userAge,userLevelNum,userIntensity].toString();
    console.log(userKey);
    let keyArrayList=[exercises[0].key,exercises[1].key];//update this list for adding key for new list of exercises
      console.log(keyArrayList)
    if(keyArrayList.includes(userKey)){
      console.log(exercises[keyArrayList.indexOf(userKey)].exe1);
      document.getElementById("warm-up").textContent=`  ${exercises[keyArrayList.indexOf(userKey)].warmup} min`;
      document.getElementById("exe1-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe1[0]}`;
      document.getElementById("exe1-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe1[1]} rep`;
      document.getElementById("exe1-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe1[2]} min`;
      document.getElementById("exe2-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe2[0]}`;
      document.getElementById("exe2-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe2[1]} rep`;
      document.getElementById("exe2-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe2[2]} min`;
      document.getElementById("exe3-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe3[0]}`;
      document.getElementById("exe3-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe3[1]} rep`;
      document.getElementById("exe3-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe3[2]} min`;
      document.getElementById("exe4-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe4[0]}`;
      document.getElementById("exe4-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe4[1]} rep`;
      document.getElementById("exe4-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe4[2]} min`;
      document.getElementById("exe5-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe5[0]}`;
      document.getElementById("exe5-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe5[1]} rep`;
      document.getElementById("exe5-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe5[2]} min`;
      document.getElementById("exe6-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe6[0]}`;
      document.getElementById("exe6-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe6[1]} rep`;
      document.getElementById("exe6-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe6[2]} min`;
      document.getElementById("exe7-name").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe7[0]}`;
      document.getElementById("exe7-reps").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe7[1]} rep`;
      document.getElementById("exe7-time").textContent=`     ${exercises[keyArrayList.indexOf(userKey)].exe7[2]} min`;
      document.getElementById("cool-down").textContent=`  ${exercises[keyArrayList.indexOf(userKey)].cooldown} min`;
    }else {
      alert("Invalid or Blank Input. Kindly re-select!");
      location.reload();
    }
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display="block";
  }

//reset button function
  document.getElementById("button2").addEventListener("click",function(){
    if (x.style.display === "none") {
// to take back the user on the homepage to select a different workout
    location.reload();
  } else {
      x.style.display = "none";
      y.style.display="block";
  }
})

// continue button to go on the start workout page
document.getElementById("button3").addEventListener("click",function(){
 if (y.style.display === "none") {
  y.style.display = "visible";
 } else {
    y.style.display = "none";
    z.style.display="block";
    exeImg.src=exeImgArray[0].src;


    // z.style.display="block";
}
})

    let clickCount1=0;
    let exercisesArrayList=exercises[keyArrayList.indexOf(userKey)];//to get the single array from the object arrays
    let arrLength= Object.keys(exercisesArrayList).length; //to get the length of the object
    console.log(arrLength);
    document.getElementById("start-workout").addEventListener("click",function(){
      let startingMinutes=parseInt(exercises[keyArrayList.indexOf(userKey)].time[clickCount1]);
      let time=startingMinutes * 60 ;
      let callCountdown = setInterval(updateCountdown,1000);
      function updateCountdown(){
      if(time >= 0){
        let minutes=Math.floor(time/60);
        let seconds=time % 60;
        seconds=seconds < 10 ? "0" + seconds : seconds;
        document.getElementById("countdown").innerHTML=`${minutes} : ${seconds}`;
        exeImg.src=exeImgArray[clickCount1].src;
        document.getElementById("exercise-title").textContent=exercises[keyArrayList.indexOf(userKey)].name[clickCount1-1];
        document.getElementById("exe-reps").textContent=exercises[keyArrayList.indexOf(userKey)].reps[clickCount1-1];
        document.getElementById("curr-exe-num").textContent=clickCount1;
        document.getElementById("total-exe-num").textContent=arrLength-4;
        document.getElementById("sound1").play();
        time--;
        document.getElementById("start-workout").style.display="none";
      } else{
        // document.getElementById("countdown").textContent=(exercises[keyArrayList.indexOf(userKey)].time[clickCount1+1]);

        exeImg.src=exeImgArray[0].src;
        clearInterval(callCountdown);
        document.getElementById("start-workout").style.display="block";
        document.getElementById("sound1").stop();

       }
     }
         // exeImg.src=exeImgArray[clickCount1+1].src;
         // document.getElementById("countdown").textContent=parseInt(exercises[keyArrayList.indexOf(userKey)].time[clickCount1]);//parseInt is a function to convert string to integer
           clickCount1++;
     });

    //  let clickCount2=0;
    //  document.getElementById("next-workout").addEventListener("click",function(){
    //   // clearInterval(callCountdown);
    //   if(clickCount2<=arrLength-4){
    //     document.getElementById("exercise-title").textContent=exercises[keyArrayList.indexOf(userKey)].name[clickCount2];
    //     document.getElementById("curr-exe-num").textContent=clickCount2+1;
    //     document.getElementById("total-exe-num").textContent=arrLength-3;
    //     exeImg.src=exeImgArray[clickCount1+1].src;
    //
    //
    //     // console.log(typeof parseInt(exercises[keyArrayList.indexOf(userKey)].time[clickCount]));
    //     // funciton to get the timer countdown function
    //     clickCount2 += 1;
    //   }else{
    //     console.log("Well-done, Workout Finished!");
    //   };
    // });
  // }
  })
