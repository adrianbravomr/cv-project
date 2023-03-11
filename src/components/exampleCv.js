import myPhoto from "../assets/my_photo.jpg"

const ExampleCV = {
  personal:{
    firstName: {label:'First Name',type:'text', value:'Adrian'},
    lastName: {label:'Last Name',type:'text',value:'Bravo'},
    title: {label:'Title',type:'text',value:'Controls Engineer'},
    birth: {label:'Birthdate',type:'date',value:'1996-05-18'},
    photo: {label:'Photo',type:'file', value: myPhoto},
    nationality: {label:'Nationality',type:'text',value:'venezuelan'},
    language: {label:'Languages',type:'text',value:'Spanish, English'},
    description:{label:'Description',type:'textarea',value:'Electronic Engineer, Master´s degree in Control and Automation Engineering. Qualified to implement effective strategies, designs, and work for solutions in various production and manufacturing environments. Most relevant qualities are PLC & Controllers programming, HMI & SCADA systems design and development, System and Servers Management. Self-learning and problem-solving focused mindset. Challenges always excite me, wanting to overcome myself in complex situations and new projects.'},
  },
  contact:{
    email: {label:'Email',type:'email',value:'adrianbravomr@gmail.com'},
    phone: {label:'Phone Number',type:'tel',value:'15 3456 7890'},
    address: {label:'Address',type:'text',value:'Some Street Address'},
  },
  education: {
      list:
        [{
          title:'Controls Engineer',
          degree: 'Master',
          university: 'Universidad Rafael Belloso Chacin',
          city: 'Maracaibo, VE',
          from: 2017,
          to: 2019
        },
        {
          title:'Electronic Engineer',
          degree: 'Bachelor',
          university: 'Universidad Rafael Belloso Chacin',
          city: 'Maracaibo, VE',
          from: 2014,
          to: 2017
        },
      ]
  },
  experience: {
    list:
      [
        {
          position: 'Operations Technology Manager',
          company: 'Verano Energy',
          city: 'Las Condes, RM, CL',
          from: 2022,
          to: 'Present'
        },
        {
          position: 'O&M Controls Engineer',
          company: 'Verano Energy',
          city: 'Las Condes, RM, CL',
          from: 2020,
          to: 2022
        },
        {
          position: 'Controls Engineer',
          company: 'Nucleos SpA',
          city: 'San Miguel, RM, CL',
          from: 2014,
          to: 2017
        },
      ]
  },
}

export default ExampleCV