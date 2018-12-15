import React from 'react';
//komponent i style slidera pobrane z Internetu:
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //info - otwiera slider i opis po kliknięciu w button
            info: false,
            //odpowiada za zmianę tekstu na buttonie: Więcej --> Mniej
            button: true
        }
    }
    //event powodujący wyświetlenie informacji na temat danego obiektu
    handleClick=()=>{
        this.setState({
            info: !this.state.info,
            button: !this.state.button
        });
    };


    render(){
        //stała określająca zdjęcia pobierane do konkretnego komponentu
        const images = [
            {
                original: this.props.photo1
            },
            {
                original: this.props.photo2
            },
            {
                original: this.props.photo3
            }
        ];
        return (
            <div className={'listItem'}><h4>{this.props.name}</h4>
                <div className={'listWrapper'}>
                <div className={'basicInfo'}>
                    <h5>Lokalizacja: <span>{this.props.city}</span></h5>
                    <h5>Data wpisu: <span>{this.props.date}</span></h5>
                </div>
                <div className={'moreButton'}>
                    <button onClick={this.handleClick}>{this.state.button===true?"Więcej...":"Mniej"}</button>
                </div>
                </div>
                {/*warunkowe renderowanie: jeżeli przycisk jest kliknięty, to uruchamia się informacja na temat danego zabytku*/}
                {this.state.info===true&&
                //    tło za sliderem:
                <div className={'monumentBackground'}>
                <div className={'monumentDescription'}>
                    <div className={'itemDescription'}>{this.props.description}</div>
                    {/*div służący do manipulacji szerokośćią wyświetlanego zdjęcia w sliderze*/}
                    <div className={'galleryWrapper'}>
                        <div className={'gallery'}>
                        <ImageGallery items={images} showThumbnails={false}/>
                        </div>
                    </div>
                    <div className={'closeInfo'} onClick={this.handleClick}>X</div>
                </div>
                </div>}
            </div>
        )
    }
}

export {List}