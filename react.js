import React from "react";
import "style.css";
class App extends React.Component {
    render() {
        const priceCardData = [{
            title: 'FREE',
            price: '$0/month',
            features: ['🗸 Single User', '🗸 50GB Storage', '🗸 Unlimited Public projects', '🗸 Community Access', '⨯ Unlimited Private Projects', '⨯ Dedicated phone Support', '⨯ Free Subdomain', '⨯ Monthly Status Report'],
        },
        {
            title: 'PLUS',
            price: '$9/month',
            features: ['🗸 5 Users', '🗸 50GB Storage', '🗸 Unlimited Public projects', '🗸 Community Access', '🗸 Unlimited Private Projects', '🗸 Dedicated phone Support', '🗸 Free Subdomain', '⨯ Monthly Status Report'],
        },
        {
            title: 'PRO',
            price: '$49/month',
            features: ['🗸 Unlimited User', '🗸 50GB Storage', '🗸 Unlimited Public projects', '🗸 Community Access', '🗸 Unlimited Private Projects', '🗸 Dedicated phone Support', '🗸 Free Subdomain', '🗸 Monthly Status Report']
        }];
        return (
            <div className="price-card">
                <h1 class="container">React Price Card Task</h1>
                {priceCardData.map((card) => (
                    <Card title={card.title} price={card.price} features={card.features} />
                ))}
            </div>
        );
    }
}
export default App;

function Card({ title, price, features }) {
    return (
        <div className="head">
            <div className="card">
                <p class="text-center" id="tophead">{title}</p>
                <h2>{price}</h2>
                <hr />
                <div class="card-body">
                    <p class="card-text">{features[0]}</p>
                    <p class="card-text">{features[1]}</p>
                    <p class="card-text">{features[2]}</p>
                    <p class="card-text">{features[3]}</p>
                    <p class="card-text" id="cross">{features[4]}</p>
                    <p class="card-text" id="cross">{features[5]}</p>
                    <p class="card-text" id="cross">{features[6]}</p>
                    <p class="card-text" id="cross">{features[7]}</p>
                    <button className="btn">BUTTON</button>
                </div>
            </div>

        </div>
    );
}
















