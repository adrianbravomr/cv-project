import React from "react";
import "../styles/Preview.css";

const Preview = React.forwardRef((props,ref) => {

    const cv = props.cv;
    
    return(
      <div className="preview-page" ref={ref}>
        <div className="preview-page-header">
          <h1>{cv.personal.firstName.value+' '+cv.personal.lastName.value}</h1>
          <h3>{cv.personal.title.value}</h3>
        </div>
        <div className="preview-page-body">
          <div className="preview-page-body-sidebar">
            
            <div className="sidebar-group">
              <div className="sidebar-photo">
                <img src={cv.personal.photo.value} alt=''/>
              </div>
              <div className="sidebar-group-title"> PERSONAL</div>
              <div className="sidebar-item">
                <div className="sidebar-key">Birth</div>
                <div className="sidebar-value">{cv.personal.birth.value}</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-key">Nationality</div>
                <div className="sidebar-value">{cv.personal.nationality.value}</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-key">Languages</div>
                <div className="sidebar-value">{cv.personal.language.value}</div>
              </div>
            </div>  

            <div className="sidebar-group">
              <div className="sidebar-group-title">CONTACT</div>
              <div className="sidebar-item">
                <div className="sidebar-key">Email</div>
                <div className="sidebar-value"><a href={"mailto:"+cv.contact.email.value}>{cv.contact.email.value}</a></div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-key">Phone Number</div>
                <div className="sidebar-value">{cv.contact.phone.value}</div>
              </div>
              <div className="sidebar-item">
                <div className="sidebar-key">Address</div>
                <div className="sidebar-value">{cv.contact.address.value}</div>
              </div>
            </div>          

          </div>
          <div className="preview-page-body-sections">
            <div className="preview-section">
              <div className="preview-section-title">Description</div>
              <div className="preview-section-text">{cv.personal.description.value}</div>
            </div>
            <div className="preview-section">
              <div className="preview-section-title">Experience</div>
              <div className="preview-list">
                {cv.experience.list.map((item,index) => {
                  return (
                    <div className="list-div" key={'list-'+index}>
                      <div className="list-date">{item.from} - {item.to}</div>
                      <div className="list-info">
                        <div className="list-title">{item.position}</div>
                        <div className="list-subtitle">{item.company}, {item.city}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="preview-section">
              <div className="preview-section-title">Education</div>
              <div className="preview-list">
                {cv.education.list.map((item,index) => {
                    return (
                      <div className="list-div" key={'list-'+index}>
                        <div className="list-date">{item.from} - {item.to}</div>
                        <div className="list-info">
                          <div className="list-title">{'Title: '+item.title}</div>
                          <div className="list-title">{'Degree: '+item.degree}</div>
                          <div className="list-subtitle">{item.university}, {item.city}</div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
})

export default Preview