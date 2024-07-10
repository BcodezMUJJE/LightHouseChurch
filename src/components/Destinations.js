import Pyramid from "../assets/piramid.jpg"
import Desert from "../assets/desert.jpg"
import Egypt from "../assets/egypt.jpg"
import "./DestinationStyles.css"


const Destination = () =>{
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours offer a chance to explore numerous attractions within a set period.</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Pyramids of Giza</h2>
                    <p>The Great Pyramid, built for Pharaoh Khufu, originally stood at 146.6 meters but now is 138.8 meters tall. Constructed over 20 years around 2580–2560 BC, it used 2.3 million stone blocks. Aligned with incredible precision to the cardinal points, it is accurate to true north by 0.067 degrees. Skilled laborers, not slaves, built the pyramids, organized into efficient workforces. Materials included locally quarried limestone and granite from Aswan, 800 kilometers away. Serving as pharaohs' tombs, they were part of a complex with temples and mastaba tombs. The Great Sphinx, believed to represent Pharaoh Khafre, stands nearby. Though the outer casing stones were repurposed, the core structures remain intact. The pyramids' astronomical alignments reflect the Egyptians' advanced engineering and knowledge.</p>
                </div>
                <div className="image">
                    <img alt="img" src={Pyramid}/>
                    <img alt="img" src={Egypt}/>
                </div>
            </div>
        </div>
    )
}

export default Destination;