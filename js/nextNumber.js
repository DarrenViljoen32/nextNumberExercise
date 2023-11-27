let myArray = [25, 50, 75, 100, 125, 150, 175];
let myIndex = -1;

function nextNumber(){
    myIndex ++;
    if(myIndex >= myArray.length){
        myIndex = 0;
    }
    document.getElementById(`display`).innerText = myArray[myIndex];
}