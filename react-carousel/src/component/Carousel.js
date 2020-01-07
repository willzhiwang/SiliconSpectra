import React, { Component } from 'react';
import ChangePhoto from './ChangePhoto';
import axios from 'axios'
export default class Carousel extends Component {
    state = {
        photos: [],
        index: 1
    }
    componentDidMount = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(
                data => {
                    for (let i = 0; i < 5; i++) {
                        this.setState({
                            photos: [...this.state.photos, data[i].url]
                        })
                    }
                }
            ).then(() => {
                console.log(this.state.photos[0])
            });

        // for (let i = 1; i < 6; i++) {
        //     let response = await axios(`https://jsonplaceholder.typicode.com/photos/${i}`)
        //     this.setState({
        //         photos: [...this.state.photos, response.data.url]
        //     })
        // }
    }
    minusHandler = (e) => {
        //console.log(this.state.index);
        if (this.state.index > 0) {
            this.setState({
                index: this.state.index - 1
            })
            console.log(e);
        }
    }
    plusHandler = (e) => {
        if (this.state.index < 4) {
            this.setState({
                index: this.state.index + 1
            })
            console.log(e);
        }
    }
    searchHandler = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value >= 0 && e.target.value <= 4) {
                this.setState({
                    index: e.target.value
                })
            }
        }

    }
    render() {
        const { photos, index } = this.state
        return (
            <div>
                <img src={photos[index]} alt='dd'></img>
                <ChangePhoto
                    minus={this.minusHandler}
                    plus={this.plusHandler}
                    search={this.searchHandler}
                />
            </div>
        )
    }
}
