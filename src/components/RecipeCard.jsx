import re1 from "../pics/re.jpg"
function RecipeCard() {
  return (
    <>
        <div className="recipe-card">
            <img src={re1} alt="" style={{
                width:"100%",height:"150px"
            }}/>
            <div className="recipe-name">
                {}
            </div>
            <div className="des">
            A rich and creamy curry made with tender chickpeas, tomatoes, and aromatic spices,
            {/* <button>Recipes</button>  */}
            </div>
            <div className="lower-des">
                <p>Vegetarian</p>
                <p><i className="fa fa-clock"></i> 20 mins</p>
            </div>
        </div>
    </>
  )
}

export default RecipeCard