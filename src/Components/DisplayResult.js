import React from 'react'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';


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
    },
    mainBadge: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "space-between",
      textAlign: "right",
    }
  })

class DisplayResult extends React.Component {

    render() {
        const { classes } = this.props;
        if (!this.props.result.interestRate)
        {
            return(
                <div className={classes.root}>
                    <div className={classes.blockCenter}>
                        <Typography variant="h4" gutterBottom className={classes.block}>
                            Select Amount and Tenure to calculate
                        </Typography>
                    </div>
                </div>
            )
        }

        const monthlyPayment = this.props.result.monthlyPayment.amount
        const numOfPayments = this.props.result.numPayments
        const intRate = this.props.result.interestRate
        const total = monthlyPayment * numOfPayments
        const principalAmount = this.props.result.principal.amount
        const interestAmount = total - principalAmount

        return (
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid container spacing={4} justify="center" className={classes.grid} >
                            <Grid item xs={12} sm={8} md ={6} lg={4}>
                                <Paper className={classes.paper} style={{position: 'relative'}}>
                                    <div>
                                        <Typography variant="h6" gutterBottom>
                                            Details
                                        </Typography>
                                        <Divider />
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Monthly Payments
                                            </Typography>
                                            <Typography variant="h5" color={'secondary'} gutterBottom>
                                                {numeral(monthlyPayment).format()} USD
                                            </Typography>
                                        </div>
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Number of Payments
                                            </Typography>
                                            <Typography variant="h5" color={'secondary'} gutterBottom>
                                                {numeral(numOfPayments).format()}
                                            </Typography>
                                        </div>
                                        
                                        <Divider />
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Total
                                            </Typography>
                                            <Typography variant="h5" color={'secondary'} gutterBottom>
                                                {numeral(total).format()} USD
                                            </Typography>
                                        </div>
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Principal Amount
                                            </Typography>
                                            <Typography variant="subtitle1" color={'secondary'} gutterBottom>
                                                {numeral(principalAmount).format()} USD
                                            </Typography>
                                        </div>
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Interest Amount
                                            </Typography>
                                            <Typography variant="subtitle1" color={'secondary'} gutterBottom>
                                                {numeral(interestAmount).format()} USD
                                            </Typography>
                                        </div>
                                        <div className={classes.mainBadge}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                Interest Rate
                                            </Typography>
                                            <Typography variant="subtitle1" color={'secondary'} gutterBottom>
                                                {intRate} %
                                            </Typography>
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

export default withStyles(styles)(DisplayResult);