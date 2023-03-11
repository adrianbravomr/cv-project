import React,{Component} from "react";
import "../styles/Section.css"

class Section extends Component{

  render(){
    const {params} = this.props;
    const {group,title,fields,handleChange} = params;

    return(
      <section className="section">
        <h1 className="section-title">{title}</h1>
        {
          Object.keys(fields).map(key=>{


            let input = fields[key];
            const type = input.type;

            console.log(key,fields[key],input);
  
            const Label = <label className="input-label" htmlFor={key}>{input.label}</label>;
  
            if (type==='textarea'){
  
              const Textarea = <textarea className="input-field" id={key} name={key} placeholder={input.label} value={input.value||''} onChange={(e) => handleChange(e,group,key,input)} rows='4'/>
  
              return (
                <div key={key} className='input'>
                  {Label}
                  {Textarea}
                </div>)
  
            } else if (type==='button'){
              return (<button key={key} className="button" onChange={(e) => handleChange(e,group,key,input)}>{input.label}</button>)          
            } else {
              let Input
              if(key==='photo'){
                Input = <input className="input-field" id={key} name={key} type={input.type} placeholder={input.label} onChange={(e) => handleChange(e,group,key,input)}/>             
              } else {
                Input = <input className="input-field" id={key} name={key} type={input.type} value={input.value} placeholder={input.label} onChange={(e) => handleChange(e,group,key,input)}/>
              }

              return (
                <div key={key} className='input'>
                  {Label}
                  {Input}
                </div>
                )
            }
          })
        }
      </section>
    );
  }
}

export default Section