import React, {Component} from 'react';
import './App.css';

export default class Display extends Component
{
    render(){
        const data = this.props.displayData.result
        const months = this.props.displayData.months
        return (
            <table >
              <tbody>  
                <tr>
                    <th >Customer Id</th>
                    {months.map((month,index)=>{
                        return(<th key={index}>{month}</th>)
                    })}
                    <th>Total</th>
                </tr>
                    {Object.keys(data).map((customer,index)=>{
                        return(
                        <tr key={index}>
                        <td key={index}> {customer} </td>
                        {
                        Object.keys(data[customer]).map((rewards,index2)=>{  
                        return <td key={index2}>{data[customer][rewards]}</td>
                        })}
                        </tr>
                        )
                    })}
              </tbody>  
            </table>  
        )
    }
}
