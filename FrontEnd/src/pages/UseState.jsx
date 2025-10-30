import { useEffect, useState } from "react"

const UseState = () => {
    //variable, funtion               //initlization
    const [count,setCount] = useState(0)
    const [name, setName] = useState('')

    // function DisplayCount(){
        // setCount(count + 1)
    // }


    //useEffect : side Effecct
    useEffect(()=> (
        console.log('button clicked')
    ), [count]) //[] : dependency array


    return (
        <div> 
            <h6>{name}</h6>

    <p>count clicked :{count} times</p>
    <button onClick={() => setCount(count +1)}>click this button</button>

    <br />

    {/* e : event */}
    <input type="text" placeholder='thamseer' onChange={(e)=> setName(e.target.value)}/>

        </div>
    )
}
export default UseState