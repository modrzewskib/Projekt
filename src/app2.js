import React from 'react';
import ReactDOM from 'react-dom';
import {Head} from "./Head";
import {GoogleApiWrapper} from "./scss/Map2"
import {MapContainer} from "./scss/Map2";


class App extends React.Component {
   constructor() {
   super();

   }
   render(){
       const style = {
           width: '100%',
           height: '100%'
       }
     return (
         <section>
             <Head title={"Unesco dziedzictwo Narodowe"}/>
             <div style={style}>
             <MapContainer/>
             </div>
         </section>
     )
   }
 }

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});