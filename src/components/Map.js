import React from 'react';
import {style} from './mapstyle';
import monuments from '../database';

//pobranie bazy danych jako state
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            locationArray: monuments
        }

    }

    render(){
        return (
            //określenie mapy poprzez referencję
            <div className={'map'} style={{height: "500px"}} ref={x => this.map = x}></div>


        )
    }


    componentDidMount(){
        //stworzenie mapy za pomocą zmiennej
        var center = {lat: 52, lng: 19};
        var map = new google.maps.Map(
            this.map, {
                zoom: 6,
                center: center,
                styles: style
            }
        );

        //pobranie do tablicy szerokości i długości geogr. z bazy danych
        let locations = this.state.locationArray.map((e)=>{
            return {lat:e.N,lng:e.E};
        });

        //określenie tablicy, do której wrzucane są lokalizacje
        var markers=[];
        //pętla ustawia wszystkie znaczniki na mapie
        for (var i =0; i<locations.length; i++){
            markers[i] = new google.maps.Marker({
                position: locations[i],
                icon: 'http://satoriagroup.pl/wp-content/uploads/2018/11/Unesco_Building.png?fbclid=IwAR1tTrXy0Guemc53TGL_5blLBpigX_hwt2QRfEQhqI2kTgkfQi1o7VoXOa8',
                map: map,
                title: monuments[i].NAZWA,
                id: i,
                animation: google.maps.Animation.DROP,
            });
        }
        //dodanie eventu po kliknięciu otwierający informację przy znaczniku
        var infowindow=[];
        //pętla po markerach - dodanie infowindow do każdego markera
        for (var i=0;i<markers.length;i++){
            infowindow[i] = new google.maps.InfoWindow({
                content: `<h1>${markers[i].title}</h1><p>${(monuments[i].OPIS).substring(0,140)}...</p>`,
                maxWidth: 230
            });
            //wyświetlenie infowindow po kliknięciu
            var addListener = function (i) {
                google.maps.event.addListener(markers[i], 'click', function(){
                    infowindow[i].open(map, markers[i]);
                });
            };
            addListener(i);
        }
    }
}

export {Map};
