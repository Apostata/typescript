# Integração typescript + react

## usando o Create react app (CRA)
`npx create-react-app my-app --template typescript`
 or
`yarn create react-app my-app --template typescript`

## criando do 0
`yarn add -D @babel/core @babel/preset-react @types/react @types/react-dom babel-loader html-webpack-plugin react react-dom ts-loader typescript webpack webpack-cli webpack-dev-server`

`tsc --init` para criar o tsconfig.json


## Tipos em componentes funcionais
````
import React from 'react'

interface IContadorValorProps{
    contador: number
}

export default (props: IContadorValorProps) =><p>{props.contador}</p>
````


## Tipos em componentes de classe
````
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
````