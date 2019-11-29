import React, {Component} from 'react';
//Higher order component HOC Which is used to render the component
export default function LoggerHoc(InputComponent)
{
  class LoggerComponent extends Component
  {
    componentDidMount()
    {
      console.log('component mounted');
    };
    render()
    {
    return(
      <div style={{backgroundColor:'green', padding:40}}>
      <InputComponent {...this.props}/>
      </div>
    );
      
    }
  }
  
    return LoggerComponent;
}