import React from 'react'
import Engine from './engine'
import SubmitBtn from './submitBtn'
import Image from './image'

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  };
     
  componentWillMount() {
    if(this.state.data.length === 0){
      fetch('http://localhost:3001/form')
      .then(response => response.json())
      .then(json => {
          this.setState({ 
            data: json
          });
      });
    }
    return (null);
  }
  render (){
    return(
      <div className='container'>
        <div className='hTitle'>{this.state.data.title}</div>
        <div className='hInfo'>
          <div className='username'>
            {this.state.data.userName}
          </div>
          
          <Image 
            src={require("./../images/profile6.jpg")}
            alt="Perfil"
          />
        </div>
        <div className='form'>
            <form> 
              <Engine 
                fields={this.state.data.fields}
              />
              <div className='btn-group'>
                <SubmitBtn
                  clsName="btn-el btn-rjt"
                  value="Reprovar"  
                />
                <SubmitBtn
                  clsName="btn-el btn-apv"
                  value="Aprovar"
                />
              </div>
            </form>
        </div>
      </div>
    )
  }
} 
  
export default Form