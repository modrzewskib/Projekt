import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info: false,
            button: true
        }
    }
    handleClick=(e)=>{
        this.setState({
            info: !this.state.info,
            button: !this.state.button
        });
    }


    render(){
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
                {this.state.info===true&&
                <div className={'monumentDescription'}>
                    <div className={'itemDescription'}>{this.props.description}</div>
                    <div>
                        <ImageGallery items={images} showThumbnails={false}/>
                    </div>
                    <div className={'closeInfo'} onClick={this.handleClick}>X</div>
                </div>}
            </div>
        )
    }
}

export {List}