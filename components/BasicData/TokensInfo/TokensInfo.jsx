import React, { useState, useEffect} from 'react'
import TokenData from './TokenData'
import _ from 'lodash'

import { Paper, FormControl, Select, FormHelperText, MenuItem, InputLabel } from '@material-ui/core'
import styles from '@/styles/Dashboard.module.css'


const TokensInfo = ({ tokensInfo }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedToken, setSelectedToken] = useState()

    useEffect(() => {
        setSelectedToken(tokensInfo[selectedIndex])
    }, [selectedIndex])

    const handleTokenChange = (e) => {
        setSelectedIndex(e.target.value)
    }

    const noTokens = () => {
        return(
            <h2>No Token Loaded</h2>
        )
    }

    const TokenSelecter = () => {
        return (
            <FormControl className={styles.formControl}>
                <Select
                value={selectedIndex}
                onChange={(event) => handleTokenChange(event)}
                >
                    {tokensInfo.map((item, index) => {
                        return (
                            <MenuItem key={index} value={index}>{item.name}</MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText>Please select your token</FormHelperText>
            </FormControl>
        )
    }

    return (
        <Paper variant="outlined" square className={styles.userItem} color="darkblue">
            <h2>More Tokens</h2>
            {(!(_.isEmpty(selectedToken))) ? <TokenSelecter /> :<></>}
            {(!(_.isEmpty(selectedToken))) ? <TokenData token={selectedToken} /> : noTokens()}
        </Paper>
    )
}

export default TokensInfo
