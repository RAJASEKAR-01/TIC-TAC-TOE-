const boxs=document.querySelectorAll('.box');
    const status=document.querySelector('#status');
    const btn=document.querySelector('button');
    let x=' <img src="x.png" >';
    let o='<img src="o.jpeg">';
    let xscore=0;
    let yscore=0;
    const win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let options=["","","","","","","","",""];
    let currentplayer=x;
    let player="x";
    let running=false;
    init();
    function init(){
        boxs.forEach(box=>box.addEventListener('click',boxclick));
        btn.addEventListener('click',restart);
        status.textContent=`${player} your turn `;
        running=true;
    }
    function boxclick(){
        const index=this.dataset.index;
        if(options[index]!="" || !running){
            return;
        }
        update(this,index);
        checkwinner();

    }
    function update(box , index){
        options[index]=player;
        box.innerHTML=currentplayer;

    }
    function change(){
        player=(player=='x')? "o":'x';
        currentplayer=(currentplayer==x)? o:x;
        status.textContent=`${player} your turn `;


    }
    function checkwinner(){

        let iswon=false;
        for(let i=0;i<win.length;i++){
            const condition=win[i];
            const box1=options[condition[0]];
            const box2=options[condition[1]];
            const box3=options[condition[2]];
            if(box1=="" || box2=="" || box3==""){
            continue;
             }
             if (box1==box2 && box2==box3){
            iswon=true;
            boxs[condition[0]].classList.add('win');
            boxs[condition[1]].classList.add('win');
            boxs[condition[2]].classList.add('win');

        }
        
        }
        
        if(iswon){
            status.textContent=`${player} won the Game`; 
            running=false;

            
        }
        else if(!options.includes("")){
            status.textContent="DRAW..";
            running=false;
        }
        else{
            change();
        }
    }
    function restart(){
     options=["","","","","","","","",""];
     currentplayer=x;
     player="x";
     running=true;
     status.textContent=`${player} your turn `;
     boxs.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
     })


    }