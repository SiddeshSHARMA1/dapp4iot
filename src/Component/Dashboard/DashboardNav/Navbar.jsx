import React from 'react';
import {Button } from '@material-ui/core';
import { DashBoard } from '../../Utils/AllSvg';


export default function Navbar() {
  return <>
    <div style={{backgroundColor: '#0C0B0B', height: '90%', borderRadius: '20px', minWidth: '130px'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            
            <p style={{fontSize: '16px',  fontWeight: '600'}}>DAuth.</p>

            
            <div>
                <Button  style={{color: 'white', textTransform: 'none', fontSize: '12px', margin: '10px 0px'}}><DashBoard />  DashBoard</Button>
                <Button  style={{color: 'white', textTransform: 'none', fontSize: '12px', margin: '10px 0px'}}><DashBoard />  DashBoard</Button>
                <Button  style={{color: 'white', textTransform: 'none', fontSize: '12px', margin: '10px 0px'}}><DashBoard />  DashBoard</Button>
            </div>
        </div>
    </div>
  </>;
}
