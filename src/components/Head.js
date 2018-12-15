import React from 'react';

class Head extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       title: this.props.title
   }

   }
   render(){
     return (
         <h1 className={'mainHeader'}>{this.state.title}</h1>
     )
   }

   componentDidMount() {
       let counter = 1;
       this.int=setInterval(()=>{
           counter++;
           if (this.props.title.length < counter){
               clearInterval(this.int)
           } this.setState({
               title: this.props.title.substr(0,counter)
           })
       },100)
   }
    componentWillUnmount() {
        clearTimeout(this.int);
    }
}

 export {Head};