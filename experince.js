const experience=()=>{
    const ex=document.querySelector("#exp");
    let start=1991;
    let today=new Date();
    let yr=today.getFullYear();
    let yrs=yr-start;
    ex.innerText=yrs;
};
experience();