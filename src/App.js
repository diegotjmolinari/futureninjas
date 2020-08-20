//
//
// ATENÇÃO: Não é necessário mexer neste arquivo.
// Novos componentes devem ir dentro do componente AppContainer
//
//

import React from 'react'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { MuiThemeProvider, createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AppContainer } from './components/AppContainer'

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	insertionPoint: document.getElementById('jss-insertion-point'),
})

const theme = createMuiTheme()

function App() {
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<div>
					<AppContainer></AppContainer>
				</div>

				
			</MuiThemeProvider>
		</JssProvider>
	)
}

export default App