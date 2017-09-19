module.exports = {
  Arguments: {
    heading: {
      display: 'none',
    },
  },
  SectionHeading: {
    root: {
      marginBottom: 0,
    },
    isPrimary: {
      height: 0,
      overflow: 'hidden',
    },
    heading1: {
      display: 'none',
    },
    toolbar: {
      display: 'none',
    },
  },
  StyleGuide: {
    content: {
      maxWidth: 'auto',
    },
    footer: {
      maxWidth: 'auto',
      margin: 'auto',
    },
  },
  TabButton: {
    button: {
      borderBottom: '2px solid #50596c',
    },
  },
  ReactComponent: {
    root: {
      borderTop: '1px solid #eee',
      paddingTop: 22,
    },
    header: {
      marginBottom: 8,
    },
  },
  Logo: {
    logo: {
      color: 'white',
    },
  },
  Table: {
    table: {
      border: '1px solid #dbdcdd',
      background: 'white',
      marginBottom: 0,
    },
    cellHeading: {
      background: '#fefefe',
      padding: 10,
    },
    cell: {
      padding: 10,
    },
  },
  Para: {
    para: {
      '&:last-of-type': {
        marginBottom: 0,
      },
    },
  },
  Link: {
    link: {
      color: 'white',
      '&:link': {
        color: 'white',
      },
      '&:visited': {
        color: 'white',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  Section: {
    root: {
      maxWidth: 'auto',
      margin: 'auto',
    },
  },
  Markdown: {
    blockquote: {
      background: 'white',
      color: '#6a737d',
      padding: '1em',
      borderLeft: '4px solid #dfe2e5',
      marginLeft: 0,
      marginRight: 0,
    },
    pre: {
      background: 'white',
    },
    code: {
      color: '#5c7080',
      fontSize: '80%',
      boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2)',
      background: 'rgba(255, 255, 255, 0.7)',
      padding: '2px 5px',
      // old styles
      margin: 0,
      // padding: 0, //'1px 4px',
      // background: '#f3f4f4',
      border: 0,
      borderRadius: 3,
      '&:empty': {
        '&:after': {
          content: '"(empty)"',
          fontStyle: 'italic',
        },
      },
    },
  },
  Pathline: {
    pathline: {
      background: '#eee',
      padding: '10px 15px',
      borderRadius: 3,
      // display: 'flex',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  Code: {
    code: {
      fontSize: '85%',
      margin: 0,
      padding: '2px 4px 1px',
      background: 'rgba(27,31,35,0.05)',
      borderRadius: 3,
      '&:empty': {
        '&:after': {
          content: '"(empty)"',
          fontStyle: 'italic',
        },
      },
    },
  },
};
