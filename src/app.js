import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from "./components/Map";
import monuments from './database';
import {Head} from "./Head";
import {List} from "./components/List";


class App extends React.Component {
   constructor() {
   super();
   this.state={
       array: monuments
   }

   }
   render(){
       let list = this.state.array.map((e,i)=>{
           return <List
               key={i}
                  name={e.NAZWA}
                  city={e.MIEJSCOWOSC}
                  date={e.DATA_WPISU}
                  description={e.OPIS}
                  photo1={e.ZDJECIE1}
                  photo2={e.ZDJECIE2}
                  photo3={e.ZDJECIE3}
           />
       });
     return (
         <section>
             <Head title={"Miejsca Światowego Dziedzictwa Unesco w Polsce"}/>
             <div className={'mainSection'}>
                 <div className={'objectList'}>{list}</div>
             <Map/>
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
