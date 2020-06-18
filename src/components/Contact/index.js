import React, {Component} from 'react';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa'

import {Content} from './styles';

class Contact extends Component {

    render() {
        return(
            <Content>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5561982889782?text=Olá!%20Vi%20seus%20ótimos%20sites%20e%20gostaria%20de%20ser%20seu%20próximo%20cliente!"><FaWhatsapp size={18} color={'#f5f5f5'} /></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:leolenori@gmail.com"><FaEnvelope size={18} color={'#f5f5f5'} /></a>
            </Content>
        )
    }
}

export default Contact;