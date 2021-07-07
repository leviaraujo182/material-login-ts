import React from 'react'
import { Typography, Card } from '@material-ui/core'
import { useStyles } from './MainPage.style'
import { InputLogin } from 'components/InputLogin'

export const MainPage: React.FC = () => {
    const style = useStyles()
    return (
        <div className={style.body}>
            <Card className={style.card}>
                <div className={style.right}>
                    <div className={style.header_right}>
                        <Typography className={style.bemvindo}>
                            Bem vindo ao
                        </Typography>

                        <Typography className={style.raidcall}>
                            WHY?
                        </Typography>

                    </div>

                    <div className={style.mid_right}>
                        <InputLogin />
                    </div>
                </div>

                <div className={style.left}>
                    B
                </div>
            </Card>
        </div>
    )
}