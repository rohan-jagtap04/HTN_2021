import React, { Component } from 'react'
import './App.css'
export class App extends Component {
  state={
    profileImg: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg'
  }
  imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({profileImg:reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render() {
    const {profileImg} = this.state 
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img"/>
          </div>
        </div>
        <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}/>
        <div className="label">
          <label htmlFor="input" className="image-upload">
            <i className="material-icons">add_photo_alternate</i>
            Choose your photo
          </label>
        </div>

      </div>
    )
  }
}

export default App