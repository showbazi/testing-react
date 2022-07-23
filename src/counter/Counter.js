import React, { useEffect, useState } from 'react'

const Counter = ({initialCount}) => {

    const [count, setCount] = useState(initialCount);
    const [incrementor, setIncrementor] = useState(1);
    const [bigEnough, setBigEnough] = useState(false);

    const increment = () => {
        setTimeout(() => {
            setCount(count + incrementor);
        }, 200)
    }

    const decrement = () => {
        setCount(count - incrementor);
    }

    const reset = () => {
        setTimeout(() => {
            setCount(0);
        }, 500);
    }

    const switchSign = () => {
        setCount(count * -1);
    }

    useEffect(() => {
      let active = true;

      if(count >= 15){
        if(active){
            setTimeout(() => {
                setBigEnough(true)
            }, 200)
        }
      }
    
      return () => {
        // clearTimeout(id);
        active = false;
      }
    })
    

    return (
        <div>
            <h1>
                Count: <span>{count}</span>
            </h1>
            <label>
                Incrementor :
                <input type="number" value={incrementor} onChange={(e) => setIncrementor(parseInt(e.target.value) || 0)} />
            </label>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={switchSign}>Switch Sign</button>
            {bigEnough ? null : <h3>I am too small</h3>}
        </div>
    )
}

export default Counter