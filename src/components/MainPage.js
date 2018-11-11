import React from 'react'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false, showNameVerification: true });
  }

  componentWillUnmount() {

  }

  render() {

    const { isLoading } = this.state;

    if (isLoading) {
      return (
      <div>
        <p>Loading ...</p>
        <div class="lds-css ng-scope">
              <div style={{width:"100%", height:"100%"}} class="lds-eclipse">
                <div></div>
                <div></div>
              </div>
            </div>
      </div>
      )
    } else {
        return (
            <div>
                <div id="logBox">Blue</div>
                <div id="canvas"></div> 
            </div>
        )
    }
    
  }
}