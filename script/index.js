const feedback = document.querySelectorAll('#container');
const feedbackOne = document.querySelector('.feedback-container');
const feedbackTwo = document.querySelector('.feedback-container-two');
const feedbackThree = document.querySelector('.feedback-container-three');


const arr = [feedbackOne,feedbackTwo,feedbackThree];
let i =-1;
// // arr.forEach();
// // console.log(arr);
setInterval(()=>{
    i++;
    console.log(i);
    if(i===3){
        i=-1;
    }
    // arr[i].style = 'transform:scale(1);';
    if(i===0){
    arr[0].style = 'transform:scale(1);';
    arr[1].style = 'transform:scale(0);';
    arr[2].style = 'transform:scale(0);';
    }else if(i===1){
        arr[0].style = 'transform:scale(0);';
        arr[1].style = 'transform:scale(1);';
        arr[2].style = 'transform:scale(0);';
    }else if(i===2){
        arr[0].style = 'transform:scale(0);';
        arr[1].style = 'transform:scale(0);';
        arr[2].style = 'transform:scale(1);';
    }
},3000);


