import { FaInfoCircle, FaGithub, FaDiscord, FaTelegram, FaWpexplorer } from 'react-icons/fa'
import { SiReadthedocs } from 'react-icons/si'
import { HiOutlineChartSquareBar } from 'react-icons/hi'

export const usefulLinksData = [
    {
        title: 'About',
        icon: <FaInfoCircle />,
        link: 'https://fuse.io/'
    }, {
        title: 'Docs',
        icon: <SiReadthedocs />,
        link: 'https://docs.fuse.io/fuseswap/overview'
    }, {
        title: 'Code',
        icon: <FaGithub />,
        link: 'https://github.com/fuseio/fuseswap-interface'
    }, {
        title: 'Discord',
        icon: <FaDiscord />,
        link: 'https://discord.com/invite/jpPMeSZ'
    }, {
        title: 'Telegram',
        icon: <FaTelegram />,
        link: 'https://t.me/fuseswap'
    }, {
        title: 'Explorer',
        icon: <FaWpexplorer />,
        link: 'https://explorer.fuse.io/'
    }, {
        title: 'Charts',
        icon: <HiOutlineChartSquareBar />,
        link: 'https://info.fuseswap.com/'
    }
]