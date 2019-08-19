import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import NoMatch from './components/pages/NoMatch';
import Confirmation from './components/pages/Confirmation';
import Layout from './components/pages/Layout/Layout';
import NavigationBar from './components/navigation/NavigationBar/NavigationBar';

// -----left menu------
import Home from './components/pages/SidebarMenu/Home';
import HomeUser from './components/pages/SidebarMenu/HomeUser';
import EntryRules from './components/pages/SidebarMenu/EntryRules';
import EntryForm from './components/pages/SidebarMenu/EntryForm';
import Payment from './components/pages/SidebarMenu/Payment';
import Status from './components/pages/SidebarMenu/Status';
import Results from './components/pages/SidebarMenu/Results';
import Contacts from './components/pages/SidebarMenu/Contacts';
import CharactersPage from './components/pages/SidebarMenu/CharactersPage';
import NewCharacterPage from './components/pages/SidebarMenu/NewCharacterPage';

// -----right menu------
import SignIn from './components/pages/NavbarMenu/SignIn';
import ForgotPassword from './components/pages/NavbarMenu/ForgotPassword';
import ResetPassword from './components/pages/NavbarMenu/ResetPassword';
import Password from './components/pages/NavbarMenu/Password';
import SignUp from './components/pages/NavbarMenu/SignUp';

import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import NewBookPage from './components/pages/NewBookPage';

import messages from './localization/messages';
import { fetchCurrentUserRequest } from './actions/users';

class App extends React.Component {
  componentDidMount() {
    if (this.props.isAuthenticated) this.props.fetchCurrentUserRequest();
  }
  render() {
    const { location, isAuthenticated, loaded, lang } = this.props;
    return (
      <IntlProvider locale={lang} key={lang} messages={messages[lang]}>
        <React.Fragment>
          {/* <Loader loaded={loaded}> */}
          <NavigationBar />
          <Layout>
            <Switch>
              <Route location={location} path="/" exact component={Home} />
              <Route location={location} path="/Home" exact component={Home} />
              <Route
                location={location}
                path="/confirmation/:token"
                exact
                component={Confirmation}
              />
              <UserRoute
                location={location}
                path="/HomeUser"
                exact
                component={HomeUser}
              />
              <UserRoute
                location={location}
                path="/characters"
                exact
                component={CharactersPage}
              />
              <UserRoute
                location={location}
                path="/characters/new"
                exact
                component={NewCharacterPage}
              />
              <UserRoute
                location={location}
                path="/books/new"
                exact
                component={NewBookPage}
              />
              <Route
                location={location}
                path="/EntryRules"
                exact
                component={EntryRules}
              />
              <Route location={location} path="/EntryForm" exact component={EntryForm} />
              <Route location={location} path="/Payment" exact component={Payment} />
              <Route location={location} path="/Status" exact component={Status} />
              <Route location={location} path="/Results" exact component={Results} />
              <Route location={location} path="/Contacts" exact component={Contacts} />
              <GuestRoute location={location} path="/SignIn" exact component={SignIn} />
              <GuestRoute
                location={location}
                path="/ForgotPassword"
                exact
                component={ForgotPassword}
              />
              <GuestRoute
                location={location}
                path="/ResetPassword/:token"
                exact
                component={ResetPassword}
              />
              <Route location={location} path="/Password" exact component={Password} />
              <GuestRoute location={location} path="/SignUp" exact component={SignUp} />
              <Route location={location} component={NoMatch} />
            </Switch>
          </Layout>
          {/* </Loader> */}
        </React.Fragment>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUserRequest: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.locale.lang,
  };
}

export default connect(
  mapStateToProps,
  { fetchCurrentUserRequest },
)(App);
