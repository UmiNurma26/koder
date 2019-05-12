import React from 'react';
import './Style/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="fixed-top bg-dark" id="navbar">
                    <div className="container">
                        <div className="row justify-content-center py-2">
                            <div className="col-md-12">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <div className="form-inline">
                                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                    {/* <ul className="nav justify-content-end list-additional">
                                        <li className="nav-item pl-1">
                                            <a>Home</a>
                                        </li>
                                    </ul> */}

                                    <div className="float-left">
                                    <ul className="navbar">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Department</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Acount</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Deals</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Registry</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Sell</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Helps</a>
                                        </div>
                                    </li>
                                </ul>
                                </div>

                                <div className="float-right">
                                <ul className="navbar">
                                    <li className="nav-item">
                                            <div className="nav-link">
                                                <a href="">Sign in</a>
                                            </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <a href="">Cart</a>
                                        </div>
                                    </li>
                                </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}
}
export default Header