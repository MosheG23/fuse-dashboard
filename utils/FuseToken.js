import axios from 'axios'
const fs = require('fs')
const dotenv = require('dotenv')
dotenv.config()

import { FUSO_IO_BASE_URL, STUDIO_FUSE_BASE_URL, FUSD_ADDRESS } from '@/utils/const'

export const GetMaxTotalSupply = async () => {
    const url = FUSO_IO_BASE_URL +  "module=token&action=getToken&contractaddress=" + FUSD_ADDRESS;
    try {
        const data = await axios.get(url);
        return data;
    } catch (error) {
        alert(error)
    }
}

export const GetTokenDetails = async (address = FUSD_ADDRESS) => {
    const url = FUSO_IO_BASE_URL + "module=token&action=getToken&contractaddress=" + address.toLowerCase();
    try {
        const data = await (await axios.get(url)).data.result;
        return data;
    } catch (error) {
        alert(error)
    }
}

export const GetStudioFuseTokens = async() => {
    const url = STUDIO_FUSE_BASE_URL + "v1/tokens/"
    try {
        const data = (await axios.get(url)).data.data
        return data
    } catch (error) {
        alert(error)
    }
}