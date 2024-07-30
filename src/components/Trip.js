import "./TripStyles.css"
import TripData from "./TripData";
import Paris from "../assets/praying.jpg"
import Amazon from "../assets/pray.jpg"
import Rome from "../assets/worship.jpg"
import Best from "../assets/afrigalPraise.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Our Events</h1>
            <p>At Lighthouse Grace Church, Here Are Some Of Yearly Events</p>
            <div className="tripcard">
                <TripData
                image={Paris}
                heading="Youth Experience"
                text="Attention, young people! Get ready for an exciting Youth Experience at Lighthouse Grace Church, Bulindo! Join us for a day filled with inspiring talks, engaging activities, and a chance to connect with peers who share your passion for faith and community. This is a perfect opportunity to grow spiritually and have fun while doing it. Don’t miss out on the excitement—bring your friends along!"
                />
                <TripData
                    image={Amazon}
                    heading="Married Fire Camp"
                    text="We warmly invite all married couples to join us for the Married Fire Camp at Lighthouse Grace Church, Bulindo. This event is designed to reignite the passion and love in your marriage through insightful teachings, fun activities, and meaningful connections with other couples. Come and experience a transformative weekend that will strengthen your bond and deepen your commitment to one another!"
                />
             <TripData
                    image={Rome}
                    heading="Children Service"
                    text="Parents, we invite you and your little ones to our vibrant Children’s Service at Lighthouse Grace Church, Bulindo! Our engaging program is designed to teach children about God’s love through fun activities, songs, and interactive lessons. It’s a safe and welcoming environment where your children can learn, grow, and make lasting friendships. We can’t wait to see the smiles on their faces!"
                />
             <TripData
                    image={Best}
                    heading="Leadership Convesion Bootcamp"
                    text="Calling all aspiring leaders! Join us for the Leadership Convention Bootcamp at Lighthouse Grace Church, Bulindo. This intensive program is crafted to equip you with essential leadership skills and biblical principles that will empower you to lead with confidence and integrity. Whether you’re a seasoned leader or just starting out, this bootcamp is for you. Don’t miss this opportunity to elevate your leadership journey!"
                />                   
            </div>
        </div>
    )
}

export default Trip;