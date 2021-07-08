import { makeStyles } from '@material-ui/core'
import '@fontsource/satisfy'
import Bgempre from '../../assets/img/empresa-bg.jpg'

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
        backgroundImage: `url(${Bgempre})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
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
        textAlign: 'center',
        marginTop: '5px'
    },

    bottom: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    redestext: {
        textAlign: 'center'
    },

    mediabuttons: {
        display: 'flex',
        justifyContent: 'center'
    },
    divisor: {
        display: 'flex',
        justifyContent: 'center',
        width:'100%',
        marginTop: '10px',
        marginBottom: '10px'
    },

    text_help: {
        fontSize: '13px'
    },

    color_overlay: {
        zIndex: 2,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(227,131,13,1) 30%, rgba(142,3,3,1) 98%)',
        opacity: '0.5',
        position: 'absolute'
    },


    text_content_left: {
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column'
    },

    textleft: {
        zIndex: 3,
        color: '#FFF',
        fontSize: '80px',
        fontFamily: 'Satisfy',
        fontWeight: 'bold'
    },

    solucoes: {
        zIndex: 3,
        color: '#FFF'
    }
})