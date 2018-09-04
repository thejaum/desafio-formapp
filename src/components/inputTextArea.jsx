import React from 'react'


class InputTextArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            maxLength:0,
            rows:0,
            cols:0,
            visible:true,
            value: "",
        };
    }; 
    componentWillMount() {
        this.setState({
            maxLength: this.props.maxlength,
            visible: this.props.visible,
            rows: this.props.rows,
            cols: this.props.cols,
            value: this.props.value,
        });
        return(null);
    }
    render(){
        console.log(this.state.visible)
        return(
            <div className="fld-el" hidden={!this.state.visible}>
                <label name={this.props.label} >{this.props.label}</label>
                <textarea defaultValue={this.state.value} id={this.props.id} name={this.props.name} maxLength={this.state.maxlength} rows={this.state.rows} cols={this.state.cols}/>
            </div>
        )
    }
}

export default InputTextArea;