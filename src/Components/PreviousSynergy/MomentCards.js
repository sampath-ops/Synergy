import "./MomentCards.css";
const MomentCards = () => {

    const momentCardImages =  ["pic5","pic4","pic6","pic11","pic3"];


    return ( 
        <div className="moment_cards_container">
            {
                momentCardImages.map((image,index)=>{
                    const imagepath = require(`../../images/Memories/${image}.jpg`);
                    return(
                        <div key={index} className="moments_cards">
                            <img src={imagepath} alt={image} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, laborum.</p>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default MomentCards;