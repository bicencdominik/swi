import axios from "axios";
import React from "react";
import { Component } from "react/cjs/react.development";

export class ArticleForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            name: "",
            amount:"",
            pricePerUnit:"",
            unit:""
        }
    }

    

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("http://localhost:8080/article/",this.state);
    }

    render(){
        const { description } = this.state
        function refreshPage() {
            window.location.reload(false);
        };
        return(
            
            <div className="flex max-w-2xl shadow border-b border-green-400 mx-auto my-5">
                <form className="px-8 py-8 mx-auto" onSubmit={this.submitHandler}>
                    <div className="font-thin text-2xl tracking-wider text-center">
                        <h1>Zboží</h1>  
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-400 text-sm font-normal">Jméno</label>
                        <input className="border h-10 w-96 mt-2 px-2 py-2" type="text" name="name" value={this.name} onChange={this.changeHandler}></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-400 text-sm font-normal">Množství</label>
                        <input className="border h-10 w-96 mt-2 px-2 py-2" type="text" name="amount" value={this.amount} onChange={this.changeHandler}></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-400 text-sm font-normal">Cena za jednotku</label>
                        <input className="border h-10 w-96 mt-2 px-2 py-2" type="text" name="pricePerUnit" value={this.pricePerUnit} onChange={this.changeHandler}></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-gray-400 text-sm font-normal">Jednotka</label>
                        <input className="border h-10 w-96 mt-2 px-2 py-2" type="text" name="unit" value={this.unit} onChange={this.changeHandler}></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4 text-center">
                        <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6" type="submit" onClick={refreshPage}>Odeslat</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ArticleForm;