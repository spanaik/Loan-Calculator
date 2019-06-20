import React from 'react'
import debounce from 'lodash/debounce'

import withStyles from '@material-ui/core/styles/withStyles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider'

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grid: {
      width: "80%",
      margin: `0 ${theme.spacing(2)}px`,
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 20px)'
      }
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.secondary
    },
    blockCenter: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
    block: {
      padding: theme.spacing(2),
    }
  })

const marksForAmount = [
    {
      value: 500,
      label: '500$',
    },
    {
      value: 1000,
      label: '1000$',
    },
    {
        value: 2000,
        label: '2000$',
    },
    {
        value: 3000,
        label: '3000$',
    },
    {
        value: 4000,
        label: '4000$',
    },
    {
        value: 5000,
        label: '5000$',
    }
  ]

const marksForTenure = [
    {
        value: 6,
        label: '6 M',
    },
    {
        value: 12,
        label: '12 M',
    },
    {
        value: 18,
        label: '18 M',
    },
    {
        value: 24,
        label: '24 M',
    },
]

function valuetext(value) {
    return `${value}`;
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount : 1000,
            numOfMonths : 12
        }
    }

    changeOnDebounce = debounce(() => {
        this.props.calculateInstalment(this.state.amount, this.state.numOfMonths)
    }, 500)

    componentDidMount() {
        if (this.state.amount && this.state.numOfMonths) {
            this.props.calculateInstalment(this.state.amount, this.state.numOfMonths)
        }
    }

    handleAmountChange = (_, value) => {
        this.setState({
            amount : value
        }, () => {
            if (this.state.amount && this.state.numOfMonths) {
                this.changeOnDebounce()
            }
        })
    }

    handleTenureChange = (_, value) => {
        this.setState({
            numOfMonths : value
        }, () => {
            if (this.state.amount && this.state.numOfMonths) {
                this.changeOnDebounce()
            }
        })
    }

    render() {

        const { classes } = this.props;
        const { amount, numOfMonths } = this.state;

        return(
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid spacing={4} alignItems="center" justify="center" container className={classes.grid}>
                        <Grid item xs={12}>
                            <div className={classes.topBar}>
                                <div className={classes.blockCenter}>
                                    <Typography variant="h4" gutterBottom className={classes.block}>Loan Calculator</Typography>
                                    <Typography variant="h6">
                                        Select Loan Amount and Tenure, to view details
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper className={classes.paper}>
                                <div>
                                    <Typography variant="h6" gutterBottom>
                                        Amount
                                    </Typography>
                                    <Typography variant="body1">
                                        Use slider to set the amount you need.
                                    </Typography>
                                    <div className={classes.blockCenter}>
                                        <Typography color='secondary' variant="h6" gutterBottom>
                                            {numeral(amount).format()} USD
                                        </Typography>
                                    </div>
                                    <div>
                                        <Slider
                                            min={500}
                                            max={5000}
                                            getAriaValueText={valuetext}
                                            step={100}
                                            valueLabelDisplay="auto"
                                            marks={marksForAmount}
                                            value={this.state.amount}
                                            onChange={this.handleAmountChange}
                                        />
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper className={classes.paper}>
                                <div>
                                    <Typography variant="h6" gutterBottom>
                                        Tenure
                                    </Typography>
                                    <Typography variant="body1">
                                        Use slider to set the tenure.
                                    </Typography>
                                    <div className={classes.blockCenter}>
                                        <Typography color='secondary' variant="h6" gutterBottom>
                                            {numOfMonths} Months
                                        </Typography>
                                    </div>
                                    <div>
                                        <Slider
                                            min={6}
                                            max={24}
                                            getAriaValueText={valuetext}
                                            step={1}
                                            valueLabelDisplay="auto"
                                            marks={marksForTenure}
                                            value={this.state.numOfMonths}
                                            onChange={this.handleTenureChange}
                                        />
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Form);