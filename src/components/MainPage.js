import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div id="logBox">Blue</div>
                    </Grid>
                    <Grid item xs={9}>
                        <div id="canvas"></div> 
                    </Grid>
                    <Grid item xs={3}>
                        <div id="selectionFrame"></div>
                    </Grid>
                </Grid>
            </div>
        )
    }
    
  }
}