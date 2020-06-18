import React, {Component} from 'react';

import {Content} from './styles';

import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';

class Home extends Component {
    render() {
        return(
            <>  
                <Contact />
                <Content>
                    <h1><span>Olá!</span> Eu sou o <span>Leo Lenori</span>.</h1>

                    <p>ReactJS <span>•</span> NodeJS</p>
                </Content>

                <Portfolio />
            </>
        )
    }
}

export default Home;