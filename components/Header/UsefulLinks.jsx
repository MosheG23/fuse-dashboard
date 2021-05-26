import React from 'react'
import { usefulLinksData } from './HeaderData'
import styles from '@/styles/Header.module.css'

const UsefulLinks = () => {
    const UsefulLinkItem = ({ title, icon, link }) => {
        return (
            <a href={link} target="_blank"><div className={styles.usefulLink___menuItem}>
                {icon}
                <span className="styles.usefulLink___link">{title}</span>
            </div></a>
        )
    }

    return (
        <div className={styles.usefulLink___dropdown}>
            {usefulLinksData.map((item, index) => {
                return (
                    <UsefulLinkItem title={item.title} icon={item.icon}
                    link={item.link} key={index} />
                )
            })}
        </div>
    )
}

export default UsefulLinks
