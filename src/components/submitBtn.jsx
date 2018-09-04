import React from 'react'


class SubmitBtn extends React.Component {
    render(){
        return(
            <div className={this.props.clsName}>
                <input type="submit" value={this.props.value}/>
            </div>
        )
    }
}

export default SubmitBtn;