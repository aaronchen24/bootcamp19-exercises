import React from "react";

class Welcome extends React.Component() {
  constructor() {
    super()
    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      hometown: "",
      foodOne: "",
      foodTwo: "", 
      foodThree: "", 
      birthday: "", 
      huid: "",
      concentration: ""
    }
  }

  onSubmit = () => {}

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateGender = (event) => {
    this.setState({gender: event.target.value})
  }

  updatePronoun = (event) => {
    this.setState({pronoun: event.target.value})
  }

  updateHometown = (event) => {
    this.setState({hometown: event.target.value})
  }

  updateFoodOne = (event) => {
    this.setState({foodOne: event.target.value})
  }

  updateFoodTwo = (event) => {
    this.setState({foodTwo: event.target.value})
  }

  updateFoodThree = (event) => {
    this.setState({foodThree: event.target.value})
  }

  updateBirthday = (event) => {
    this.setState({birthday: event.target.value})
  }

  updateHuid = (event) => {
    this.setState({huid: event.target.value})
  }

  updateConcentration = (event) => {
    this.setState({concentration: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <label>
          Name:
          <input type="string" onChange={this.updateName} name="name"/>
        </label>
        <label>
          Gender:
          <input type="radio" onChange={this.updateGender} name="gender"/>
        </label>
        <label>
          Preferred Pronouns:
          <input type="string" onChange={this.updatePronoun} name="pronoun"/>
        </label>
        <label>
          Hometown:
          <input type="string" onChange={this.updateHometown} name="hometown"/>
        </label>
        <label>
          First favorite food:
          <input type="string" onChange={this.updateFoodOne} name="foodOne"/>
        </label>
        <label>
          Second favorite food:
        <input type="string" onChange={this.updateFoodTwo} name="foodTwo"/>
        </label>
        <label>
          Third favorite food:
        <input type="string" onChange={this.updateFoodThree} name="foodThree"/>
        </label>
        <label>
          Birthday:
        <input type="date" onChange={this.updateBirthday} name="birthday"/>
        </label>
        <label>
          HUID:
          <input type="number" onChange={this.updateHuid} name="huid" min="00000000" max="99999999"/>
        </label>
        <label>
          Concentration:
        <input type="string" onChange={this.updateConcentration} name="concentration"/>
        </label>
      

        <button onClick={()=>this.onSubmit()}>Submit</button>
        </React.Fragment>
    )
  }
}

export default Welcome;
