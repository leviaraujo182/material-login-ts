import React from 'react'
import { useStyles } from './InputLogin.style'
import { TextField } from '@material-ui/core'


export const InputLogin: React.FC = () => {
    const styles = useStyles()
    return (
        <TextField variant="outlined" label="Login" className={styles.input} />

    )
}