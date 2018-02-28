import React, { Component } from 'react';
import ProfileInfo from "../ProfileInfo";
import Header from "../Header";
import "./Profile.css";

let userObj = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  profile: "",
  dogName: "",
  breed: "",
  sex: "",
  age: "",
  weight: ""
}

class Profile extends Component {
  state = {
    newData: "",
    data: "",
    editing: false
  }

  componentWillMount() {
  	userObj.id = this.props.match.params.userId;
  	this.setState({ user: userObj }, ()=>{console.log(this.state.user);});
  }

  matchButton = () => {
  	this.props.history.push(`/discover/${this.props.match.params.userId}`)
  }

  render() {
    return (
    	<div>
    		<button className="button" onClick={this.matchButton}>Find a Match!</button>
    		<Header><h3>Your Profile</h3></Header>
    		<div className="userInfo">
	      		<ProfileInfo
					title={"First Name"}
					type={"text"}
					data={this.state.user.firstName}
		        />
		        <ProfileInfo
					title={"Last Name"}
					type={"text"}
					data={this.state.user.lastName}
		        />
		        <ProfileInfo
					title={"Address"}
					type={"text"}
					data={this.state.user.address}
		        />
		        <ProfileInfo
					title={"City"}
					type={"text"}
					data={this.state.user.city}
		        />
		        <ProfileInfo
					title={"ZIP"}
					type={"number"}
					data={this.state.user.zip}
		        />
		        <ProfileInfo
					title={"About Me"}
					type={"textarea"}
					data={this.state.user.profile}
		        />
	      	</div>
	      	<div className="dogInfo">
	      	 	<ProfileInfo
					title={"Dog Name"}
					type={"text"}
					data={this.state.user.dogName}
		        />
		        <ProfileInfo
					title={"Breed"}
					type={"text"}
					data={this.state.user.breed}
		        />
		        <ProfileInfo
					title={"Sex"}
					type={"radio"}
					data={this.state.user.sex}
		        />
		        <ProfileInfo
					title={"Age (years)"}
					type={"number"}
					data={this.state.user.age}
		        />
		        <ProfileInfo
					title={"Weight (lbs)"}
					type={"number"}
					data={this.state.user.weight}
		        />
	      	</div>
	    </div>
    );
  }
}

export default Profile;