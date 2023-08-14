
import logo from './logo.png'
import './left.css';
import './Archive.otf';
function Left(){
    return(
        <div className="container">
            <div className="left-container">
                <img src={logo} className="logo" alt="logo"></img>
                <h1>Virtucare Bot</h1>
                <h3>Instant AI Customer Assistance. 24/7 support, efficient query resolution, and personalized solutions. Simplifying customer interactions</h3>
            </div>
        </div>
    );
}

export default Left;