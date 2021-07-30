import React, { Component } from "react"

/**
 * Challenge: Fill in the blanks in the code here (part 1) and in the App.js
 * file (part 2) until the code is working.
 * 
 * Render props are meant to allow us to re-use functionality in multiple places.
 * If your app were never to become more complicated than what we have here, it's
 * probably not worth the effort to create a separate data fetching component.
 * 
 * HOWEVER, if you did find yourself repeating these things (setting a loading state,
 * returning data, etc.) over and over in your app, a component like this might 
 * make sense to build.
 * 
 * Tip: you can use your browser's dev tools to inspect the full React errors 
 * in the console. Click in the menu bar above the editor to access the real
 * right-click menu, or use your browser's shortcut code to get to the dev tools.
 */

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const response = await fetch(this.props.url);
        const data = await response.json();
        this.setState({ data: data, loading: false });
    }

    render() {
        return (
            <>
            {this.props.render(this.state.loading, this.state.data)}
            </>
        );
    };
}

export default DataFetcher