import React, { useRef, useState } from 'react'
import "./game.css"
const Game = () => {
    let [data,setData] = useState(["","","","","","","","",""]);
    let [count,setCount] = useState(0);
    const [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    let box0 = useRef()
    let box1 = useRef()
    let box2 = useRef()
    let box3 = useRef()
    let box4 = useRef()
    let box5 = useRef()
    let box6 = useRef()
    let box7 = useRef()
    let box8 = useRef()
    let boxes = [box0 , box1 ,box2 , box3 , box4 , box5 , box6 , box7, box8]

   const reset = () =>{
     setLock(false)
     setData(["","","","","","","","",""])
     setCount(0);
     titleRef.current.innerHTML = `TicTacToe game in <span>React</span>`
     boxes.map((e)=>{
        e.current.innerHTML = "";
     })
     
   }


    const toggle = (e,num) =>{
          if(lock)
             return 0;
          if(count%2 === 0){
             e.target.innerHTML = `<img src="https://th.bing.com/th/id/OIP.ky8mpyuUkyH8ZkOE98NRFgAAAA?rs=1&pid=ImgDetMain" alt="cross" />`
             data[num] = "x";
             console.log(data)
             setCount(++count);
          }
          else{
            e.target.innerHTML = `<img src="https://th.bing.com/th/id/OIP.ZiUyiaAsZ9DLah2OCmiihAAAAA?w=300&h=300&rs=1&pid=ImgDetMain" alt="O" />`
            data[num] = "o"
            setCount(++count)
          }
          checkWin();
    }
    const checkWin =()=>{
        if(data[0]===data[1] && data[1]===data[2]&& data[2]!=="")
            {won(data[2])}
        else if(data[3]===data[4] && data[4]===data[5]&& data[5]!=="")
           {won(data[5])}
        else if(data[6]===data[7] && data[7]===data[8]&& data[8]!=="")
           {won(data[8])}
        else if(data[0]===data[3] && data[3]===data[6]&& data[6]!=="")
           {won(data[6])} 
        else if(data[1]===data[4] && data[4]===data[7]&& data[7]!=="")
           {won(data[7])}
        else if(data[0]===data[4] && data[4]===data[8]&& data[8]!=="")
           {won(data[8])} 
        else if(data[2]===data[4] && data[4]===data[6]&& data[6]!=="")
           {won(data[6])}
    }

    const won = (winner) =>{
          setLock(true);
          if(winner==="x"){
            titleRef.current.innerHTML = `Congrats ! X Wins`
          }
          else{
            titleRef.current.innerHTML = `Congrats ! O Wins`
          }
             
    }
  return (
    <div>
      <div className="container">
        <h1 className="head" ref={titleRef}>TicTacToe game in <span> React</span></h1>
        <div className="board">
             <div className="row-1">
                <div className="boxes" ref={box0} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="boxes" ref={box1}  onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" ref={box2}  onClick={(e)=>{toggle(e,2)}}></div>
             </div>
             <div className="row-2">
                <div className="boxes"  ref={box3} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,5)}}></div>
             </div>
             <div className="row-3">
                <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,8)}}></div>
             </div>
        </div>
        <button className="reset"onClick={()=>{reset()}} >Reset</button>
      </div>
    </div>
  )
}

export default Game;
