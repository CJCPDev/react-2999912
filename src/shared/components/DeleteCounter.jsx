/* Hook useState */

import { useState } from "react"

export default function DeleteCounter(){

    // state Es el valor actual del estado
    // setState es la funcion para actualizar
    // useState() es el valor inicial

    const [count,setCount] = useState(0);



    return(
        <div>

            <button onClick={() => setCount(count + 1) }>Incremental</button>
            <p>Counter:{count}</p>

        </div>
    )
}