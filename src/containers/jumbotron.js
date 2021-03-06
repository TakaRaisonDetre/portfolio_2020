import React from 'react'
import caseData from '../case-data/case.json'
import {Jumbotron} from '../components'



export function JumbotronContainer() {
    return (
       <Jumbotron.Container>
       {
           caseData.map((item)=>(
               <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    <Jumbotron.Description>{item.description}</Jumbotron.Description>
               </Jumbotron.Pane>
               <Jumbotron.Pane>
                   <Jumbotron.Image src={item.image} alt={item.alt}/>
               </Jumbotron.Pane>
               </Jumbotron>
           ))
       }
       </Jumbotron.Container>
    );
}
