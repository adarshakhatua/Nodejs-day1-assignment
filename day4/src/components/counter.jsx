import { useEffect, useState } from "react";
const Counter = () => {
    const [counter, setCounter] = useState(20);
    useEffect(() => {
        const id=setInterval(() => { 
            setCounter((prev) => {
                if (prev <= 0) {
                    clearInterval(id)
                    return 0
                }
                return prev - 1
            });
        }, 1000)
      }, [])
    return <div>
        <h1>Counter:{counter}</h1>
    </div>
}

export {Counter};