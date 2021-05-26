import { useState } from 'react'
import Image from 'next/image'
import { Button, IconButton } from '@material-ui/core';
import { FiLink } from 'react-icons/fi';
import { getWeb3 } from '@/utils/getWeb3'

import UsefulLinks from './UsefulLinks'

import styles from '@/styles/Header.module.css'
import _ from 'lodash';

const Header = ({ user, login }) => {
    const [showText, setShowText] = useState(false)
    const [usefulOpen, setUsefulOpen] = useState(false)

    const companyName = (text) => {
        return (
            <span className={styles.logoText}>
                <span className={styles.companyText}>
                    {text}
                </span>swap
            </span>
        )
    }

    const ConnectToWallet = () => {
        return (
            <>
                <Button variant="contained" color="secondary" onClick={login}>Connect to a wallet</Button>
            </>
        )
    }

    const UserDetails = () => {
        return (
            <>
                {user.account}
            </>
        )
    }

    return (
        <div className={styles.header}>
            <div className={styles.companyName}>
                <Image src="/img/logo/fuse.png" height="40px" width="40px" alt="logo"
                onMouseOver={() => setShowText(!showText)} onMouseLeave={() => setShowText(!showText)} />
                {showText ? companyName('fuse') : <></> }
            </div>
            <div className={styles.buttons}>
                {/* {_.isEmpty(user) ?
                ConnectToWallet() :
                UserDetails()} */}
                <IconButton variant="outlined" onClick={() => setUsefulOpen(!usefulOpen)}>
                    <FiLink />
                    {usefulOpen ? <UsefulLinks /> : <> </>}
                </IconButton>
            </div>
        </div>
    )
}

export default Header
