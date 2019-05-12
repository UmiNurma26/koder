import React from 'react';
import '../Style/SClothing.css';
import banner from "../assets/banner.png";
import cloth from "../assets/kaos3.jpg";

class CClothing extends React.Component {
    render() {
        return (
            <div className="clothing">
                <h6>Clothing</h6>
                <div className="row">
                <div className="col-sm-12">
                    <div className="card shadow bg-white item">
                        <img className="card-img-top" src={cloth}></img>
                        <div className="card-body">
                        <h6 className="card-title">Nevada milkyweee design</h6>
                        <p>Premium design specialy for you. Minimal order 50pcs </p>
                        <button className="btn btn-sm btn-custom">Detail</button>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}
export default CClothing;