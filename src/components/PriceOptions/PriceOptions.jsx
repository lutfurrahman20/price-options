import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          id: 1,
          optionName: "Basic",
          price: 29.99,
          features: [
            "Access to gym equipment",
            "Locker room access",
            "Open from 8 AM to 8 PM",
            "One free training session",
            "Free Wi-Fi",
            "Water station access",
            "Monthly fitness assessment",
            "10% discount on supplements"
          ]
        },
        {
          id: 2,
          optionName: "Standard",
          price: 49.99,
          features: [
            "Access to gym equipment",
            "Locker room and shower access",
            "Open from 6 AM to 10 PM",
            "Two free training sessions",
            "Access to group fitness classes",
            "Free Wi-Fi and charging stations",
            "Water station and smoothie bar access",
            "Bi-weekly fitness assessment",
            "15% discount on supplements and apparel",
            "Access to sauna and steam room"
          ]
        },
        {
          id: 3,
          optionName: "Premium",
          price: 79.99,
          features: [
            "24/7 access to gym",
            "Locker room, shower, and sauna access",
            "Unlimited personal training sessions",
            "Access to all group fitness classes",
            "Free nutritional advice",
            "Priority booking for equipment and classes",
            "Free towel service",
            "Private locker",
            "Monthly body composition analysis",
            "Exclusive access to VIP lounge",
            "20% discount on supplements, apparel, and spa treatments",
            "Free guest passes (5 per month)"
          ]
        }
      ];
      
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-4">Best prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id}
                option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;