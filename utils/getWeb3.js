import Web3 from "web3";
import { FUSD_ADDRESS, FUSD_ABI, FUSD_COTRACT, FIAT_ABI } from '@/utils/const'

export const getWeb3 = async () => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
                return web3;
            } catch (error) {
                console.log(error);
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            // Use Mist/MetaMask's provider.
            const web3 = window.web3;
            console.log("Injected web3 detected.");
            return web3;
        }
        // Fallback to localhost; use dev console port by default...
        else {
            const provider = new Web3.providers.HttpProvider(
                "http://127.0.0.1:8545"
            );
            const web3 = new Web3(provider);
            console.log("No web3 instance injected, using Local web3.");
            return web3;
        }
    });
}

export const fetchUser = async() => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    // Use web3 to get the user's accounts.
    const account = await web3.eth.getAccounts();
    const currAccount = account[0]
    if (account.length > 0) {
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        // Get Current Balance
        const balanceWei = await web3.eth.getBalance(currAccount);
        const balanceEth = Web3.utils.fromWei(balanceWei, 'ether');
        const transactionCount = await web3.eth.getTransactionCount(currAccount)
        const user = {
            web3,
            account: currAccount,
            networkId,
            balance: balanceEth,
            transactionCount
        };
        return user;
    }
    return {}
}

export const fetchWallet = async() => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const wallet = web3.eth.accounts.wallet;
    return wallet;
}

export const fetchContract = async (contractABI = FIAT_ABI, contractAddress = FUSD_COTRACT) => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    if (web3.utils.isAddress(contractAddress)) {
        try {
            const contract = new web3.eth.Contract(contractABI, contractAddress.toLowerCase());
            return contract;
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('The Address is invalid')
    }
    return {}
}