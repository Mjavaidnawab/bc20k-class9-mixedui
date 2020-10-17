import React from 'react';
import { yellow } from '@material-ui/core/colors';
import { ReactComponent as Logo } from "./logo.svg";
import SvgIcon from "@material-ui/core/SvgIcon";
 


function HomeIcon(props) {
  
  return (
    <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
  );
}

export default HomeIcon;
