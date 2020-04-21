import React, { Component } from 'react';
import { Grommet, Box, Footer, Text } from 'grommet';


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{backgroundColor: '#FFEBCF', height: '100vh'}}>
            <Grommet>
                  {/* <nav className="navbar navbar-light" style={{ backgroundColor: '#ED6F19' }}>
                    <a className='navbar-brand'>
                        <img src={require('./qt_preto.png')} width="50" height="50"></img> 
                     </a> 
                 </nav> */}
                <Box direction='row-responsive' align='center' justify='center'>
                    <Box  pad='xlarge' align='center' className=''>
                    <img src={require('./qt_cor-01.png')} width='15%'></img>
                       {/* <img src={require('./qt_preto.png')} width="15%"></img> */}
                       <p className='mt-5' style={{fontSize: 35, color: 'black'}}>QueroTrampo</p>
                       <p className='mt-5' style={{fontSize: 20, color: 'black'}}>Plataforma em desenvolvimento.</p>
                       <p  style={{fontSize: 15, color: 'black'}}>Em breve na App Store e Google Play.</p>
                    {/* <p style={{fontSize: 40}}>QueroTrampo</p> */}
                    </Box>
                </Box>
               
                <Footer style={{position:'absolute', bottom: 0, width:'100%'}}justify='center' background='#FAAC75' pad='small'>
                    <Text textAlign="center" size="small" color='black'> ©2020 - QueroTrampo</Text>
                </Footer>
            </Grommet>
            
            </div>
        )
    }
}

export default Landing;