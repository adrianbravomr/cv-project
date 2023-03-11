import React,{Component} from "react";

class Input extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {id,label,type,value,src,readonly,disabled,autofocus} = this.props;
    return(
      <input></input>
    );
  }
}