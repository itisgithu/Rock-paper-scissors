// //Rock beats saesors  || Seasors beats paper  || Paper beats rock-

// //Varibale create
// let userscore =0;
// let computerscore=0;

// //Access Class [1]
// const choices = document.querySelectorAll(".choice");
// //Access Message paragraph
// const msg=document.querySelector("#msg");

// //Access User score
// const userscorepara=document.querySelector("#user-score");
// const compscorepara=document.querySelector("#comp-score");

// //Function for computer choice (Function whenever we can call & for small work we can use this type of function)
// const gencomchoice= ()=>
// {

// //Rock/paper/scissor(Random) (Choices stored in array)
// const options = ["rock","paper","scissors"];
// //Math.random () (This funtion is is used get random string (class.method(or function)))
// //It wil(genarate (0,1 (random value) diffrent number will generate each time)
// //String we cant ganarate random but number we can (Thats why we treat array like index)
// // Math.random(); // Math.random()* 9 (10* any random number system will taken)5.566,9.4554
// const randIdx= Math.floor(Math.random() * 3);//To remove decimal(0-9 random number print)
// return options [randIdx];
// };

// //For (if (userchoice===computerchoice)) drow funnction
// const drowgame= () =>
// {
// // console.log("game was drow.");
// msg.innerHTML="Game was drow Try again";
// msg.style.backgroundColor="Yellow";
// }

// //  Winner function [Last]
//  const showWinner= (userWin,  userchoice, compchoice)   =>
//  {
//     if(userWin)
//     {
//         userscore++;
//         userscorepara.innerText=userscore;
//         // console.log("You Win");
//         msg.innerHTML="You win ! "
//         msg.style.backgroundColor="green";
//         msg.innerText=`you win  ${userchoice} beats ${compchoice}.`;
//         // msg.innerText=`You win!  your ${userchoice} beats  ${compchoice}`;
//     } 
//     else
//     {
//         computerscore++;
//         compscorepara.innerText=computerscore;
//         // console.log("You lose");
//         msg.innerHTML="You lose"
//         msg.style.backgroundColor="red";
//         //  msg.innerHTML=`you win  ${userchoice} beats ${compchoice}.`;
//     }
//  };



// //Function for user choice
//      const playGame=(userchoice)=>
//     {
//     console.log("user choice =",userchoice);
   
//      //Generate computer choice
//      const compchoice= gencomchoice(); //Return
//      console.log("comp choise =", compchoice);

// //  [Game condition]

//    if(userchoice===compchoice)  
//  {
//       drowgame(); //Call function

//  } 
//  else 
//  {
//     let userWin = true;
//     if(userchoice==="rock") //If (U=rock,C=paper (C-win)U-Scissors,C-paper (Uwin)
//        // C: paper//scissors
//      {
//       userWin=compchoice==="paper"? false:true;
//      }
//       else if (userchoice==="paper")
//       {
//           //C  : Scissors //rock
//      userWin=compchoice==="scissors" ? false: true;

//       }
//      else  (userchoice==="scissors")
//           //C: Rock//Paper
//       {
//      userWin=compchoice==="rock" ? false: true;
       
//     }
 
//      showWinner(userWin);


//     } 
// };

// //User
// //For each loop execute the each elemnet in the array
// choices.forEach((choice) =>
// {
// // console.log(choice);
// //To add event to choice class
// choice.addEventListener("click", ()=>
// {
// // console.log("choice  was clicked");

// //Access Id (Attribute (ID)[2]
// const userchoice =choice.getAttribute("id");
// console.log("choice rock was clicked",userchoice);
// playGame(userchoice); //Call user choice function


// });
    
// });
 //Userscore /computerscore

// let userscore = 0;
// let computerscore = 0;

// // Access Class [1]
// const choices = document.querySelectorAll(".choice");
// // Access Message paragraph
// const msg = document.querySelector("#msg");

// // Access User score
// const userscorepara = document.querySelector("#user-score");
// const compscorepara = document.querySelector("#comp-score");

// // Function for computer choice
//   const gencomchoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// // For (if (userchoice===computerchoice)) draw function
//   const drowgame = () => {
//   msg.innerHTML = "Game was draw. Try again!";
//   msg.style.backgroundColor = "yellow";
// };

// // Winner function [Last]
//     const showWinner = (userWin, userchoice, compchoice) => {
//     if (userWin) {
//     userscore++;
//     userscorepara.innerText = userscore;
//     msg.innerHTML = `You win! Your ${userchoice} beats ${compchoice}.`;
//     msg.style.backgroundColor = "green";
//   } else {
//     computerscore++;
//     compscorepara.innerText = computerscore;
//     msg.innerHTML = `You lose! ${compchoice} beats ${userchoice}.`;
//     msg.style.backgroundColor = "red";
//   }
// };

//   // Function for user choice
//   const playGame = (userchoice) => {
//   console.log("user choice =", userchoice);

//   // Generate computer choice
//   const compchoice = gencomchoice();
//   console.log("comp choice =", compchoice);

//   // [Game condition]
//   if (userchoice === compchoice) {
//     drowgame();
//   } else {
//     let userWin = true;
//     if (userchoice === "rock") {
//       userWin = compchoice === "paper" ? false : true;
//     } else if (userchoice === "paper") {
//       userWin = compchoice === "scissors" ? false : true;
//     } else if (userchoice === "scissors") {
//       userWin = compchoice === "rock" ? false : true;
//     }

//     showWinner(userWin, userchoice, compchoice);
//   }
// };

// // For each loop execute the each element in the array
//     choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//     const userchoice = choice.getAttribute("id");
//     playGame(userchoice);
//   });
// });




let userscore=0;
let computerscore = 0;

//Choice class access [1]

const choices=document.querySelectorAll(".choice");
// console.log(choices);


//Access Winner meassage should be print on the Paragraph msg[6]
const msgpara=document.querySelector("#msg");

//Access score (To upadate score )Get score id attribute [7]

const userScorepara=document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");


//Imp: For Small small work we should create a functions(Here :)

//First we genarate the random choice computer after we should update 

//Genarate random computer choice function [3] Moduler or reuseable functions
const genCompChoice= () =>
//rock , paper, scissors (Three options or choices (It should be store the array)
{
const options =["rock","paper","scissors"];
const randidx= Math.floor(Math.random() * 3);//Random  [Print on Index]
return options[randidx]; //Finally computer choice will [In options insiderndidx value will come ]
//And it will return the value and transfer to the play game
}

//Drow Function [4]
const drawGame= ()=>
{
    // console.log("Game wasdrow");
    msgpara.innerText="Game was draw ! Try again";
    msgpara.style.backgroundColor="081b31";

};

//Userwin function [6] /Message will print on the paragraph
const showWinner = (userwin,compChoice,userChoice)=>
{
 if(userwin)

{   userscore++;
    userScorepara.innerText=userscore; //[8] to update score on the screen
    // console.log("you win.!");
    msgpara.innerText=`You win..!! ${userChoice} beats ${compChoice}`; //[Who beats Who?]
    msgpara.style.backgroundColor="green";

}else
{
    computerscore++;
    compScorepara.innerText=computerscore;
    // console.log("you lose  ");
    msgpara.innerText=`You lose ..!! ${compChoice} beats ${userChoice}`;
    msgpara.style.backgroundColor="red";
}

}



// //Play game entire game play here ||computer win or User win  [2]
//user choice function
const playGame = (userChoice) => //play should understand  what is the user choice
{
 console.log("userchoice=",userChoice);
// Computer choice [3]
const compChoice = genCompChoice(); //Here return computer choice
console.log("compChoice=",compChoice);


//After fite who will win [4]
if(userChoice===compChoice) //Then drow
{
   drawGame();//Call draw game function [4]

} else 
{
let userwin = true ;  // [5]
if(userChoice==="rock")
    //Computer choice will be paper and scissors
{
  userwin=compChoice==="paper" ? false :true ; 
}
else if (userChoice==="paper")
{
//Computer choice will be scissors and rock
 userwin=compChoice==="scissors" ? false: true ;
}
else  //User inhand scissors
{
    //computer choice will be paper and rock
    userwin=compChoice==="rock" ? false : true;
}
    //Winner show [6] /Message will print on the paragraph
  showWinner(userwin, compChoice ,userChoice); //Call function [6]
}
};




//For each execute the element in the array [1]
choices.forEach((choice) =>
{
//    console.log("choice was clicked");
   //click event
   choice.addEventListener("click",() =>
   {
   //Access choice id attribute
   const userChoice= choice.getAttribute("id");
   playGame(userChoice);
   });
});



console.log(getComputedStyle(document.documentElement).fontSize);//Find root element
