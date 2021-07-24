import React from "react";
import { State, Card } from './components/State';

const App = () => (
    <div>
        <State />
        <Card cardColor='red' height={100} width={100}/>
        <Card cardColor='green' />
        <Card />
    </div>
);

export default App;