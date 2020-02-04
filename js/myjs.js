var grade = prompt("what is your grade ?");
console.log(grade);
var att = prompt("what is your  attendance grade ?");
console.log(att);
var pro = prompt("what is your  professionalism grade?");
console.log(pro);
var result ;

if (att >= 90 && grade + pro >= 90   ) {     
    result = 'congrasulations you passed to 201 class! :)';   
} 
  
  
  
 else {     
    result = 'sorry you droped :(!';   
} 
console.log(result);

document.write('<h3>'+result+'</h3>');