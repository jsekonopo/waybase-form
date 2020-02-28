import React from 'react'
import { Grid } from '@material-ui/core'
import WayBaseListingContacts from './WayBaseListingContacts'
import WayBaseListingImages from './WayBaseListingImages'

export default function WayBasePeopleAndImages(props){
    return(
        <Grid container spacing={2}>
            <Grid item md={6}>
                <WayBaseListingContacts />
            </Grid>
            <Grid item md={6}>
                <WayBaseListingImages />
            </Grid>
        </Grid>
    )
}