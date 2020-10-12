import React from 'react';
import './ItemBox.css';

class ItemBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: props.value
        }
        this.sendItem = this.sendItem.bind(this);
    }
    sendItem(item){
        this.props.onSendItem(item);
        //this.setState({items: this.state.items.filter(x => x !== item)})
    }
    render()
    {
        return (
            <div className="ItemBox">
                {this.props.items.map(x => (
                    <label key={"lbl" + x} onClick={() =>{this.sendItem({"item": x, "key": "asd"})}}>{x}</label>
                ))}
            </div>
          );
    }
}

export default ItemBox;