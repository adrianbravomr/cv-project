import React from "react";
import "../styles/Section.css"

const SectionList = (props) => {

    const {inputs,group,title,fields,handleChange} = props.params;

    const list = inputs.list;

    const DeleteButton = <button key="delete" className="button" id={group+"-del"} onClick={(e) => handleChange(e,group)}>Delete</button>;
    const AddButton = <button key="add" className="button" id={group+"-add"} onClick={(e) => handleChange(e,group)}>Add</button>;

    return(
      <section className="section">
        <h1 className="section-title">{title}</h1>
          {list.map((input,index)=>{

            return(
              <div key={group+index} className='group-section' data-field={group} data-index={index}>
                {fields.map(field => {

                 const key = field.toLowerCase();
                 const id = group+"-"+key+"-"+index;

                 return(
                    <div className="input" key={id}>
                      <label htmlFor={id} className="input-label">{field}</label>
                      <input type='text' id={id} name={id} placeholder={field}  value={input[key]||''} onChange={(e) => handleChange(e,group,key,input)} className='input-field' data-field={group} data-subfield={key} data-index={index}></input>
                    </div>
                 )

                })}
                {DeleteButton}
              </div>
            )
          })}
        {AddButton}
      </section>
    )
}

export default SectionList