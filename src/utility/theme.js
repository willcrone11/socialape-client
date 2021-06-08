export default {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#028A0f',
      dark: '#006400',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#cc7000',
      dark: '#654321',
      contrastText: '#fff'
    }
  },
  styleSpread: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: 'center',
    },
    image: {
      margin: '20px auto 20px auto'
    },
    pageTitle: {
      margin: '10px auto 10px auto'
    },
    textField: {
      margin: '10px auto 10px auto'
    },
    button: {
      marginTop: 20,
      position: 'relative'
    },
    customError: {
      color: '#ff0000',
      fontSize: '.8rem',
      marginTop: 15
    },
    progress: {
      position: 'absolute'
    },
    invisibleSeparator: {
      border: 'none',
      margin: 4
    },
    visibleSeparator: {
      width: '100%',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      marginBotton: '20px'
    }
  }
}