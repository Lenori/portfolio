import React, {Component} from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

import {Content, Header, Controls, Item} from './styles';

import novenove from '../../assets/99.jpg';
import bonelle from '../../assets/bonelle.jpg';
import journal from '../../assets/journal.jpg';
import realestate from '../../assets/realestate.jpg';
import saedus from '../../assets/saedus.jpg';
import starvai from '../../assets/starvai.jpg';
import uarehome from '../../assets/uarehome.jpg';

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            image: 0,
            images: [novenove, bonelle, journal, realestate, saedus, starvai, uarehome]
        }

        this.changeImage = this.changeImage.bind(this);
    }

    changeImage(mode) {
        if (mode === 'add') {
            if (this.state.image < this.state.images.length - 1)
                this.setState(prevState => {
                    return {image: prevState.image + 1}
                })
            else if (this.state.image === this.state.images.length - 1)
                this.setState({image: 0})
        }

        if (mode === 'sub') {
            if (this.state.image === 0)
                this.setState({image: this.state.images.length - 1})
            else
                this.setState(prevState => {
                    return {image: prevState.image - 1}
                })
        }
    }

    render() {
        return(
            <Content>
                <Header>
                    <h2>Portfolio</h2>

                    <Controls>
                        <FaChevronLeft size={18} color={'#3f9ae2'} onClick={() => this.changeImage('sub')} />
                        <FaChevronRight size={18} color={'#3f9ae2'} onClick={() => this.changeImage('add')} />
                    </Controls>

                </Header>
                <Item>
                    <img src={this.state.images[this.state.image]} alt="portfolio" />
                </Item>
            </Content>
        )
    }
}

export default Portfolio;