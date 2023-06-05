import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface ITabs {
  selectedtab: (value: string) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#fed34f',
    },
    secondary: {
      main: '#999999',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fed34f",
          },
          color: "#999999"
        }
      }
    }
  }
});


const ColorTabs: React.FC<ITabs> = ({ selectedtab }) => {
  const [value, setValue] = React.useState('people');
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    selectedtab(newValue)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="primary tabs example"
        >
          <Tab value="people" label="Personagens" sx={{ color: value === 'people' ? 'primary.main' : 'secondary.main' }} />
          <Tab value="planets" label="Planetas" sx={{ color: value === 'planets' ? 'primary.main' : 'secondary.main' }} />
          <Tab value="films" label="Filmes" sx={{ color: value === 'films' ? 'primary.main' : 'secondary.main' }} />
          <Tab value="species" label="Espécies" sx={{ color: value === 'species' ? 'primary.main' : 'secondary.main' }} />
          <Tab value="vehicles" label="Veículos" sx={{ color: value === 'vehicles' ? 'primary.main' : 'secondary.main' }} />
          <Tab value="starships" label="Naves" sx={{ color: value === 'starships' ? 'primary.main' : 'secondary.main' }} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}

export default ColorTabs;
