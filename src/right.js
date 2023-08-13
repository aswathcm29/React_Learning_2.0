import './right.css'
import Righttop from './righttop.js'
import Rightchatarea from './righttextarea.js'
import Textview from './textview.js'

function Right(){
    return(
        <div className="right">
            <Righttop/>
            <Textview/>
            <Rightchatarea/>
        </div>
    );
}
export default Right;