import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import WayBaseContactInformation from './WayBaseContactInformation';
import WayBaseListingBasics from './WayBaseListingBasics';
import WayBaseListingDetails from './WayBaseListingDetails';
import WayBasePeopleAndImages from './WayBasePeopleAndImages';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function WayBaseListingInformation() {
//   const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar style={{backgroundColor: 'rgb(29, 193, 221)'}} position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Contact Information" href="/#" {...a11yProps(0)} />
          <LinkTab label="Basic Information" href="/#" {...a11yProps(1)} />
          <LinkTab label="Listing Details" href="/#" {...a11yProps(2)} />
          <LinkTab label="Listing Details" href="#" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <WayBaseContactInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WayBaseListingBasics/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WayBaseListingDetails />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WayBasePeopleAndImages />
      </TabPanel>
    </Container>
  );
}
