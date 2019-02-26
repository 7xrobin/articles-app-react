import React from 'react';
import './title.css'

class Title extends React.Component{
    render(){
        return(
            <div className={'title-container'}>
                {this.props.text}
            </div>
        );
    }
}
export default Title;