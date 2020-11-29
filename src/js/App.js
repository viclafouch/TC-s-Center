import React from 'react'
import Popup from '@containers/Popup/Popup'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import muiThemes from '@shared/themes'
import { AnswersProvider } from '@stores/Answers'
import { DefaultProvider } from '@stores/Default'
import { SettingsContext, SettingsProvider } from '@stores/Settings'
import { ThemeProvider } from 'styled-components'

function App(props) {
  return (
    <SettingsProvider initialState={props.settingsInitialStore}>
      <DefaultProvider initialState={props.defaultInitialStore}>
        <AnswersProvider>
          <SettingsContext.Consumer>
            {([settings]) => (
              <MuiThemeProvider theme={muiThemes[settings.theme]}>
                <ThemeProvider theme={muiThemes[settings.theme]}>
                  <CssBaseline />
                  <Popup
                    initalCurrentView={props.settingsInitialStore.startView}
                  />
                </ThemeProvider>
              </MuiThemeProvider>
            )}
          </SettingsContext.Consumer>
        </AnswersProvider>
      </DefaultProvider>
    </SettingsProvider>
  )
}

App.propTypes = {}

export default App
