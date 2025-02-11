import re2 from "../pics/re2.jpg"
function TopRecipeCard() {
  return (
    <>
         <div className="recipe-card">
             <img src={re2} alt="" style={{
                 width:"100%",height:"150px"
             }}/>
             <div className="recipe-name">
                 Spicy chickpea curry
             </div>
             <div className="des">
             A rich and creamy curry made with tender chickpeas, tomatoes, and aromatic spices,
             </div>
             <div className="lower-des">
                 <p>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </p>
                 <p><i className="fa fa-clock"></i> 20 mins</p>
             </div>
         </div>
    </>
  )
}

export default TopRecipeCard