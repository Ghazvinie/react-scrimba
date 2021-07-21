import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImages: []
        };
        this.handleChange = this.handelChange.bind(this);
    };

    async componentDidMount() {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const jsonData = await response.json();

        this.setState({
            allMemeImages: jsonData.data.memes
        });
    };

    handelChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const randomIdx = Math.floor(Math.random() * this.state.allMemeImages.length)
        console.log(this.state.allMemeImages[0])
        this.setState({
            randomImage: this.state.allMemeImages[randomIdx].url
        });
    };

    render() {
        return (
            <div>
                <form className='meme-form'>
                    <input
                        type='text'
                        name='topText'
                        placeholder='Top Text'
                        onChange={this.handleChange}
                        value={this.state.topText} />

                    <input
                        type='text'
                        name='bottomText'
                        placeholder='Bottom Text'
                        onChange={this.handleChange}
                        value={this.state.bottomText} />


                    <button onClick={(e) => this.handleSubmit(e)}>Generate!</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt='random meme' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    };

};

export default MemeGenerator;