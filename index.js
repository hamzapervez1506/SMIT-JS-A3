//Question 1

let twodArray=[[]];

//Question 2

let matrix=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
console.log(matrix)

//Question 3

for(i=1;i<=10;i++){
    console.log(i)
}

//Question 4

let mulnum=+prompt("Enter number of mul");
let mullength=+prompt("Enter length of table");
for(i=1;i<=mullength;i++){
    document.write(mulnum + "x"+i+"="+mulnum*i+"<br>");

}

//Question 5
document.write("Question 5<br>")
let fruits=["apple","banana","mango","orange","strawberry"];
for(i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

//Question 6

document.write("Question 6 <br>")
document.write("<b>Counting"+"<br></b>")
for(i=1;i<=15;i++){
    document.write(i+",")
}
document.write("<br><b>ReverseCounting"+"<br></b>")
for(i=10;i>=1;i--){
    document.write(i+",")
}

document.write("<br><b>Even"+"<br></b>")
for(i=0;i<=20;i+=2){
    document.write(i+",")
}
document.write("<br><b>Odd"+"<br></b>")
for(i=1;i<=20;i+=2){
    document.write(i+",")
}

document.write("<br><b>Even"+"<br></b>")
for(i=2;i<=20;i+=2){
    document.write(i+"k"+",")
}


//Question 7
document.write("<br>Question 7 <br>")
let A=["cake","apple pie","cookie","chips","patties"]
let search=prompt("What you want to order");
let isTrue=false;
for(i=0;i<A.length;i++){
    if(search==A[i]){
        isTrue=true;
        break;
    }
}

if(isTrue){
    document.write(search+" is available at index " +i)
}
else{
    document.write("not available")
}

//Question 8
document.write("<br>Question 8 <br>")
const array = [24, 53, 78, 91, 12];
let largest=array[0];

for(i=0;i<array.length;i++){
    if(array[i]>largest){
        largest=array[i]
    }
}
document.write(largest)

//Question 9
document.write("<br>Question 9 <br>")
let smallest=array[4];

for(i=0;i<array.length;i++){
    if(array[i]<largest){
        largest=array[i]
    }
}
document.write(largest)

//Question 10
document.write("<br>Question 10<br>")

for(i=5;i<=100;i+=5){
   document.write(i+",")
};