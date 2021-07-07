import React from 'react'
import { Divider } from '@material-ui/core'
import { useStyles } from './Divider.style'

export const DividerComp: React.FC = () => {
    const styles = useStyles()
    return (
        <Divider className={styles.divider} />
    )
}