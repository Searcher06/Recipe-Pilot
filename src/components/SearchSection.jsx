function SearchSection({input,setInput,setRecipe,setLoading}){
  
  return (
    <>
    <section className="search-section">
            <h1>Your desired dish ?</h1>
            <div className="searchContainer">
                <input type="search" placeholder="Search recipe" value={input} onChange={(e)=>{setInput(e.target.value)}}
                />
                <button onClick={()=>{
                  setRecipe(input)
                  setInput("");
                  setLoading(true)
                }}><i className="fas fa-search"></i></button>
            </div>
            <p>search any recipe eg burger, pizza, sandwich </p>
    </section>
    </>
  )
}

export default SearchSection