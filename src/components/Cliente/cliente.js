import React, { Component } from 'react';
import ServicesContainer from './../ContainerServiços/containerservicos';
import { Container } from './styles';
import { Fab, TextField } from '@material-ui/core';

export default class Cliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            valMax: 10000,
            valMin: 0,
            toggle: false,
        };
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    };

    handleValMax = (e) => {
        this.setState({ valMax: e.target.value });
    };

    handleValMin = (e) => {
        this.setState({ valMin: e.target.value });
    };

    render() {
        return (
            <>
                <Fab
                    style={{ position: 'relative' }}
                    variant="extended"
                    onClick={() =>
                        this.setState({ toggle: !this.state.toggle })
                    }
                >
                    Filtros
                </Fab>
                <Container
                    style={{
                        display: this.state.toggle === true ? 'flex' : 'none',
                    }}
                >
                    <span id="filters">
                        <TextField
                            iid="standard-basic"
                            label="Busque um serviço"
                            type="text"
                            value={this.state.search}
                            onChange={this.handleSearch}
                        />
                    </span>
                    <span>
                        <TextField
                            id="standard-basic"
                            label="Valor Mínimo"
                            onChange={this.handleValMin}
                            type="number"
                        />
                    </span>
                    <span>
                        <TextField
                            id="standard-basic"
                            label="Valor Máximo"
                            onChange={this.handleValMax}
                            type="number"
                        />
                    </span>
                </Container>
                <ServicesContainer
                    searchByTitle={this.state.search}
                    valMax={this.state.valMax}
                    valMin={this.state.valMin}
                />
            </>
        );
    }
}
