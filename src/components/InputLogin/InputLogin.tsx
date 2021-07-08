import React from 'react'
import { useStyles } from './InputLogin.style'
import { TextField, createTheme, ThemeProvider, InputAdornment } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

const theme = createTheme({
    palette: {
        primary: {
            main: '#CE640B'
        }
    }
})

interface InputLoginProps {
    title: string,
    type?: string
}

export const InputLogin: React.FC<InputLoginProps> = (props) => {
    const styles = useStyles()
    return (
        <div className={styles.container_input}>
            <ThemeProvider theme={theme}>
                <TextField variant="outlined" label={props.title} className={styles.input} color="primary" type={props.type} />
            </ThemeProvider>
        </div>
    )
}