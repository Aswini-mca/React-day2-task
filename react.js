import React from "react";
import "style.css";
class App extends React.Component {
    render() {
        const priceCardData = {
            title: 'FREE',
            price: '$0/month',
            features: ['🗸 Single User', '🗸 50GB Storage', '🗸 Unlimited Public projects', '🗸 Community Access', '⨯ Unlimited Private Projects', '⨯ Dedicated phone Support', '⨯ Free Subdomain', '⨯ Monthly Status Report']
        };
        return (
            <div className="price-card">
                <h5>{priceCardData.title}</h5>
                <p className="card">{priceCardData.price}</p>
                <p className="f">{priceCardData.features}</p>
                <button>BUTTON</button>
            </div>
        );
    }
}
export default App;
















