import React, { Component} from "react";
import close from './Images/close.png';


// class Header extends Component {
//     render () {
//         let classString;

//         if(this.props.visible){
//             classString ="post-job-link";
//         } else {
//             classString ="post-job-link";
//         }
    
//         return (
//             <div className="header">
//                 <div className="container">
//                     <a href="#" className={classString} onClick={this.props.onToggleForm.bind(this)}>Post Job</a>
//                 </div>
//             </div>
//         )
//     }
// }
const Header = ({keywords, removeKeywords, clearAll}) => {
    return (
        <div className="header-container">
            <ul>
                {keywords.map((key, id)=>{
                    return (
                        <li key={id}>
                            {key}
                            <button className="close" onClick={()=> removeKeywords(key)}>
                                <img src={close} alt="" />
                            </button>
                        </li>
                    );
                })}
                <a href="/#" onClick={() => clearAll()}>
                    Clear
                </a>
            </ul>
        </div>
    );
};

export default Header;