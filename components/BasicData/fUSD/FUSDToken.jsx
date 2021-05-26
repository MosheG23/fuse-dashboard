import React from 'react'
import Image from 'next/image'
import _ from 'lodash'

import { Paper } from '@material-ui/core'
import styles from '@/styles/Dashboard.module.css'

const FUSDToken = ({ token }) => {
    const tokenData = () => {
        return (
            <div>
                <h2>{token.name}</h2>
                <Image src="/img/token/fuse-logo.svg" height="40px" width="40px" /> <br />
                Token ID: <a href={"https://explorer.fuse.io/address/" + token.contractAddress +"/transactions"} 
                target="_blank">{token.contractAddress}</a> <br />
                Total Supply: {token.totalSupply} <br />
                Symbol: {token.symbol} <br />
            </div>
        )
    }

    const noToken = () => {
        return (
            <div>
                Select a Token
            </div>
        )
    }
    return (
        <Paper variant="outlined" square className={styles.userItem} color="darkblue">
            {(!(_.isEmpty(token))) ? tokenData() : noToken()}
        </Paper>
    )
}

export default FUSDToken
