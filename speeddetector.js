//prompting the user to input the speed 
const prompt=require("prompt-sync")({siginit:true});
let speed = prompt("Please enter your speed ","speed" );
//calculate the demerit points
let points=(speed-70)/5;
//convert the inputed string to integers
 speed=parseInt(speed); 
 //use a function containing an if else statement to output the correct expectation
 function correctOutput(){
 if(speed>=0 && speed<=70){
    console.log("Ok");
}else if(speed>70 && points<=12){
    
    console.log("Demerit points: " +points);
}else if(speed>70 && points>12){
    console.log("License Suspended!");

}
 }
 correctOutput(speed);
    


