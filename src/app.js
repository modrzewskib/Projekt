import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from "./components/Map";
import monuments from './database';
import {Head} from "./components/Head";
import {List} from "./components/List";
import {Footer} from './components/Footer';
require('./scss/main.scss');

//Przypisanie bazy danych do state w celu wyszukiwania konkretnego miasta, stan będzie się zmieniał i odrzucał to co niepotrzebne.
class App extends React.Component {
   constructor() {
   super();
   this.state={
       array: monuments,
       //początkowy stan input
       city:'',
   }
   }
   //łapanie wyszukiwanej frazy
   searchCity=(e)=>{
       this.setState({
           city:e.target.value,
       })
   };

   render(){
       //przypisanie bazy danych do zmiennej filtrującej
       let filterCity = this.state.array.filter((e)=>{
           // określenie wg jakich wartości ma wyszukiwać wyszukiwarka - miejscowość
           return e.MIEJSCOWOSC.toLowerCase().indexOf(this.state.city.toLowerCase())!==-1
       });
       //tworzenie komponentów na podstawie bazy danych
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
             <Head title={"Miejsca światowego dziedzictwa UNESCO w Polsce"}/>
             <div className={'mainInfo'}>Na podstawie <em>Konwencji w sprawie ochrony światowego dziedzictwa kulturalnego i naturalnego</em> (1972) stworzona została lista światowego dziedzictwa UNESCO, obejmująca dobra kulturowe, przyrodnicze lub mieszane. Jest to lista otwarta, aktualizowana każdego roku. Znajdują się na niej miejsca o wybitnej i ponadczasowej wartości dla ludzkości, co wyrażone jest za pomocą orzeczenia wyjątkowej uniwersalnej wartości. Wpisane dobro może składać się z jednego lub kilku komponentów znajdujących się na terenie jednego lub kilku krajów, wyrażających wspólne wartości, określone za pomocą 10 kryteriów (sześciu kulturowych i czterech przyrodniczych). Wniosek o wpis na listę światowego dziedzictwa składa państwo, na terytorium którego znajduje się dane miejsce. Decyzję o wpisie podejmuje Komitet Światowego Dziedzictwa UNESCO po zasięgnięciu opinii organizacji doradczych ICOMOS (Międzynarodowa Rada Ochrony Zabytków) lub IUCN (Międzynarodowa Unia Ochrony Przyrody). Obecnie na liście znajduje się 15 miejsc z terytorium Polski: 14 dziedzictwa kulturowego oraz jedno dziedzictwa przyrodniczego. </div>
             <div className={'mainSection'}>
                 <form className={'browser'}><label>Wyszukaj miasto: <input type={'text'} onChange={this.searchCity}/></label></form>
                 <div className={'objectWrapper'}>
                 <div className={'objectList'}>{list}</div>
                 <Map/>
                 </div>
             </div>
             <Footer/>
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
