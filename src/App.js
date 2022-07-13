import './App.css';
import BasicInfo from './components/BasicInfo';
import React, { Component } from 'react'
//constructors are used when we need to manipulate the state 
//to mmake constructor work we need super
//this.state is an object that init the state

export default class App extends Component { 
  constructor (){
    super() 
    this.state = { 
      person: [{
         Date: "07/13/2022",
         Name: "Ananyeli Batista",
         Number: "347-777-7777"
      },
        {
          Date: "07/14/2022",
         Name: "Oscar Viquez",
         Number: "347-777-7878"
        },
       { Date: "07/15/2022",
        Name: "Lucia Bah",
        Number: "347-777-7979"
      }]
    }
  }
  render() {
    return ( 
      <div>
        {
          this.state.person.map(person => {
            return (
              <BasicInfo
              Date= {person.Date}
              Name= {person.Name}
              Number= {person.Number}
              />
            )
          }) 
        }
        

      </div>
      
    )
  }
}





