import React,{useState} from "react";
import './styles/App.css';
import Section from './components/Section';
import Preview from './components/Preview';
import SectionList from "./components/SectionList";

import ReactToPrint from "react-to-print";

import defaultPhoto from "./assets/default_photo.jpg";
import ExampleCV from "./components/exampleCv";


const App = props => {

    const [cv,setCv] = useState({
      personal:{
        firstName: {label:'First Name',type:'text', value:''},
        lastName: {label:'Last Name',type:'text',value:''},
        title: {label:'Title',type:'text',value:''},
        birth: {label:'Birthdate',type:'date',value:''},
        photo: {label:'Photo',type:'file', value:defaultPhoto},
        nationality: {label:'Nationality',type:'text',value:''},
        language: {label:'Languages',type:'text',value:''},
        description:{label:'Description',type:'textarea',value:''},
      },
      contact:{
        email: {label:'Email',type:'email',value:''},
        phone: {label:'Phone Number',type:'tel',value:''},
        address: {label:'Address',type:'text',value:''},
      },
      education: {
        list:
        [

        ]
      },
      experience: {
        list:
        [

        ]
      },
    });

    let componentRef;

    const handleChange = (e,group,key,input) => {

      const tag = e.target.localName;
      const value = e.target.value;
      const isList = Boolean(e.target.dataset.field);

      if (tag==="button"){
        e.preventDefault();
        handleButton(e,group);
      }  

      else if(isList){
        const index = e.target.dataset.index;
        group = e.target.dataset.field;
        key = e.target.dataset.subfield;

        let groupCopy = JSON.parse(JSON.stringify(cv[group].list));
        groupCopy[index][key] = value;

        setCvData(group,'list',groupCopy);
      }

      else if(input.type==='file'){

        const file = e.target.files[0];
        if(!file) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
          setCvData(group,key,fileReader.result);
          return;
        }

        fileReader.readAsDataURL(file);

      }

      else {
        setCvData(group,key,value);
    }

    }

    const setCvData = (group,key,value) =>{
      let cvCopy = JSON.parse(JSON.stringify(cv));

      if(key === 'list'){
        cvCopy[group][key] = value;
      } else {
        cvCopy[group][key].value = value;
      }

      setCv(
        {...cvCopy}
      );
    }

    const handleButton = (e,group) => {

      const id = e.target.id;
      let newVal = {...cv[group]};

      if (id.includes('add')){
        newVal.list = [...newVal.list,{}];
      }

      if (id.includes('del')){
        const index = e.target.parentNode.dataset.index;
        newVal.list.splice(index,1);
      }

      setCvData(group,'list',newVal.list);

    }

    const loadExample = () => {
      setCv(ExampleCV);
    }


    return (
      <div className="App">
        <form className='form'>
          <Section 
            params = {{
              group: 'personal',
              title: "Personal Information" ,
              fields: cv.personal,
              handleChange: handleChange,
            }}
          />
          <Section
            params = {{
              group: 'contact',
              title: 'Contact',
              fields: cv.contact,
              handleChange: handleChange,
            }}
          />
          <SectionList
            params = {{
              inputs: cv.education,
              group: 'education',
              title: 'Education',
              fields: ['Title','Degree','University','City','From','To'],
              handleChange: handleChange,
            }}/>
          <SectionList 
            params = {{
              inputs: cv.experience,
              group: 'experience',
              title: 'Experience',
              fields: ['Position','Company','City','From','To'],
              handleChange: handleChange,
            }}
          />
          <ReactToPrint 
            trigger={() => {
              return <button type='button' className="button-generate" >Generate PDF</button>
            }}
            content = {() => componentRef}
          />
          <button className="button-reset" onClick={(e)=>{window.location.reload();}}>Reset Form</button>
          <button type='button' className="button-example" onClick={loadExample}>Example CV</button>
        </form>
        <div className='preview'>
          {<Preview cv={cv} ref={el=>(componentRef = el)}/>}
        </div>
      </div>
    );
}

export default App;
