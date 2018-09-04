import React from 'react'
import InputText from './inputText'
import InputTextArea from './inputTextArea'

class Engine extends React.Component {

    render () {
        const fields = this.props.fields;
        console.log(fields);
        if(this.props.fields === undefined){
            return(null);
        }
        return ( 
            <div className="fld-group">
                {
                    this.props.fields.map(i =>{
                        switch(i.type){
                            case "TEXT":{
                                console.log('TEXT');
                                return (
                                    <InputText
                                        key={i.id}
                                        id={i.id}
                                        name={i.name}
                                        label={i.label} 
                                        maxlength={i.maxLength}
                                        visible={i.visible}
                                        value={i.value}
                                    />
                                )
                            }
                            case "TEXTAREA":{
                                console.log('TEXTAREA');
                                return(
                                    <InputTextArea
                                        key={i.id}
                                        id={i.id}
                                        name={i.name}
                                        label={i.label} 
                                        maxlength={i.maxLength}
                                        rows={i.rows}
                                        cols={i.cols}
                                        visible={i.visible}
                                        value={i.value}
                                    />
                                )
                            }
                            default:{
                                return(null)
                            }
                        }
                    })
                }
            </div>   
        )
    }
}


export default Engine;