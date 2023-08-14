
import logo from './logo.png'
import './left.css';
import './Archive.otf';
function Left(){
    return(
        <div className="container">
            <div className="left-container">
                <img src={logo} className="logo" alt="logo"></img>
                <h1>Virtucare Bot</h1>
                <div className="descrip">
                <center>
                    <p>Instant AI Customer Assistance</p>
                    <p>24/7 support, efficient query resolution, and personalized solutions.</p>
                    <p>Simplifying customer interactions.</p>
                </center>
                </div>


            </div>

        </div>
    );
}

export default Left;