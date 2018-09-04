import React from 'react'


class InputText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            maxLength:0,
            visible:true,
            value: "",
        };
    }; 
    componentWillMount() {
        this.setState({
            maxLength: this.props.maxlength,
            visible: this.props.visible,
            value: this.props.value,
        });
        return(null);
    }
    render(){
        console.log(this.state.visible)
        return(
            <div className="fld-el" hidden={!this.state.visible}>
                <label name={this.props.label} >{this.props.label}</label>
                <input type="text" defaultValue={this.state.value} id={this.props.id} name={this.props.name} maxLength={this.state.maxlength}/>
            </div>
        )
    }
}

export default InputText;