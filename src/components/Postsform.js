import React, { Component } from 'react'

export default class Postsform extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            body:""
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:[e.target.value]
        })
    }
    onSubmit(e){
        e.preventDefault()
        const post ={
            title:this.state.title,
            body:this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>ADD A TITLE:</label>
                    <input 
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    ></input>
                    </div>
                    <div>
                    <label>ADD A Description:</label>
                    <textarea
                    name="body"
                    onChange={this.onChange}
                    value={this.state.body}
                    />
                    </div>
                    <button className="btn btn-submit">Submit</button>
                </form>
            </div>
        )
    }
}
