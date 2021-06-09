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
    },
    card: {
      display: 'flex',
      marginBottom: 20,
      marginTop: 20
    },
    cardContent: {
      width: '100%',
      height: '150px',
      flexDirection: 'column',
      padding: 25
    },
    cover: {
      minWidth: 200,
      objectFit: 'cover'
    },
    handle: {
      width: 60,
      height: 20,
      backgroundColor: '#028A0f',
      marginBottom: 7
    },
    date: {
      height: 14,
      width: 100,
      backgroundColor: 'rgba(0,0,0, 0.3)',
      marginBottom: 10
    },
    fullLine: {
      height: 15,
      width: '90%',
      marginBottom: 10,
      backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    halfLine: {
      height: 15,
      width: '50%',
      marginBottom: 10,
      backgroundColor: 'rgba(0,0,0, 0.6)',
    }
  }
}