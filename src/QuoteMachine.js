import React, { Component } from 'react';
class QuoteMachine extends Component {
  constructor(){
    super();
    this.state = {
      quote : '',
      author : '',
      color : {
        r : '',
        g : '',
        b : '',
        a : ''
      }
    }
    this.END_POINT = 'https://talaikis.com/api/quotes/random/'
  }
  handleClick = () =>{
    var bgColor= {
    r : Math.floor(Math.random() * 256),
    g : Math.floor(Math.random() * 256),
    b : Math.floor(Math.random() * 256),
    a : Math.random()
  }
  if(bgColor.a<0.5){
    bgColor.a=bgColor.a+0.5;
  }
    fetch(this.END_POINT)
    .then(response => response.json())
    .then(data =>{
      this.setState({data}, () => {
        this.setState({quote : data.quote, author : data.author, color: bgColor})
      })
      document.getElementById("boxy").style.backgroundColor = "rgba(" + this.state.color.r + ", " + this.state.color.g + ", " + this.state.color.b + ", " + (1-this.state.color.a) + ")";
      document.body.style.background = "rgba(" + this.state.color.r + ", " + this.state.color.g + ", " + this.state.color.b + ", " + (1-this.state.color.a) + ")";
      console.log(this.state.color.a)
    })
  }
  render() {
    return(
      <div id='quote-box' className='container text-center vertical-center'>
        <div className='row align-middle'>
          <div id='boxy' className='col-sm-8 centering rounded-circle'>
            <div className='center-text'>
              <div className='text-quote'>
              <h3>Quote Machine</h3>
              <button id ='new-quote' className='btn btn-outline-dark'onClick={this.handleClick}>
              Click to get a random Quote!
              </button>
              <br />
              <p id='text' className='text-body'>{this.state.quote}</p>
              </div>
              <p id='author' className='text-body'>--{this.state.author}--</p>
              <a id='tweet-quote' href="twitter.com/intent/tweet"><button className='btn btn-outline-dark btn-sm'>Tweet</button></a>
              </div>
          </div>
        </div>
      </div>
    )};
  }

export default QuoteMachine;
