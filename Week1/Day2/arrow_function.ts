let F1 =  (a:number , b:number) => a+b;

let R = F1(10,20);
console.log("Sum = ",R);

/*
1. function is replaced by =>
2. there is an inplicit return , so, no need to use the word return
3. if there are more than 1 lines in the body of the function, then {} are mandatory. {} are can be omitted only if there is one statement in the body of the function
4. If {} are used, then there is no implicit return, so, use explicit return
5. 
*/