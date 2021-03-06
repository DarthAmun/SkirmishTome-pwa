interface Theme {
  buttons: {
    color: string;
    backgroundColor: string;
    disabled: string;
    hoverColor: string;
    height: string;
  };
  input: {
    color: string;
    backgroundColor: string;
  };
  main: {
    backgroundColor: string;
    color: string;
    highlight: string;
  };
  header: {
    backgroundColor: string;
    color: string;
    highlight: string;
  };
  tile: {
    backgroundColor: string;
    backgroundColorLink: string;
    color: string;
    headerColor: string;
    boxShadow: string;
  };
  nav: {
    size: {
      small: {
        width: string;
        height: string;
      };
      medium: {
        width: string;
        height: string;
      };
      large: {
        width: string;
        height: string;
      };
    };
  };
}

export const lightTheme: Theme = {
  buttons: {
    color: "white",
    backgroundColor: "#7033FF",
    disabled: "#E1D0E5",
    hoverColor: "darkgrey",
    height: "20px",
  },
  input: {
    color: "inherit",
    backgroundColor: "white",
  },
  main: {
    backgroundColor: "#F3F5F8",
    color: "",
    highlight: "#8000ff",
  },
  header: {
    color: "white",
    backgroundColor: "#7033FF",
    highlight: "#8000ff",
  },
  tile: {
    backgroundColor: "white",
    backgroundColorLink: "lightslategray",
    color: "darkgrey",
    headerColor: "black",
    boxShadow: "",
  },
  nav: {
    size: {
      small: {
        width: "15em",
        height: "15em",
      },
      medium: {
        width: "15em",
        height: "15em",
      },
      large: {
        width: "15em",
        height: "15em",
      },
    },
  },
};

export const darkTheme: Theme = {
  buttons: {
    color: "#fff",
    backgroundColor: "#202020",
    disabled: "#E1D0E5",
    hoverColor: "#191D38",
    height: "20px",
  },
  input: {
    color: "#435E70",
    backgroundColor: "#202020",
  },
  main: {
    backgroundColor: "#222222",
    color: "",
    highlight: "#435E70",
  },
  header: {
    color: "white",
    backgroundColor: "#222222",
    highlight: "#435E70",
  },
  tile: {
    backgroundColor: "#3E3E3E",
    backgroundColorLink: "#435E70",
    headerColor: "#222222",
    color: "white",
    boxShadow: "",
  },
  nav: {
    size: {
      ...lightTheme.nav.size,
    },
  },
};

export default Theme;
