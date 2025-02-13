import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './DashboardComponents/Achievement'
import MonthlyOverview from './DashboardComponents/MonthlyOverview'

const Dashboard = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Achievement />
                </Grid>
                <Grid item xs={12} md={8}>
                    <MonthlyOverview />
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={12} md={4}>
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                        
                    </Grid>
                    <Grid item container xs={12} md={4}>
                        <Grid item xs={12} md={6}>
                            
                        </Grid>
                        <Grid item xs={12} md={6}>
                            
                        </Grid>
                        <Grid item xs={12} md={6}>
                            
                        </Grid>
                        <Grid item xs={12} md={6}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard