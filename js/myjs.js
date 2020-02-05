// var grade = parseInt(prompt("what is your grade ?"));
// console.log(grade);
// var att = prompt("what is your  attendance grade ?");
// console.log(att);
// var pro = parseInt(prompt("what is your  professionalism grade?"));
// console.log(pro);
// console.log(pro+grade);



function candivide4 ( ){
    var N4 =prompt("type a Num can be divided at 4") ;
    var result;
    
    if (N4 % 4 === 0) {     
        result =  N4+' is correct';   
    } 
    
      
     else {     
        while(N4 %4 !== 0){
            N4= prompt("type a correct value") ;
        }
        result =  N4+' is correct'; 
    } 
   return result; 

}
var birds = prompt("how many birds do you want?");
var pic = "";
function callbirds ( ){
    for(var i = 0; i < birds; i = i+1){
        pic = pic + '<img scr="pic/Annotation 2020-02-03 210312.png">';
    } 
    return pic;
}


