import React from 'react';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: '',
            allMemeImages: []
        };
    };

    async componentDidMount(){
        const response = await fetch('https://api.imgflip.com/get_memes');
        const jsonData = await response.json();

        this.setState({
            allMemeImages: jsonData.data.memes
        });

    }

    render(){
        return (
            <h1>MemeGenerator</h1>
        );
    };

};

export default MemeGenerator;