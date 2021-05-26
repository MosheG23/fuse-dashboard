import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import _ from 'lodash'
import { PieChart } from './index'

import { GetTokenDetails } from '@/utils/FuseToken'
import { fetchContract } from '@/utils/getWeb3'
import { PEG_SWAP_CONTRACT, PEG_SWAP_ABI, USD_ON_FUSE, FUSE_DOLLAR } from '@/utils/const'

import styles from '@/styles/Dashboard.module.css'
import { Grid, CircularProgress, Paper } from '@material-ui/core'

const Contract = ({ contract }) => {
    const [balance, setBalance] = useState(null)
    const [totalSupply, setTotalSupply] = useState(null)
    const [pegSwap, setPegSwap] = useState(null)
    const [usdCoinPeg, setUSDCoinPeg] = useState(null)
    const [fuseDollar, setFuseDollar] = useState(null)
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    useEffect(async() => {
        if (!(_.isEmpty(contract))) {
            try {
                const fetchedBalance = await contract.methods.balanceOf(contract.options.address).call();
                setBalance(fetchedBalance);
                // const fetchedPegSwap = await fetchContract(PEG_SWAP_ABI, PEG_SWAP_CONTRACT);
                // const value = await fetchedPegSwap.methods.balanceOf(PEG_SWAP_CONTRACT).call();
                // setPegSwap(fetchedPegSwap);
                // console.log(value);
                const fetchedTotalSupply = await contract.methods.totalSupply().call();
                setTotalSupply(fetchedTotalSupply);
                const fetchedUSDCoinPeg = await GetTokenDetails(USD_ON_FUSE);
                setUSDCoinPeg(fetchedUSDCoinPeg.totalSupply);
                const fetchedFUSD = await GetTokenDetails(FUSE_DOLLAR);
                setFuseDollar(fetchedFUSD.totalSupply);
            } catch (error) {
                console.log(error);
            }
        }
    }, [contract])
    const loaded = () => {
        return (
            <Paper variant="outlined" square className={styles.contractItem} color="darkblue" elevation={3} >
                <h3>Total Supply</h3>
                {totalSupply} <br />
                <hr className={styles.hr___contract} />
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={5}>
                        <h4>USD Coin on Fuse</h4>
                        {usdCoinPeg}
                        <h4>Fuse Dollar</h4>
                        {fuseDollar}
                        <h6>Need to fix - total supply</h6>
                    </Grid>
                    <Grid item xs={2}>
                    <div className={styles.vl}></div>
                    </Grid>
                    <Grid item xs={5}>
                        <h4>Chart</h4>
                        {/* {!(_.isEmpty([fuseDollar, usdCoinPeg])) ? <PieChart values={[fuseDollar, usdCoinPeg]} labels={['Fuse Dollar', 'USD Coin on Fuse']} /> : <>Chart</>} */}
                    </Grid>
                </Grid>
                {/* Balance: {balance} <br/>
                Peg Swap: {pegSwap} */}
            </Paper>
        )
    }
    return (
        <div className={styles.contract}>
            <span className={styles.contractTitle}>Contract</span>
            {!(_.isEmpty(contract)) ? loaded() : <CircularProgress />}
        </div>
    )
}

export default Contract
