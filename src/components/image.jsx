import React from 'react'


class Image extends React.Component {
    render(){
        return(
            <div className="img">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        )
    }
}

export default Image;