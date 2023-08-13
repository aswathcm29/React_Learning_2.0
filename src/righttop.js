import './right.css'
import logo from './logo.png'

RightTop = ()=>{
    return(
        <div className='righttop'>
            <div className='righttoplogo'>
                <img src={logo}/>
            </div>
            <div>
                <h3>VIRTUCARE BOT</h3>
            </div>
        </div>
    );
}

export default RightTop