import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import styled from 'styled-components';
const Div = styled.div`
width: 90vw;
height: 167vh;
margin-left: 120px;
`
function App() {
    return (
        <Div>
    <div className="App">
              <Router>
                 <Layout/>
            </Router>
        </div>
        </Div>
    );}
export default App;