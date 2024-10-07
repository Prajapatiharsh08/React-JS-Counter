import React, { useState } from 'react'

export default function Counter() {

    const [count, setcount] = useState(0);

    // Counter Using SetInterval

    // function Inc() {
    //     setInterval(() => {
    //         setcount((count) => count + 1);
    //     }, 1000);
    // }


    // Counter Using Button
    function Inc() {
        setcount(count + 1);
    }

    function Dec() {
        setcount(count - 1);
    }

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={Inc}>Increase</button>&nbsp;
            <button onClick={Dec}>Decrease</button>
        </div>
    )
}
