function solve(){

  let input=document.getElementById("input").value;
  let answer=document.getElementById("answer");
  let video=document.getElementById("videoBox");

  if(!input) return;

  let result = "";

  if(input.toLowerCase().includes("dbms")){
    result = "DBMS is a system used to store and manage data using SQL.";
  }
  else if(input.toLowerCase().includes("os")){
    result = "OS manages memory, CPU scheduling and processes.";
  }
  else if(input.toLowerCase().includes("dsa")){
    result = "DSA = Data Structures + Algorithms used for problem solving.";
  }
  else{
    result = "AI could not find exact answer. Try DSA, OS, DBMS.";
  }

  answer.innerText = "Answer: " + result;

  // 🎥 AI VIDEO EFFECT
  video.classList.remove("hidden");

  setTimeout(()=>{
    video.classList.add("hidden");
  }, 3000);
}