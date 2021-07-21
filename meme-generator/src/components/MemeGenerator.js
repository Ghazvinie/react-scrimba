import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: '',
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
        console.log(value)
        this.setState({
            [name]: value
        });
        console.log(this.state.bottomText)
    }

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


                <button>Generate!</button>
                </form>
            </div>
        );
    };

};

export default MemeGenerator;