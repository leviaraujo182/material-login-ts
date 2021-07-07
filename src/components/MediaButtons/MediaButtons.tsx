import React from 'react'
import { useStyles } from './MediaButtons.style'

export const MediaButtons: React.FC = () => {
    const styles = useStyles()
    return (
        <dt className={styles.list}>
            <dd className={styles.list_item}>Facebook</dd>
            <dd className={styles.list_item}>Twitter</dd>
            <dd className={styles.list_item}>Google</dd>
        </dt>
    )
}