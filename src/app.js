import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from "./components/Map";
import monuments from './database';
import {Head} from "./Head";
import {List} from "./components/List";
require('./scss/main.scss');


class App extends React.Component {
   constructor() {
   super();
   this.state={
       array: monuments,
       city:'',
   }
   }

   searchCity=(e)=>{
       this.setState({
           city:e.target.value,
       })
   }

   render(){

       let filterCity = this.state.array.filter((e)=>{
           return e.MIEJSCOWOSC.toLowerCase().indexOf(this.state.city.toLowerCase())!==-1
       });

       let list = filterCity.map((e,i)=>{
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
         <section className={'mainWrapper'}>
             <Head title={"Miejsca Światowego Dziedzictwa UNESCO w Polsce"}/>
             <div className={'mainInfo'}>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</div>
             <div className={'mainSection'}>
                 <form className={'browser'}><label>Wyszukaj miasto: <input type={'text'} onChange={this.searchCity}/></label></form>
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
