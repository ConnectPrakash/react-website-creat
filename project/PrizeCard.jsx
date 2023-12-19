import React from 'react';

// import PropTypes from 'prop-types';

const PriceCard = ({ plan, price, features, rupees }) => {
    const Handler = () => {
        {
            alert("Subscripe button Clicked")
        }
    }
    return (
        <div className="price-card">
        

            <h5>{plan}</h5>
            <h6>{rupees}</h6>
            
            <div className="price">${price}</div>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="subscribe-button" onClick={Handler}>Subscribe</button>
        </div>
    );
};

// PriceCard.propTypes = {
//     plan: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     features: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default PriceCard;
