import React from 'react'
import { useStyles } from './ButtonLogar.style'
import { Button, createTheme, ThemeProvider } from '@material-ui/core'


export const ButtonLogar: React.FC = () => {
    const styles = useStyles()
    return (

        <Button variant="contained" className={styles.btn} >Logar</Button>
    )
}