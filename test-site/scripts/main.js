let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/OIP.jpg'){
        myImage.setAttribute('src','images/OIP2.jpg');
    }else{
        myImage.setAttribute('src','images/firefox11.jpg');
    }

}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('请输入你的名字。');
    if(!myName || myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla酷逼了，'+myName;
    }

    
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla酷逼了，'+storedName;
}
myButton.onclick=function(){
    setUserName();
}