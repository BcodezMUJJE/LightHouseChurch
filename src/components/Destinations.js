import Pyramid from "../assets/praying.jpg";
import Egypt from "../assets/pray.jpg";
import Everest from "../assets/hands.jpg"
import Everest2 from "../assets/worship.jpg"
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";


const Destination = () =>{
    return (
        <div className="destination">
            <h1>Church Programs</h1>
            <p>Here Are Some Of Our Weekly Church Program</p>

            <DestinationData 
            className="first-des"
            heading="Sunday Services"
            text="Join Us for Sunday Services!
We warmly invite you to be part of our Sunday services at Lighthouse Grace Church, Bulindo. Come and experience uplifting worship, inspiring teachings, and a loving community. We look forward to seeing you there!" 
            img1={Pyramid}
            img2={Egypt}
            />
            <DestinationData 
            className="first-des-reverse"
            heading="Tuesday and Friday Prayer Altar:"
            text="Join Us for Prayer Altar on Tuesdays and Fridays!
We invite you to our Prayer Altar sessions every Tuesday and Friday at Lighthouse Grace Church, Bulindo. Come together with us for powerful prayer, spiritual growth, and communal support. Let’s unite in faith and strengthen our connection through prayer." 
            img1={Everest}
            img2={Everest2}
            />
        </div>
        
    )
}

export default Destination;