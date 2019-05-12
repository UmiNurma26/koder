import React from 'react';
import '../Style/SFooter.css';
import bank1 from '../assets/bank.png';
import bank2 from '../assets/mandiri.png';

class CFooter extends React.Component {
    render() {
        return (
            <footer className="dekstop-footer bg-dark">
                <div className="container footer-dekstop-view">
                    <div className="row">
                        <div className="col-md-3">
                            <h6>About</h6>
                            <p>
                            Distro umumnya merupakan industri kecil dan menengah (IKM) 
                            Konsep distro berawal pada pertengahan 1990-an di Bandung.
                            </p>                            
                        </div>

                        <div className="col-md-3">
                            <h6>Jobs</h6>
                            <p className="jobs">
                                <ul>
                                    <li><a>Recruitment</a></li>
                                    <li><a>Internship</a></li>
                                    <li><a>parttime</a></li>
                                </ul>                                
                            </p>
                        </div>

                        <div className="col-md-3">
                            <h6>Payment</h6>
                            <div className="row">
                                <div className="col-12">
                                    <img src={bank1}></img>
                                    <img src={bank2}></img>
                                </div>
                                <div className="col-12">
                                    <img src={bank2}></img>
                                    <img src={bank1}></img>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h6>Product</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, error aliquam alias quibusdam labore quia, neque modi
                                ipsum et rem optio iste unde magni officia accusamus suscipit eaque, incidunt eligendi.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default CFooter;