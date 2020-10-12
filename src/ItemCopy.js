import React from 'react'
import ItemBox from './ItemBox.js'
import './ItemCopy.css'

export default class ItemCopy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [ "aaaa"
                    ,"bbbb"
                    ,"cccc"            
                    ],
            items2:[]
        }
    }
    sendItemTo2 = (payload) =>{
        this.setState(state => {
            return{
                items: state.items.filter(x => x !== payload.item),
                items2: state.items2.concat(payload.item)
            }
        });
    }
    sendItemTo1 = (payload) =>{
        this.setState(state => {
            return{
                items: state.items.concat(payload.item),
                items2: state.items2.filter(x => x !== payload.item)
            }
        });
    }    
    render()
    {
        return(
            <div class="ItemCopy">
                <ItemBox items={this.state.items}  onSendItem={this.sendItemTo2}/>
                <ItemBox items={this.state.items2} onSendItem={this.sendItemTo1}/>
            </div>
        )
    }
}