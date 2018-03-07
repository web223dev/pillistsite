import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ChurchInfo from './ChurchInfo';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import '../style/ProfileStyles.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect_adminEdit: null
    }        
  }

  radminEdit = () => {
    this.setState({
      redirect_adminEdit: `/dashboard/settings/profile/adminpanel_edit`
    })
  }
  render() {
    const { redirect_adminEdit } = this.state;    
    if (redirect_adminEdit) {
      return <Redirect to={redirect_adminEdit} />;
    }    
    return (
      <div>
        <ChurchInfo />
        <ContactInfo />
        <SocialMedia radminEdit={this.radminEdit}/>
      </div>
    );
  }
}

export default Profile;