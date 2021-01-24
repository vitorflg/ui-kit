export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
    auxiliar: 'Roboto Light',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#000',
    secondary: '#66ed78',
    muted: '#f6f6f6',
    grey: '#dedede',
    yellow: '#FEF7AC',
    red: '#db0404',
  },
  links: {
    clean: {
      textDecoration: 'none',
      color: 'primary',
    },
  },
  buttons: {
    primary: {
      bg: 'secondary',
      color: '#fff',
      border: 'none',
      padding: '15px 30px',
      cursor: 'pointer',
      fontSize: 3,
      borderRadius: 10,
    },
    secondary: {
      bg: 'grey',
      color: 'primary',
      border: 'none',
      padding: '15px 30px',
      cursor: 'pointer',
      fontSize: 3,
      borderRadius: 10,
    },
    disabled: {
      variant: 'buttons.secondary',
      color: '#efefef',
      cursor: 'not-allowed',
    },
  },
  borders: {
    primary: {
      border: '1px solid primary',
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'auxiliar',
    },
  },
  containers: {
    center: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: 'auto',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
      textAlign: 'left',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    p: {
      variant: 'text.display',
      margin: '0 auto',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    a: {
      variant: 'text.link',
      texDecoration: 'none',
    },
  },
};

export default theme;
