import { makeStyles } from '@material-ui/core'
import '@fontsource/satisfy'

export const useStyles = makeStyles({
    body: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F5F5F5'
    },

    card: {
        width: '50%',
        height: '70%',
        display: 'flex'
    },

    right: {
        width: '50%',
        height: '100%',

    },

    left: {
        width: '50%',
    },

    header_right: {
        textAlign: 'center',
        marginTop: '15px',
    },

    bemvindo: {
        fontSize: '30px'
    },

    raidcall: {
        fontSize: '45px',
        fontFamily: 'Satisfy',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, rgba(227,131,13,1) 30%, rgba(142,3,3,1) 98%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },

    mid_right: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
        
    },

    buttondiv: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },

    help_login: {
        textAlign: 'center'
    },

    bottom_right: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px',
    },

    div_divisor: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

})