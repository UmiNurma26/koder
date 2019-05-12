import React from 'react';
import '../Style/SWelcome.css';
import user from '../assets/user2.png';

class CWelcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <img src={user}></img>
                <h5>Welcome !</h5>
                    <div className="col-12">
                        <button className="btn btn-sm btn-custom">Sign in</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-sm btn-custom2">Create account</button>
                    </div>
            </div>
        );
    }
}
export default CWelcome;