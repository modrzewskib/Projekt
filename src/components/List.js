import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            info: false
        }
    }
    handleClick=(e)=>{
        this.setState({
            info: !this.state.info
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
            <div><h4>{this.props.name}</h4>
                <h5>{this.props.city}</h5>
                <h5>Data wpisu: {this.props.date}</h5>
                <button onClick={this.handleClick}>Zobacz opis</button>
                {this.state.info===true&&
                <div className={'monumentDescription'}>
                    <div style={{
                        width:'50%',
                    }}>{this.props.description}</div>
                    <div style={{
                        width:'50%',
                        heigth: '200px',
                        margin: '0 auto'
                    }}>
                        <ImageGallery items={images} showThumbnails={false}/>
                    </div>
                    <div onClick={this.handleClick}>X</div>
                </div>}
            </div>
        )
    }
}

export {List}