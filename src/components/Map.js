import React from 'react';
import {style} from '../mapstyle';
import monuments from '../database';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            locationArray: monuments
        }

    }

    render(){
        return (

            <div className={'map'} style={{height: "100vh"}} ref={x => this.map = x}></div>


        )
    }


    componentDidMount(){

        // The location of Uluru
        var krakow = {lat: 50.0558725738616, lng: 19.9410154597768};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            this.map, {
                zoom: 6.5,
                center: krakow,
                styles: style
            }
        );

        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: krakow,
            icon: 'http://satoriagroup.pl/wp-content/uploads/2018/11/Unesco_Building.png?fbclid=IwAR1tTrXy0Guemc53TGL_5blLBpigX_hwt2QRfEQhqI2kTgkfQi1o7VoXOa8',
            map: map});

        let locations = this.state.locationArray.map((e)=>{
            return {lat:e.N,lng:e.E};
        });
        let contentString = this.state.locationArray.map((e)=>{
            return e.NAZWA
        });


        var markers=[];

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

        var infowindow=[];

        for (var i=0;i<markers.length;i++){
            infowindow[i] = new google.maps.InfoWindow({
                content: `<h1>${markers[i].title}</h1><p>${(monuments[i].OPIS).substring(0,140)}...</p>`,
                maxWidth: 230
            })
            var addListener = function (i) {
                google.maps.event.addListener(markers[i], 'click', function(){
                    infowindow[i].open(map, markers[i]);
                });
            }
            addListener(i);
        }
    }
}

export {Map};
