import React from 'react'
import Grid from './Grid'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            generation: 0
        }
    }

    render() {
        return(
            <div>
                <h1>The Game of Life</h1>
                <Grid />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        )
    }
}

export default Main