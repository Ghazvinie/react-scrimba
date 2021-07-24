import React from "react";
import { State, Card } from './components/State';

const App = () => (
    <div>
        <State />
        <Card cardColor='red'/>
        <Card cardColor='green'/>
        <Card />
    </div>
);

export default App;