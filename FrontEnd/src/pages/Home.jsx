import React from "react"

const Home = () => {

    let display = "HOME PAGE"
    let companyName = "zephyr"

    let mernstack ="Difficult"

    const languages = ["html", "css", "php", "react", "node.js", "laravel"]


    return(
        <div>
    <h1>{display}</h1>
    <p>{companyName}</p>

    {/*ternary operator: */}
    {mernstack === "EASY" ? <h6>EASY</h6> :
    <h6>DIFFICULT</h6>}

    <ul>
        {languages.map((value, index) =>(
            <li key={index}>{value}</li>
        ))}
    </ul>



        </div>
    )
}

export default Home 