import ReactGA from 'react-ga';

function initGA() {
  ReactGA.initialize('UA-105792978-1');
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

function logEvent(category = '', action = '') {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

function logException(description = '', fatal = false) {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}

export { initGA, logPageView, logEvent, logException };
