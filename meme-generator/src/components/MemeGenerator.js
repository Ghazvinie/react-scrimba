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
        this.setState({
            [name]: value
        });
    };

    handleSubmit(e){
        console.log('hei')
        e.preventDefault();
        const randomIdx = Math.floor(Math.random() * this.state.allMemeImages.length + 1)
        console.log(randomIdx)
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


                <button onClick={() => this.handleSubmit()}>Generate!</button>
                </form>
                <div className='random-img'>
                    <img src={this.state.randomImage} alt='random meme' />
                </div>
            </div>
        );
    };

};

export default MemeGenerator;