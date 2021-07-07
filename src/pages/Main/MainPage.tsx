import React from 'react'
import { Typography, Card, Link } from '@material-ui/core'
import { useStyles } from './MainPage.style'

import { InputLogin } from 'components/InputLogin'
import { ButtonLogar } from 'components/ButtonLogar'
import { DividerComp } from 'components/Divider'
import { MediaButtons } from 'components/MediaButtons'

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
                        <InputLogin title="Login"/>
                        <InputLogin title="Senha" type="password"/>
                        <div className={style.buttondiv}>
                            <ButtonLogar />
                        </div>
                        <div className={style.help_login}>
                            <Typography>Problemas com login? <Link href="#">Clique Aqui</Link></Typography>
                        </div>

                        <div className={style.bottom_right}>
                            <div className={style.div_divisor}>
                                <DividerComp />
                            </div>
                            <MediaButtons />
                        </div>
                    </div>
                </div>

                <div className={style.left}>
                    B
                </div>
            </Card>
        </div>
    )
}