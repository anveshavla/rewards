import React, {Component} from 'react';
import data from './data.json';
import Display from './Display.js'

export default class Compute extends Component
{
    constructor(props){
        super();
        this.state = {};
    }

    addUniqueMonths = ()=>{
        var months = new Set();
        for(var i =0; i<data.length; i++){
            months.add(data[i].month)
        } 
        return months;
    }

    addUniqueCustomers = ()=>{
        var customers = new Set();
        for(var i =0; i<data.length; i++){
            customers.add(data[i].customerId)
        }
        return customers;     
    }
    
    calculate = () => {       
      const months = Array.from(this.addUniqueMonths());
      var customers = Array.from(this.addUniqueCustomers());
      var result = {};

      for (var i=0; i<customers.length; i++){
        result[customers[i]] = {}  
        for(var j=0; j<months.length; j++){
          result[customers[i]][months[j]] = 0;
        }
        result[customers[i]].total = 0;

      }
      
      for(i=0; i<data.length; i++){
        var rewards = 0;
        if(data[i].price>100){
          rewards = (data[i].price-100) * 2 + 50; 
          }
        else if(data[i].price>50 && data[i].price<=100){
          rewards = data[i].price-50
          }
          result[data[i].customerId][data[i].month] = result[data[i].customerId][data[i].month] + rewards;
          result[data[i].customerId].total = result[data[i].customerId].total + rewards
      }
      this.setState({result : result, months : months})
    }

    render(){
      if(Object.keys(this.state).length === 0){
        return (
          <div>
              <button onClick={this.calculate}><h3>Get Rewards</h3></button> 
          </div>
        )
      }
      return(
        <Display displayData={this.state}></Display>
      ) 
      }     
}