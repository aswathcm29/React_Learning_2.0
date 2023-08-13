
import logo from './logo.png'
import './left.css';
function Left(){
    return(
        <div className="container">
            <div className="img">
                <img src={logo} className="logo" alt="logo"></img>
            </div>
            <div className="description">
                <h1>Virtucare</h1>
            </div>
        </div>
    );
}

export default Left;