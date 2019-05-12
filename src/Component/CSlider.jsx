import React from 'react';
import '../Style/SSlider.css';
import banner from "../assets/banner.png";

class CSlider extends React.Component {
    render() {
        return (
            <div className="slide">
            <img src={banner} alt="banner"></img>
            </div>
        );
    }
}
export default CSlider;