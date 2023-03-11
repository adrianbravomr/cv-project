import React,{Component} from "react";
import './styles/App.css';
import Section from './components/Section';
import Preview from './components/Preview';
import SectionList from "./components/SectionList";

import ReactToPrint from "react-to-print";

import defaultPhoto from "./assets/default_photo.jpg";
import ExampleCV from "./components/exampleCv";


class App extends Component{

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.setCvData = this.setCvData.bind(this);
    this.loadExample = this.loadExample.bind(this);

    this.state = {
      cv:{
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
        education: {list:[]},
        experience: {list:[]},
      }
    };
  }

  handleChange(e,group,key,input){

    const tag = e.target.localName;
    const value = e.target.value;
    const isList = Boolean(e.target.dataset.field);

    if (tag==="button"){
      e.preventDefault();
      this.handleButton(e,group);
    }  

    else if(isList){
      const index = e.target.dataset.index;
      group = e.target.dataset.field;
      key = e.target.dataset.subfield;

      let groupCopy = JSON.parse(JSON.stringify(this.state.cv[group].list));
      groupCopy[index][key] = value;

      this.setCvData(group,'list',groupCopy);
    }

    else if(input.type==='file'){

      const file = e.target.files[0];
      if(!file) return;

      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.setCvData(group,key,fileReader.result);
        return;
      }

      fileReader.readAsDataURL(file);

    }

    else {
      this.setCvData(group,key,value);
    }

  }

  setCvData(group,key,value){

    let cvCopy = JSON.parse(JSON.stringify(this.state.cv));

    if(key === 'list'){
      cvCopy[group][key] = value;
    } else {
      cvCopy[group][key].value = value;
    }

    this.setState({
      cv: {...cvCopy}
    });

  }

  handleButton(e,group){

    const id = e.target.id;
    let newVal = {...this.state.cv[group]};

    if (id.includes('add')){
      newVal.list = [...newVal.list,{}];
    }

    if (id.includes('del')){
      const index = e.target.parentNode.dataset.index;
      newVal.list.splice(index,1);
    }

    this.setCvData(group,'list',newVal.list);

  }

  loadExample(){
    this.setState({
      cv:JSON.parse(JSON.stringify(ExampleCV))
    })
  }

  render(){
    return (
      <div className="App">
        <form className='form'>
          <Section 
            params = {{
              group: 'personal',
              title: "Personal Information" ,
              fields: this.state.cv.personal,
              handleChange: this.handleChange,
            }}/>
          <Section
            params = {{
              group: 'contact',
              title: 'Contact',
              fields: this.state.cv.contact,
              handleChange: this.handleChange,
            }}/>
          <SectionList
            params = {{
              inputs: this.state.cv.education,
              group: 'education',
              title: 'Education',
              fields: ['Title','Degree','University','City','From','To'],
              handleChange: this.handleChange,
            }}/>
          <SectionList 
            params = {{
              inputs: this.state.cv.experience,
              group: 'experience',
              title: 'Experience',
              fields: ['Position','Company','City','From','To'],
              handleChange: this.handleChange,
            }}/>
          <ReactToPrint 
            trigger={() => {
              return <button type='button' className="button-generate" >Generate PDF</button>
            }}
            content = {() => this.componentRef}
          />
          <button className="button-reset" onClick={(e)=>{window.location.reload();}}>Reset Form</button>
          <button type='button' className="button-example" onClick={this.loadExample}>Example CV</button>
        </form>
        <div className='preview'>
          {<Preview cv={this.state.cv} ref={el=>(this.componentRef = el)}/>}
        </div>
      </div>
    );
  }
}

export default App;
