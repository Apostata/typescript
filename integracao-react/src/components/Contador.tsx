import React, {Component} from 'react'
import ContadorValor from './ContadorValor'

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState {
    valor: number
}

export default class Contador extends Component<IContadorProps, IContadorState> {
    public state = { 
        valor: this.props.valorInicial || 0
    }

    private setValor = (delta:number) =>{
        this.setState({
            valor: this.state.valor + delta
        })
    }

    render(){
        const {valor} = this.state
        return(
            <div>
                <ContadorValor contador={valor}/>
                <button onClick={()=>this.setValor(10)}>+</button>
                <button onClick={()=>this.setValor(-10)}>-</button>
            </div>
        )
    }
}