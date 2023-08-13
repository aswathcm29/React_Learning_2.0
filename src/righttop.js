import './right.css'
import logo from './logo.png'

function Righttop(){
    return(
        <div className='righttop'>
            <div className='righttoplogo'>
                <img src={logo} className='righttoplogoimg'/>
            </div>
            <div>
                <h3>VIRTUCARE BOT</h3>
            </div>
        </div>
    );
}

export default Righttop;