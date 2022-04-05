import "./MomentCards.css";
const MomentCards = () => {

    const momentCardImages =  [
        {
        img:"pic8",
        desc:"Every expert was once a beginner, We begins here..."
        },
    {
        img:"pic1",
        desc:"You will be transported to a different world, Once you entered to the auditorium."
    },{
        img:"pic5",
        desc:"Lighten the life, Illuminate the happiness, Make chocolaty every relation."
    },{
        img:"pic6",
        desc:"Creativity + Iterative Development = Innovation."
    },{
        img:"pic4",
        desc:"No matter what we do, We all strive for that experience."
    },{
        img:"pic12",
        desc:"Good times + Crazy friends = Great Memories!"
    }];

    return ( 
        <div className="moment_cards_container">
            {
                momentCardImages.map((momentCardImage,index)=>{
                    const imagepath = require(`../../images/Memories/${momentCardImage.img}.jpg`);
                    return(
                        <div key={index} className="moments_cards">
                            <img src={imagepath} alt={momentCardImage.img} />
                            <p>{momentCardImage.desc}</p>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default MomentCards;