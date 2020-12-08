import React from 'react'
import {Container, Pane, Title, SubTitle,Item, Inner, Image, Description} from './styles/jumbotron'

export default function Jumbotron({children, direction, ...restProps}) {
    return (
       <Item {...restProps}>
           <Inner direction={direction}>{children}</Inner>
       </Item>
    );
}


Jumbotron.Container = function JumbotronContainer ({children, ...restProps}){
return <Container {...restProps} >{children}</Container>
};

Jumbotron.Pane = function JumbotronPane({children, ...restProps}){
return <Pane {...restProps}> {children}</Pane>
};

Jumbotron.Title = function JumbotronTitle({children, ...restProps}){
    return <Title {...restProps}> {children}</Title>
 };
    
 Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}> {children}</SubTitle>
 };
Jumbotron.Description = function JumbotronDescription({children, ...restProps}){
return <Description {...restProps}>{children}</Description>
}

 Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps}/> 
 };


