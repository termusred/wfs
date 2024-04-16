import "../styles/section.css"
import { useState } from "react"

const Section = () => {
  const [count , setCount] = useState(1)
  function Search() {
    setCount(count + 1)
  }
    return (
        <div class="MainPage">
      <div class="search-holder">
        <input type="search" placeholder={count} id="searchBar"/>
        <button type="button" class="btn btn-primary" onClick={Search}>Search</button>
        <button type="button" class="btn btn-primary">Clear</button>
      </div>
      <div class="LaptopsPlace" id="LaptopsPlace"></div>
    </div>
    )
}

export default Section