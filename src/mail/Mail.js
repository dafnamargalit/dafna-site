import React, {Component} from 'react';
import Mailchimp from 'react-mailchimp-form';
import D from '../assets/letters/D.svg';
import AP from '../assets/letters/A-P.svg';
import F from '../assets/letters/F.svg';
import N from '../assets/letters/N.svg';
import AY from '../assets/letters/A-Y.svg';
import close from '../assets/icons/close.svg';

import './Mail.css';

export default class Mail extends Component{

  onClose = (e) =>{
    if(e.target.className === "Mail" || e.target.className === "close"){
      this.props.onClose && this.props.onClose(e);
    }
  }
  render(){
    if(this.props.show || localStorage.getItem('seen') === null){
      return(
        <div className="Mail" onClick={e => {this.onClose(e);}}>
        <div className="Mail-Modal">
        <div className="header">
        <img src={close} onClick={e => {this.onClose(e);}} className="close" alt="close"></img>
        </div>
        <div className="mail-letters">
        <img src={D} className="logo" alt="logo"></img>
        <img src={AY} className="logo" alt="logo"></img>
        <img src={F} className="logo" alt="logo"></img>
        <img src={N} className="logo" alt="logo"></img>
        <img src={AP} className="logo" alt="logo"></img>
        </div>
        <p className="text">Let's stay in touch!</p>
        <Mailchimp
                className="Mailchimp-Form"
                action={process.env.REACT_APP_MAILCHIMP_URL}
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  },
                  {
                    name: 'FNAME',
                    placeholder: 'First Name',
                    type: 'text',
                    required: true
                  },
                  {
                    name: 'LNAME',
                    placeholder: 'Last Name',
                    type: 'text',
                    required: true
                  }
                ]}
                messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "Please enter your email.",
                  duplicate: "You have already subscribed with this email address",
                  button: "Subscribe"
                }
                }
            />
        </div>
        </div>
        );
    }
    else{
      return null;
    }
  }
}


