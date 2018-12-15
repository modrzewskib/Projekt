import React from 'react'

class Footer extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <footer>
             <ol><b>Źródła informacji i zdjęć na stronie:</b>
                 <li>Obiekty wpisane na listę światowego dziedzictwa UNESCO, baza danych utworzona na podstawie: <a href="https://dane.gov.pl/dataset/1180" target={'_blank'}>https://dane.gov.pl/dataset/1180.</a></li>
                 <li>Lista światowego dziedzictwa w Polsce, teksty i zdjęcia: <a href="https://swiatowedziedzictwo.nid.pl/wpisy/wpis_unesco/" target={'_blank'}> https://swiatowedziedzictwo.nid.pl/wpisy/wpis_unesco/.</a></li>
                 <li>Cerkiew Owczary. Greek Catolic..., fot. Janusz Madejski, <a href="https://www.flickr.com/photos/hejma/albums/72157627943917340/with/6266205884/" target={'_blank'}>https://www.flickr.com/photos/hejma/albums/72157627943917340/with/6266205884/.</a></li>
             </ol>
         </footer>

     )
   }
 }

 export {Footer}