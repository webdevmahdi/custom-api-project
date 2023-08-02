import React from 'react'

function division(first, second) {

  return (
    <div><h2>{first / second}</h2></div>
  )
}

let minus = (first, second) =>{
    return(
        <div>
            <h2>
                {first - second}
            </h2>
        </div>
    )
}
export {division, minus};