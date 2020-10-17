
import React from 'react'; 
import './App.css';
import HomeIcon from './HomeIcon';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UploadButtons from './UploadButtons';
import ButtonSizes from './ButtonSizes';
import IconLabelButtons from './IconLabelButtons';
import IconButtons from './IconButtons';
import ButtonBases from './ButtonBases'; 
import Types from './Types';
import Box from '@material-ui/core/Box';
import SimpleContainer from './SimpleContainer';
import SpacingGrid from './SpacingGrid';
import CenteredGrid from './CenteredGrid';
import ComplexGrid from './ComplexGrid';
import NestedGrid from './NestedGrid';
import Color from './Color';
import ImageGridList from './ImageGridList';
import TitlebarGridList from './TitlebarGridList';
import SingleLineGridList from './SingleLineGridList';
import AdvancedGridList from './AdvancedGridList';
import BasicButtonGroup from './BasicButtonGroup';
import GroupSizesColors from './GroupSizesColors';
import GroupOrientation from './GroupOrientation';
import SplitButton from './SplitButton';
import DisableElevation from './DisableElevation';
import Checkboxes from './Checkboxes';
import CheckboxLabels from './CheckboxLabels';
import CheckboxesGroup from './CheckboxesGroup';
import FormControlLabelPosition from './FormControlLabelPosition';
import CustomizedCheckbox from './CustomizedCheckbox';
import FloatingActionButtons from './FloatingActionButtons';


function App() {

  return (
    <div >
      <h1> PIAIC Boot Camp 2020 : 31 Material UI Components in One Project </h1>
      <h1> To Help students Learn and Practice of React Material UI Designs</h1>
      <h2> Muhammad Javaid Nawab 17-10-2020</h2>
      
      <Box component="span" m={1}>
        <Button />
      </Box>

      <Box color="text.primary" clone>
        <Button />
      </Box>
      
      <Box color="text.primary">
        {props => <Button {...props} />}
      </Box>
      <HomeIcon />


    
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      
      <HomeIcon fontSize="small" />
      <Icon>star</Icon>
      <HomeIcon />
      <HomeIcon fontSize="large" />
      <HomeIcon style={{ fontSize: 40 }} />
    <br />
       <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon color="secondary">add_circle</Icon>
   
      <Icon fontSize="small">add_circle</Icon>
      <Icon style={{ fontSize: 30 }}>add_circle</Icon>

      <Icon className="fa fa-plus-circle" />
      <Icon className="fa fa-plus-circle" color="primary" />
      <Icon className="fa fa-plus-circle" color="secondary" />
       
      <Icon className="fa fa-plus-circle" fontSize="small" />
      <Icon className="fa fa-plus-circle" style={{ fontSize: 30 }} />
     
      <Icon>add_circle</Icon>
      <Typography variant="srOnly">Create a user</Typography>
      <br />
      <Button variant="contained" color="primary">
        PIAIC Pakistan
     </Button>

     <br />
      <Button variant="contained" color="secondary">
        Aritificial Intelligence
     </Button>
     <br />
      <Button variant="contained" color="primary">
         Internet of Things
     </Button>

     <br />
      <Button variant="contained" color="secondary">
       Block Chain
     </Button>
     <br />
      <Button variant="contained" color="primary">
        Cloud Native Development
     </Button>

     <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>

<Button variant="contained" color="primary" disableElevation>
  Disable elevation
</Button>

<br />
<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons" color="primary">
  Link
</Button>
<br/>
<Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
      <UploadButtons />
      <ButtonSizes />
      <IconLabelButtons />
      <IconButtons/>
      <ButtonBases/>  
      <CheckboxesGroup/>





      <Types/>
      <SimpleContainer/>
      <SpacingGrid/>
      <CenteredGrid/>
      <ComplexGrid />
      <NestedGrid/>
      <Color/>
      <ImageGridList/>
      <TitlebarGridList/>
      <SingleLineGridList />
      <AdvancedGridList/>

      <BasicButtonGroup />
      <GroupSizesColors/>
      <GroupOrientation/>

      <SplitButton/>
      <DisableElevation/>

      <Checkboxes/>
      <CheckboxLabels/>
      <CheckboxesGroup/>
      <FormControlLabelPosition/>
      <CustomizedCheckbox/>
      <FloatingActionButtons/>
    </div>
  );
}

export default App;
