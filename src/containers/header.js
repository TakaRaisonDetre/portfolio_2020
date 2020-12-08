import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../route-constants/routes'
import logo from '../logo.svg'

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="ShizFlex" src={logo}/>
               
               
            </Header.Frame>
            {children}
        </Header>
    )
}