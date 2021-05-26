import React, { useState, useEffect } from 'react'
import { Button, Paper } from '@material-ui/core'

import _ from 'lodash'

import styles from '@/styles/Dashboard.module.css'

const UserItem = ({ user }) => {
    const userData = () => {
        return (
            <div>
                <a href={"https://explorer.fuse.io/address/" + user.account +"/transactions"} 
                target="_blank"><Button variant="contained" color="primary">
                    View on Fuse Explorer
                </Button></a><br />
                Account ID: {user.account}<br />
                Balance: {user.balance} Eth <br />
                Transaction Count: {user.transactionCount} <br />
            </div>
        )
    }

    const guestData = () => {
        return (
            <div>
                User Not Logged In.
            </div>
        )
    }
    return (
        <Paper variant="outlined" square className={styles.userItem}>
            <h2>User Data</h2>
            {(!(_.isEmpty(user))) ? userData() : guestData()}
        </Paper>
    )
}

export default UserItem
