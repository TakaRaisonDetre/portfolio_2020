import React from 'react'
import {Footer} from '../components'

export function FooterContainer(){
    return (
        <Footer>
           <Footer.Title>会社情報</Footer.Title>
           <Footer.Break/>
           <Footer.Row>
               <Footer.Column>
                   <Footer.Link href="#">ニルバーナコンサルタント株式会社 </Footer.Link>
                   <Footer.Link href="#">音楽映像事業・IT開発業務請負</Footer.Link>
                   <Footer.Link href="#">東京都世田谷区砧4−10ー18</Footer.Link>
                  
                   
               </Footer.Column>

               <Footer.Column>
                   <Footer.Link href="#">開発依頼 </Footer.Link>
                   <Footer.Link href="#">haratakayasu@raisondetre.tokyo</Footer.Link>
                   <Footer.Link href="#">https://github.com/TakaRaisonDetre</Footer.Link>
                   <Footer.Link href="#">YOUTUBE: 駿河クリエイターヴィレッジ</Footer.Link>
                  
               </Footer.Column>

               <Footer.Column>
                   <Footer.Link href="#">弊社プロジェクト </Footer.Link>
                   <Footer.Link href="#">①　駿河クリエイタービレッジ</Footer.Link>
                   <Footer.Link href="#">②　Sachi Gomez Project</Footer.Link>
                   <Footer.Link href="#">③　プロジェクト・レゾンデートル</Footer.Link>
                  
               </Footer.Column>

               {/* <Footer.Column>
                   <Footer.Link href="#">About Suruga Creater Village</Footer.Link>
                   <Footer.Link href="#">Musician Application</Footer.Link>
                   <Footer.Link href="#">Videographer Application</Footer.Link>
                   <Footer.Link href="#">Investor Application</Footer.Link>
                  
               </Footer.Column> */}

           </Footer.Row>
           <Footer.Break/>
         <Footer.Text>Copyrights @　Nirvana Consultant KK </Footer.Text>
        </Footer>
    )
}