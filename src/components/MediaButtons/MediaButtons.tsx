import React from 'react'
import { useStyles } from './MediaButtons.style'
import { IconButton, List, ListItem, Typography, Button } from '@material-ui/core'
import { Facebook, Twitter, GitHub } from '@material-ui/icons'



export const MediaButtons: React.FC = () => {
    const styles = useStyles()
    return (
        <div>
            <Button>
                <Facebook className={styles.list_item} />
            </Button>
            <Button>
                <Twitter className={styles.list_item} />
            </Button>
            <Button>
                <GitHub className={styles.list_item} />
            </Button>
        </div>
    )
}