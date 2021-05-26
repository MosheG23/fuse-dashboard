import Head from 'next/head'
import { useEffect, useState } from 'react';
import _ from 'lodash';

import { fetchUser, getWeb3, fetchWallet, fetchContract } from '@/utils/getWeb3'
import { GetTokenDetails, GetStudioFuseTokens } from '@/utils/FuseToken'

import { Tooltip, IconButton } from '@material-ui/core'
import styles from '@/styles/Home.module.css'
import { GrDashboard } from 'react-icons/gr'

import { Header, BasicData, Contract } from '@/components/index'

export default function Home() {
  const [web3, setWeb3] = useState(null)
  const [user, setUser] = useState(null)
  const [fuseToken, setFuseToken] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [contract, setContract] = useState(null)
  const [tokensInfo, setTokensInfo] = useState(null)

  useEffect(async () => {
    await getWeb3()
    const fetchedUser = await fetchUser()
    setUser(fetchedUser)
    const fetchedWallet = await fetchWallet()
    setWallet(fetchedWallet)
    const fetchedToken = await GetTokenDetails()
    setFuseToken(fetchedToken)
    const fetchedTokens = await GetStudioFuseTokens()
    setTokensInfo(fetchedTokens)
    const fetchedContract = await fetchContract()
    setContract(fetchedContract)
  }, [])

  const logIn = async() => {
      await getWeb3()
  }

  return (
    <div className={styles.root}>
      <Head>
        <title>fUSD - Dashboard</title>
        <meta name="description" content="Fuse.io Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header user={user} login={logIn} />
      <div className={styles.container} >
        <span className={styles.title} >fUSD - Dashboard</span>
        <BasicData user={ user } token={ fuseToken } tokensInfo={ tokensInfo } />
        <Contract contract={ contract } />
      </div>
      {/* <Tooltip title="Login" placement="right-end">
        <IconButton aria-label="login">
          <RiLoginCircleFill />
        </IconButton>
      </Tooltip> */}
    </div>
  )
}
