let user=0;
let comp=0;
let id = document.querySelectorAll(".choice");
let head = document.querySelector("#head");
let tail = document.querySelector("#tail");
let choice = document.querySelector(".choice");
let win = document.querySelector("#txt");
let btn = document.querySelectorAll(".battle");
let bat = document.querySelector("#bat");
let ball = document.querySelector("#ball");
let m = document.querySelector("#m");
let m2 = document.querySelector("#m2");
let box = document.querySelectorAll(".box");
let u = document.querySelector("#user");
let c = document.querySelector("#comp");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let s4 = document.querySelector("#s4");
let s5 = document.querySelector("#s5");
let s6 = document.querySelector("#s6");
let s7 = document.querySelector("#s7");
let s8 = document.querySelector("#s8");
let s9 = document.querySelector("#s9");
let s10 = document.querySelector("#s10");
let pu = "";
let winn = document.querySelector("#win");
let lose = document.querySelector("#lose");
let f1 = document.querySelector("#f1");
const compchoice = () => {
    const c = ["head","tail"];
    const ht = Math.floor(Math.random()*2);
    console.log(c[ht]);
    return c[ht];
};
let cc = compchoice();
let h = head.addEventListener("click",()=>{
    head.classList.add("hover");
    console.log("Your choice - HEAD!");
    if(cc==="head"){
        console.log("You Won!");
        m.innerText = "You Won!"
        win.innerText = "CHOOSE";
    } else {
        console.log("You Lost!");
        m.innerText = "You Lost!"
        win.innerText = "I choose Batting!";
        bat.classList.add("hide");
        ball.classList.add("hide");
    }
    chooseOp();
    showc();
    
});
let t = tail.addEventListener("click",()=>{
    tail.classList.add("hover");
    console.log("Your choice - TAIL!");
    if(cc==="tail"){
        console.log("You Won!");
        m.innerText = "You Won!"
        win.innerText = "CHOOSE";
    } else {
        console.log("You Lost!");
        m.innerText = "You Lost!"
        win.innerText = "I choose Batting!";
        bat.classList.add("hide");
        ball.classList.add("hide");
    }
    chooseOp();
    showc();
    
});
const chooseOp=()=>{
    bat.addEventListener("click",()=>{
        bat.classList.remove("hide");
        ball.classList.remove("hide");
        bat.classList.add("hover");
        console.log("You Chose Batting!");
        m2.innerText="You Chose Batting!";
        pu = "bat";
    });
    ball.addEventListener("click",()=>{
        bat.classList.remove("hide");
        ball.classList.remove("hide");
        ball.classList.add("hover");
        console.log("You chose Balling!");
        m2.innerText="You Chose Balling!";
        pu = "ball";
    });
}; 
const score=()=>{
    s = [1,2,3,4,5,6,7,8,9,10];
    const sc = Math.floor(Math.random()*10);
    console.log(s[sc]);
    return s[sc];
};

let scr = score();
const final=()=>{
    if(user>=100){
        winn.style.marginTop="20%";
        lose.classList.add("hide");
        showf();
    }else if(comp>=100){
        lose.style.marginTop="20%";
        winn.classList.add("hide");
        showf();
    }
};
const click=()=>{
    s1.addEventListener("click",()=>{
        console.log("1");
        scr = score();
        if(scr != 1){
            if(pu === "bat"){
                user++;
                u.innerText=user;
            }else{
                comp++;
                c.innerText=comp;
            }
        }else if(scr === 1){
            if(pu === "bat"){
                comp++;
                c.innerText=comp;
                user.disabled = true;
            }else{
                user++
                u.innerText=user;
                comp.disabled = true;
            }
        }
        final();
    });
    s2.addEventListener("click",()=>{
        console.log("2");
        scr = score();
        if(scr != 2){
            if(pu === "bat"){
                user = user+2;
                u.innerText=user;
            }else{
                comp=comp+2;
                c.innerText=comp;
            }
        }else if(scr === 2){
            if(pu === "bat"){
                comp+=2;
                c.innerText=comp;
            }else{
                user+=2;
                u.innerText=user;
            }
        }
        final();
    });
    s3.addEventListener("click",()=>{
        console.log("3");
        scr = score();
        if(scr != 3){
            if(pu === "bat"){
                user = user+3;
                u.innerText=user;
            }else{
                comp=comp+3;
                c.innerText=comp;
            }
        }else if(scr === 3){
            if(pu === "bat"){
                comp+=3;
                c.innerText=comp;
            }else{
                user+=3;
                u.innerText=user;
            }
        }
        final();
    });
    s4.addEventListener("click",()=>{
        console.log("4");
        scr = score();
        if(scr != 4){
            if(pu === "bat"){
                user = user+4;
                u.innerText=user;
            }else{
                comp=comp+4;
                c.innerText=comp;
            }
        }else if(scr === 4){
            if(pu === "bat"){
                comp+=4;
                c.innerText=comp;
            }else{
                user+=4;
                u.innerText=user;
            }
        }
        final();
    });
    s5.addEventListener("click",()=>{
        console.log("5");
        scr = score();
        if(scr != 5){
            if(pu === "bat"){
                user = user+5;
                u.innerText=user;
            }else{
                comp=comp+5;
                c.innerText=comp;
            }
        }else if(scr === 5){
            if(pu === "bat"){
                comp+=5;
                c.innerText=comp;
            }else{
                user+=5;
                u.innerText=user;
            }
        }
        final();
    });
    s6.addEventListener("click",()=>{
        console.log("6");
        scr = score();
        if(scr != 6){
            if(pu === "bat"){
                user = user+6;
                u.innerText=user;
            }else{
                comp=comp+6;
                c.innerText=comp;
            }
        }else if(scr === 6){
            if(pu === "bat"){
                comp+=6;
                c.innerText=comp;
            }else{
                user+=6;
                u.innerText=user;
            }
        }
        final();
    });
    s7.addEventListener("click",()=>{
        console.log("7");
        scr = score();
        if(scr != 7){
            if(pu === "bat"){
                user = user+7;
                u.innerText=user;
            }else{
                comp=comp+7;
                c.innerText=comp;
            }
        }else if(scr === 7){
            if(pu === "bat"){
                comp+=7;
                c.innerText=comp;
            }else{
                user+=7;
                u.innerText=user;
            }
        }
        final();
    });
    s8.addEventListener("click",()=>{
        console.log("8");
        scr = score();
        if(scr != 8){
            if(pu === "bat"){
                user = user+8;
                u.innerText=user;
            }else{
                comp=comp+8;
                c.innerText=comp;
            }
        }else if(scr === 8){
            if(pu === "bat"){
                comp+=8;
                c.innerText=comp;
            }else{
                user+=8;
                u.innerText=user;
            }
        }
        final();
    });
    s9.addEventListener("click",()=>{
        console.log("9");
        scr = score();
        if(scr != 9){
            if(pu === "bat"){
                user = user+9;
                u.innerText=user;
            }else{
                comp=comp+9;
                c.innerText=comp;
            }
        }else if(scr === 9){
            if(pu === "bat"){
                comp+=9;
                c.innerText=comp;
            }else{
                user+=9;
                u.innerText=user;
            }
        }
        final();
    });
    s10.addEventListener("click",()=>{
        console.log("10");
        scr = score();
        if(scr != 10){
            if(pu === "bat"){
                user = user+10;
                u.innerText=user;
            }else{
                comp=comp+10;
                c.innerText=comp;
            }
        }else if(scr === 10){
            if(pu === "bat"){
                comp+=10;
                c.innerText=comp;
            }else{
                user+=10;
                u.innerText=user;
            }
        }
        final();
    });
};
let clk = click();
const showc=()=>{
    let ss = document.querySelector("#brk");
    ss.style.display="block";
    setTimeout(showp,5000);
}
const showp=()=>{
    let ss = document.querySelector("#play");
    ss.style.display="block";
}
const showf=()=>{
    let ss = document.querySelector("#final");
    ss.style.display="block";
   
}