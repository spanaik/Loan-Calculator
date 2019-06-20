import React from 'react';
import Form from './Components/Form'
import DisplayResult from './Components/DisplayResult'
import Instalment from './util/Instalment'

// Material Imports Below
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const backgroundShape = require('./images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200
  }
})

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "result" : ''
    }
  }

  calculateInstalment = (amount, tenure) => {
    Instalment.calculate(amount, tenure)
        .then(data => {
          this.setState({
            "result" : data
          })
        })
        .catch( error => {
          console.log("Error fetching data", error.message)
        })
  }

  render() {
    const { classes } = this.props;

    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
              <CssBaseline />
              <div className={classes.root}>
                  <Form data={this.state} 
                        calculateInstalment={this.calculateInstalment} />
                  <DisplayResult result={this.state.result} />
              </div>
            </React.Fragment>
          </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App);
