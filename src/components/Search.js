import React, { Component } from 'react';
import ImagesList from './ImagesList';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            hashtagsInput: '',
            images: []
        }
    }

    onHashtagsInputChange = (event) => {
        this.setState({
            hashtagsInput: event.target.value
        })
    }

    searchImage = () => {
        let hashtags = this.state.hashtagsInput.split('#').slice(1).toString();
        fetch(`http://localhost:5001/search/${hashtags}`)
            .then(res => res.json())
            .then(pics => {
                this.setState({
                    images: pics
                })
            })
    }

    render() {
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-30 pa2">
                        <label for="name" className="f6 b db mb2">Search Images</label>
                        <input
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            onChange={(e) => this.onHashtagsInputChange(e)} />
                        <button
                            className="f6 link dim br3 ba bw2 ph3 pv2 mb2 db hot-pink w-100 tc"
                            onClick={this.searchImage}>Search</button>
                    </div>
                    <div className="fl w-70 pa2">
                        <ImagesList images={this.state.images} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
