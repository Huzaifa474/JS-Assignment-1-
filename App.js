// Question No 1 //

let a,b
a=parseInt(prompt("Enter No 1"))
b=parseInt(prompt("Enter No 2"))
if(a>b){
    console.log(a,"is larger than",b)
}else
console.log(b,"is larger than",a)

// Question no 2

let c=parseInt(prompt("Enter Number"))
if(c>0){
    console.log("Sign is +")
}else{
    console.log("Sign is -")
}

// Question no 3 

let no1,no2,no3,no4,no5
no1=parseInt(prompt("Enter No 1 "))
no2=parseInt(prompt("Enter No 2 "))
no3=parseInt(prompt("Enter No 3 "))
no4=parseInt(prompt("Enter No 4 "))
no5=parseInt(prompt("Enter No 5 "))

console.log("no1 is ",no1)
console.log("no2 is ",no2)
console.log("no3 is ",no3)
console.log("no4 is ",no4)
console.log("no5 is ",no5)

if(no1>no2 && no1>no3 && no1>no4 && no1>no5){
    console.log(no1,"is greator")
}
else if(no2>no1 && no2>no3 && no2>no4 && no2>no5){
    console.log(no2,"is greator")
}
else if(no3>no1 && no3>no2 && no3>no4 && no3>no5){
    console.log(no3,"is greator")
}
else if(no4>no1 && no4>no2 && no4>no3 && no4>no5){
    console.log(no4,"is greator")
}
else{
    console.log(no5,"is greator")
}

// Question no 4 // 

 let i
 for(i=0;i<=15;i++){
    if(i%2==0){
        console.log(i," IS EVEN")
    }else{
        console.log(i," IS ODD")
    }
 }

//  Question no 5 //

let marks=parseInt(prompt("Enter marks"))
if(marks<=100 && marks>=90){
    console.log("A GRADE")
}
else if(marks>=80 && marks<90){
    console.log("B GRADE")
}
else if(marks>=70 && marks<80){
    console.log("C GRADE")
}
else if(marks>=60 && marks<70){
    console.log("D GRADE")
}
else
console.log("F GRADE")

// Question no 6 // 

let j
for(j=1;j<=100;j++){
    if(j%3==0 && j%5==0){
        console.log("FizzBuzz")
    }
    else if(j%3==0){
        console.log("Fizz")
    }
    else if(j%5==0){
        console.log("Buzz")
    }
    else{
        console.log(j)
    }
}

// Question no 7 //
let k,l
let str=""
for(k=0;k<5;k++){
    for(l=0;l<=k;l++){
        str=str+"*"
    }
    str=str+"\n"
}
console.log(str)