import "./TripStyles.css"
import TripData from "./TripData";
import Paris from "../assets/paris.jpg"
import Amazon from "../assets/amazon.jpg"
import Rome from "../assets/rome.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Traveling is a great way to relax and explore new places.</p>
            <div className="tripcard">
                <TripData
                image={Paris}
                heading="Paris - France"
                text="Paris, the capital of France, is a major European city renowned for its art, fashion, gastronomy, and culture. Its 19th-century cityscape is marked by landmarks like the Eiffel Tower and the Gothic Notre-Dame Cathedral. The city is also known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
                />
                <TripData
                    image={Amazon}
                    heading="Amazon Rainforest"
                    text="The Amazon Rainforest, spanning several South American countries, is the world's largest tropical rainforest, renowned for its biodiversity. It is home to countless species of flora and fauna, many of which are not found anywhere else on Earth. The Amazon River, one of the longest rivers in the world, flows through this dense forest, which plays a crucial role in regulating the global climate."
                />
                <TripData
                    image={Rome}
                    heading="Rome - Italy"
                    text="Rome, Italy's capital, boasts nearly 3,000 years of globally influential art, architecture, and culture. Ancient ruins such as the Roman Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, is also located in Rome, housing St. Peter’s Basilica and the Vatican Museums."
                />                
            </div>
        </div>
    )
}

export default Trip;