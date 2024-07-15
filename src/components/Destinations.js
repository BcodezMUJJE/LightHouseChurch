import Pyramid from "../assets/piramid.jpg";
import Egypt from "../assets/egypt.jpg";
import Everest from "../assets/Everest.jpg"
import Everest2 from "../assets/mountain.jpg"
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";


const Destination = () =>{
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours offer a chance to explore numerous 
                attractions within a set period.</p>

            <DestinationData 
            className="first-des"
            heading="Pyramids of Giza"
            text="The Great Pyramid, built for Pharaoh Khufu, originally stood at 146.6 meters but now is 138.8 meters tall. Constructed over 20 years around 2580–2560 BC, it used 2.3 million stone blocks. Aligned with incredible precision to the cardinal points, it is accurate to true north by 0.067 degrees. Skilled laborers, not slaves, built the pyramids, organized into efficient workforces. Materials included locally quarried limestone and granite from Aswan, 800 kilometers away. Serving as pharaohs' tombs, they were part of a complex with temples and mastaba tombs. The Great Sphinx, believed to represent Pharaoh Khafre, stands nearby. Though the outer casing stones were repurposed, the core structures remain intact. The pyramids' astronomical alignments reflect the Egyptians' advanced engineering and knowledge." 
            img1={Pyramid}
            img2={Egypt}
            />
            <DestinationData 
            className="first-des-reverse"
            heading="Mountain Everest"
            text="Mount Everest, the world’s highest peak, stands at 8,848.86 meters (29,031.7 feet) above sea level, located in the Himalayas on the border of Nepal and China. First summited by Sir Edmund Hillary and Tenzing Norgay in 1953, it has since become a premier destination for climbers. Despite its allure, Everest poses significant challenges including extreme altitude, severe weather, and the perilous Khumbu Icefall. The mountain is also known for its “death zone” above 8,000 meters, where oxygen levels are critically low." 
            img1={Everest}
            img2={Everest2}
            />
        </div>
        
    )
}

export default Destination;