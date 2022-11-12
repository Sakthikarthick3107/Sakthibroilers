const date=()=>{
    const ls=document.querySelector("#date");
    let today=new Date();
    let date=today.getDate();
    let mon=today.getMonth()+1;
    let yr=today.getFullYear();
    let dat=`${date}/${mon}/${yr}`;
    ls.innerText=dat;
};
date();