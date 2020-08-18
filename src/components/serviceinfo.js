import React,{Component} from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBInput,MDBIcon } from 'mdbreact';
import QualityRange from './qualityrange';
import 'mdbreact/dist/css/mdb.css';
import './serviceinfo.css';
import YearPicker from "react-year-picker";
import DetailsForm from './details.js';  
// const duOptions = [
//     {
//       label: "UK",
//       value: "1"
//     },
//     {
//       label: "France",
//       value: "2"
//     },
//     {
//       label: "BPS",
//       value: "3"
//     },
//     {
//       label: "DSI",
//       value: "4"
//     },
//     {
//       label: "Germany",
//       value: "5"
//     }
//   ];

  //  const locationOptions = [ 
  //    {
  //      label:"Noida Site 1",
  //      value: "1"
  //     },
  //    {
  //     label:"Noida Site 3",
  //     value:"2"
  //    },
  //    {
  //      label:"UK",
  //      value:"3"
  //    },
  //    {
  //     label:"France",
  //      value:"4"
  //    }
  //  ];
 

class ServiceInfo extends Component{
    constructor(props){
        super(props);
        this.state = {yearPicked:'',duOptions:'',locationOptions: '',isSubmit:false,serviceName:'',serviceManager:'',accountName:'',deliveryManager:''};
        this.handleServiceName = this.handleServiceName.bind(this);
        this.handleServiceManager = this.handleServiceManager.bind(this);
        this.handleAccountName = this.handleAccountName.bind(this);
        this.handleDeliveryManager = this.handleDeliveryManager.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDuChange = this.handleDuChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }
    handleChange(locationOptions){
      this.setState({locationOptions:locationOptions});
    }

    handleDuChange(duOptions){
      this.setState({duOptions:duOptions});
    }

    handleYearChange(yearPicked){
      this.setState({yearPicked:yearPicked});
    }
    handleSubmitClick()
    { 
        this.setState({
            isSubmit:true,
        });
    }
    
    
    handleServiceName(serviceName){
               this.setState({
                   serviceName:serviceName
                   
               });
              
            }
    
    handleServiceManager(serviceManager){
              this.setState({
                  serviceManager:serviceManager
              });
           }

    handleAccountName(accountName){
            this.setState({
                accountName:accountName
            });
         }
    
    handleDeliveryManager(deliveryManager){
          this.setState({
              deliveryManager:deliveryManager
          });
       }
    render()
    {
        const isSubmit = this.state.isSubmit;
        const serviceName = this.state.serviceName;
        const serviceManager = this.state.serviceManager;
        const accountName = this.state.accountName;
        const deliveryManager = this.state.deliveryManager;
        const locationOptions = this.state.locationOptions;
        const duOptions = this.state.duOptions;
        const yearPicked = this.state.yearPicked;
        let button;
        let forms;
        if(isSubmit){
            button = null;
            forms = null;
        }
        else{ 
            button = <SubmitButton onClick={this.handleSubmitClick}/>;
            forms = <ServiceInfoForm yearPicked={yearPicked} duOptions={duOptions} locationOptions={locationOptions} serviceName={serviceName} serviceManager={serviceManager} accountName={accountName} deliveryManager={deliveryManager} onSnameChange={this.handleServiceName} onSmanagerChange={this.handleServiceManager} onAnameChange={this.handleAccountName} onDmanagerChange={this.handleDeliveryManager} onLocationChange={this.handleChange} onDuChange={this.handleDuChange} onYearChange={this.handleYearChange} onSubmit={this.handleSubmitClick}/>;
        }
    
    return(
        <div>
            <DetailsSubmit yearPicked={yearPicked} duOptions={duOptions} locationOptions={locationOptions} isSubmit = {isSubmit} serviceName={serviceName} serviceManager={serviceManager} accountName={accountName} deliveryManager={deliveryManager}/>
            {forms}
            <div className="buttonstyle">
            {button}
            </div>
        </div>
    );
    }
}  

class ServiceInfoForm extends Component{
    constructor(){
      super();
        this.handleServiceName = this.handleServiceName.bind(this);
        this.handleServiceManager = this.handleServiceManager.bind(this);
        this.handleAccountName = this.handleAccountName.bind(this);
        this.handleDeliveryManager = this.handleDeliveryManager.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDuChange = this.handleDuChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }
    handleChange(e) {
      this.props.onLocationChange(e.target.value); 
  }

  handleDuChange(e) {
    this.props.onDuChange(e.target.value); 
}

handleYearChange(date) {
  this.props.onYearChange(date); 
}

        handleServiceName(e){
          this.props.onSnameChange(e.target.value);          
      }

      handleServiceManager(e){
        this.props.onSmanagerChange(e.target.value);
    }

    handleAccountName(e){
      this.props.onAnameChange(e.target.value);
  }

  handleDeliveryManager(e){
    this.props.onDmanagerChange(e.target.value);
}
    render(){
      
     
      return(
        <div>
        <h1 className="serviceInfo"> Service Info Page</h1>
         <MDBContainer>
         <MDBRow>
           <MDBCol>
          <form>
            <p className="h4 text-center py-4">Provide the below details:</p>
            <div className="grey-text">
              <h4 className="quality">Quality Target</h4>
              <span className="iconstyle"><MDBIcon icon="bullseye" size="2x"/></span><QualityRange/>
              <h4 className="quality">Delivery Unit(DU)</h4>
              <span className="iconstyle"><MDBIcon icon="truck" size="2x"/></span> <select name="duOptions" value={this.props.duOptions} onChange={this.handleDuChange} className="css-location">
                <option name="" value="">Select Delivery Unit...</option>
                     <option name="BPS" value="BPS">BPS</option>
                    <option name="DSI" value="DSI">DSI</option>
                    <option name="UK" value="UK">UK</option>
                    <option name="France" value="France">France</option>
                    <option name="Germany" value="Germany">Germany</option>
                </select>
  
              <h4 className="quality sname">Service Name(In Scope)</h4>
              <MDBInput
              icon="user"
                group
                type="text"
                required
                value={this.props.serviceName}
                onChange={this.handleServiceName}
                validate
                error="error"
                success="right"
              />
              <h4 className="quality mname">Service Manager/Service Lead</h4>
              <MDBInput
                icon="user"
                group
                type="text"
                value={this.props.serviceManager}
                onChange={this.handleServiceManager}
                validate
                error="wrong"
                success="right"
              />
             
              <div className="yearpick">
              <h4>Year</h4>
              <span className="calendarstyle"><MDBIcon icon="calendar" size="x"/></span><YearPicker value={this.props.yearPicked} onChange={this.handleYearChange} />
              </div>
             
              <h4 className="quality">Location</h4>
              <span className="locstyle"><MDBIcon icon="globe" size="2x"/></span>
                <select name="locationOptions" value={this.props.locationOptions} onChange={this.handleChange} className="css-location">
                <option name="" value="">Select your location...</option>
                     <option name="Noida Site 1" value="Noida Site 1">Noida Site 1</option>
                    <option name="Noida Site 3" value="Noida Site 3">Noida Site 3</option>
                    <option name="UK" value="UK">UK</option>
                    <option name="France" value="France">France</option>
                </select>
               <h4 className="quality sname">Account Name</h4>
              <MDBInput
              icon="user"
                group
                type="text"
                value={this.props.accountName}
                onChange={this.handleAccountName}
                validate
                error="wrong"
                success="right"
              />
              <h4 className="quality mname">Delivery Manager</h4>
              <MDBInput
                icon="user"
                group
                type="text"
                value={this.props.deliveryManager}
                onChange={this.handleDeliveryManager}
                validate
                error="wrong"
                success="right"
              />
              
            </div>
            
          </form>
    </MDBCol>  
          </MDBRow>
  </MDBContainer>
       </div>
      )
    };
  }
  function DetailsForms(props){
    return <div>
        <h3>Here are the details from service info form:-</h3>
        <DetailsForm yearPicked={props.yearPicked} duOptions={props.duOptions} locationOptions={props.locationOptions} serviceName = {props.serviceName} serviceManager={props.serviceManager} accountName={props.accountName} deliveryManager={props.deliveryManager}/>
    </div>
}

function NoDetails(){
  return <h4>No details submitted yet!</h4>
}

  function DetailsSubmit(props){
    const isSubmit = props.isSubmit;
    if(isSubmit){
        return <DetailsForms yearPicked={props.yearPicked} duOptions={props.duOptions} locationOptions={props.locationOptions} serviceName = {props.serviceName} serviceManager={props.serviceManager} accountName={props.accountName} deliveryManager={props.deliveryManager} />
    }
    return <NoDetails/>
  }

function SubmitButton(props){
    return(
      <MDBBtn color="cyan" type="submit" onClick = {props.onClick}>Submit Details</MDBBtn>
    );
}


export default ServiceInfo;