import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from '../components/Home/Home';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: '"Montserrat"',
    useNextVariants: true,
  },
});

const BaseLayout = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <div>
        <Switch>

          {/* Unsafe paths */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />


          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </div>
    </MuiThemeProvider>
  </Router>
);

export default BaseLayout;

