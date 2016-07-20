import React from 'react'

export default class Home extends React.Component {
  render(){
    return(
      <div id="home" className="home">
        <div className="text-vcenter">
          <h1>Hello World</h1>
          <h3>This is bootstrap-based layout</h3>
          <a href="#about" className="btn btn-default btn-lg">Continue</a>
        </div>
      </div>
    )
  }
}

export default Home