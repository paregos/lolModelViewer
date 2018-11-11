import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

var images = [
    {
        url: '/assets/Fizz_Circle_0.jpg',
        mtlFile: 'fizz_base.mtl',
        objFile: 'fizz_base.obj',
        title: 'Fizz',
        width: '100%',
    },
    {
        url: '/assets/Fizz_Circle_1.jpg',
        mtlFile: 'fizz_atlant.mtl',
        objFile: 'fizz_atlant.obj',
        title: 'Fizz1',
        width: '100%',
    }
];

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
                        <div id="selectionFrame">
                            <Grid container spacing={24}>
                                <Grid item xs={12}>
                                    <div id="selectionFrameSearchBox">Blue</div>
                                </Grid>
                                {images.map(image => (
                                    <Grid item xs={4}>
                                        <ButtonBase focusRipple key={image.title} style={{width: image.width}}
                                        onClick={() => addModel(image.mtlFile, image.objFile)}>
                                            <img src={image.url} style={{width: image.width, padding: "3px"}}/>
                                        <span/>
                                        </ButtonBase>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
    
  }
}