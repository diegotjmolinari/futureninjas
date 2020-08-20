import React, { Component } from 'react';
import {
    Header,
    Footer,
    BotaoRosa,
    BotaoVerde,
    BtnWrapper,
    Wrapper,
} from './styles';
import Logo from '../assets/logo.svg';
import LogoBIG from '../assets/logoBIG.svg';
import Consumidor from './../pages/Consumidor';
import Profissional from '../pages/Profissional';

export class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: JSON.parse(Number(localStorage.getItem('page'))) || 0,
        };
    }

    goToLanding = () => {
        this.setState({ pages: 0 });
    };

    goToConsumer = () => {
        this.setState({ pages: 1 });
    };

    goToProfessional = () => {
        this.setState({ pages: 2 });
    };

    componentDidUpdate() {
        localStorage.setItem('page', JSON.stringify(this.state.pages));
    }

    handlePageSwitch = () => {
        switch (this.state.pages) {
            case 0:
                return (
                    <Wrapper>
                        <img style={{ width: 600 }} src={LogoBIG} alt="" />
                        <BtnWrapper>
                            <BotaoRosa onClick={this.goToConsumer}>
                                Quero me candidatar
                            </BotaoRosa>
                            <BotaoVerde onClick={this.goToProfessional}>
                                Quero criar uma oferta
                            </BotaoVerde>
                        </BtnWrapper>
                    </Wrapper>
                );
            case 1:
                return <Consumidor />;
            case 2:
                return <Profissional />;
            default:
                return (
                    <Wrapper style={{ display: this.ShouldIRender() }}>
                        <img src={LogoBIG} alt="" />
                        <BtnWrapper>
                            <BotaoRosa onClick={this.goToConsumer}>
                                Quero me candidatar
                            </BotaoRosa>
                            <BotaoVerde onClick={this.goToProfessional}>
                                Quero criar uma oferta
                            </BotaoVerde>
                        </BtnWrapper>
                    </Wrapper>
                );
        }
    };

    ShouldIRender = () => {
        return this.state.pages === 0 ? 'none' : 'flex';
    };

    WhichColor = () => {
        return this.state.pages === 1 ? '#d8bb95' : '#82b08b';
    };

    render() {
        return (
            <div>
                <Header
                    style={{
                        display: this.ShouldIRender(),
                        backgroundColor: this.WhichColor(),
                    }}
                >
                    <img src={Logo} alt="logo" onClick={this.goToLanding} />
                    <nav>
                        <li onClick={this.goToLanding}>Home</li>
                        <li
                            style={{
                                color: this.state.pages === 1 ? 'white' : '',
                            }}
                            onClick={this.goToConsumer}
                        >
                            Quero Trabalhar
                        </li>
                        <li
                            style={{
                                color: this.state.pages === 2 ? 'white' : '',
                            }}
                            onClick={this.goToProfessional}
                        >
                            Quero Criar Uma Oferta
                        </li>
                    </nav>
                </Header>
                {this.handlePageSwitch()}
                <Footer
                    style={{
                        display: this.ShouldIRender(),
                        backgroundColor: this.WhichColor(),
                    }}
                >
                    <img src={LogoBIG} alt="" />
                    <div>
                        Criado por
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Alexandre-Partida"
                        >
                            <p> Alexandre Gessone</p>,
                        </a>{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Ana-Irala"
                        >
                            <p> Ana Irala</p>,
                        </a>{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Diego-Molinari"
                        >
                            <p>Diego Molinari</p>
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Henrique-Botelho"
                        >
                            <p>Henrique Botelho</p>
                        </a>{' '}
                        e{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/future4code/Victor-Gutierrez"
                        >
                            <p>Victor Gutierrez</p>
                        </a>
                    </div>
                </Footer>
            </div>
        );
    }
}
