import React, { Component } from 'react';
import { Grommet, Box, Image } from 'grommet';


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundColor: '#FFEBCF', minHeight: '100vh' }}>
                <Grommet>
                    <Box direction='row-responsive' align='center' justify='center'>
                        <Box pad='xlarge' align='center' className=''>
                            <Box height="small" width="large">
                                <Image fit='contain' fill alignSelf='center' src={require('./qt_cor-01.png')} />
                            </Box>
                            <p className='mt-5' style={{ fontSize: 35, color: 'black' }}>QueroTrampo</p>
                            <p className='mt-5' style={{ fontSize: 20, color: 'black' }}>Plataforma em desenvolvimento.</p>
                            <p style={{ fontSize: 15, color: 'black', marginBottom: '7%' }}>Em breve na App Store e Google Play.</p>
                            <Box height="small" width="small">
                                <Image fit='contain' fill alignSelf='center' src={require('./ilustration.png')} />
                            </Box>
                        </Box>
                    </Box>
                </Grommet>

            </div>
        )
    }
}

export default Landing;