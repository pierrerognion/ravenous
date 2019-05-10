import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// TODO: Update the Business list with a map function

class BusinessList extends React.Component {
    render() {
        return ( <div className = "BusinessList" > 
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            </div>
        )
    }
}

export default BusinessList;