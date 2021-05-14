
 const [darkMode, setDarkMode] = useState(false);

 const darkTheme = createMuiTheme({
   palette: {
     type: "dark",
   },
 });

 const lightTheme = createMuiTheme({
   palette: {
     primary: {
       main: purple[500],
     },
     secondary: {
       main: '#f44336',
     },
   },
 });

<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Paper style={{ height: "100vh" }}>
    <Switch checked={darkMode} onChange={ () => setDarkMode(!darkMode)} /> 

    <div className="App">
        <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </head>
        <div className="side-bar">
        <NavBar />
        </div>
        <AppStyled>
        <h1 color="secondary" variant="contained">Hello World</h1>
        </AppStyled>
        <div className="main-content"></div>
    </div>
    </Paper>
</ThemeProvider>