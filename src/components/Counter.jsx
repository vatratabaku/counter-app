import styles from './Counter.module.css'
import { useState } from "react";


export default function Counter(){
    const [number, setNumber] = useState(0);

    const increase = () =>{
       setNumber(number + 1);
    }
    const decrease = () =>{
        setNumber(number - 1);
    }
    const increaseByTen = () =>{
        setNumber(number + 10);
     }
     const decreaseByTen = () =>{
         setNumber(number - 10);
     }
  
    return(
       <>
        <div className={styles.card}>
        <h1 className={styles.number}>{number}</h1>
       <div className={styles.btnGroup}>
       <button className={styles.positive} onClick={() =>{
            increaseByTen()
          }}> +10 </button>
          <button className={styles.positive} onClick={() =>{
            increase()
          }}> + </button>    
           <button className={styles.reset} onClick={() =>{
            setNumber(0)
          }}>Reset</button>
          <button className={styles.negative} onClick={() =>{
            decrease()
          }}>-</button>
       
          <button className={styles.negative} onClick={() =>{
            decreaseByTen()
          }}>-10</button>
        </div>
       </div>
       </>
    
    )
}