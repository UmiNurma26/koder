import React from 'react';
import '../Style/SPopular.css';
import MatahariStore from "../assets/matahari.png";

class CPopular extends React.Component {
    render() {
        return (
            <div className="popular">
                <h6>Popular Departments</h6>
                <div className="store">
                    <div className="dep matahari"></div>
                    <div className="dep lotte"></div>	
                    <div className="dep metro"></div>	
                    <div className="dep plura"></div>	
                    <div className="dep century"></div>	
                    <div className="dep vale"></div>	
                </div>			        
            </div>
            
        )
    }
}
export default CPopular;