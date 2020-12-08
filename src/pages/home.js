import React from 'react'
import  {JumbotronContainer} from '../containers/jumbotron'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'

export default function home() {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <JumbotronContainer/>
            <FooterContainer/>
        </div>
    )
}
