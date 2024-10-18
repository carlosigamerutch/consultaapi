// components/Card.js
import React, { Component } from 'react';

class Card extends Component {
    state = {
        name: "",
        imageUrl: "",
        pokemonIndex: "",
    }

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `http://pokeapi.co/media/sprites/pokemon/${pokemonIndex}.png`;
        this.setState({ name, imageUrl, pokemonIndex });
    }

    render() {
        return (
            <div className="card">
                <img src={this.state.imageUrl} alt={this.state.name} />
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}

export default Card;