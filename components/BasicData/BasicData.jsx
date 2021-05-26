import React from 'react'
import _ from 'lodash'
import { FUSDToken, UserItem, TokensInfo } from './index'

import { Grid, CircularProgress } from '@material-ui/core'
import styles from '@/styles/Dashboard.module.css'

const BasicData = ({ user, token, tokensInfo }) => {
    return (
        <Grid className={styles.basicData}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
        >
            <Grid item xs={12} md={4}>
                <UserItem user={user} />    
            </Grid>
            <Grid item xs={12} md={4}>
                {(!(_.isEmpty(token))) ? <FUSDToken token={token} /> : <CircularProgress />}
            </Grid>
            <Grid item xs={12} md={4}>
                {(!(_.isEmpty(tokensInfo))) ? <TokensInfo tokensInfo={tokensInfo} /> : <CircularProgress />}
            </Grid>
        </Grid>
    )
}

export default BasicData
