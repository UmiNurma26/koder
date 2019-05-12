import React from 'react';
import '../Style/SDeals.css';
import cloth from "../assets/kaos3.jpg";

class CDeals extends React.Component {
    render() {
        return (
            <div className="deals">
            <h6>Deals</h6>
            
            <div class="col-sm-8">
                <div className="card shadow bg-white item">
                    <img className="card-img-top" src={cloth}></img>
                    <div className="card-body">
                        <h6 className="card-title">Status : Paid</h6>
                        <h6 className="card-price">Rp.70.000</h6>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <div className="card shadow bg-white item">
                    <img className="card-img-top" src={cloth}></img>
                    <div className="card-body">
                        <h6 className="card-title">Status : Paid</h6>
                        <h6 className="card-price">Rp.70.000</h6>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default CDeals;