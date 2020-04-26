import React, { Component } from 'react';
import { Grommet, Box, Image, Header, Text, Anchor, Avatar, ResponsiveContext, Menu, Meter, Stack, Footer } from 'grommet';
import { Menu as MenuIcon, Instagram, Facebook, FacebookOption } from 'grommet-icons';


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { meter: '45' }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#FFFFFF", minHeight: '100vh' }}>
                <Grommet>
                    <Header background="#f6f6f6" pad="small">
                        <Image src={require('./qt_cor-01.png')} style={{ width: '7vh' }} />
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (

                                    <Menu
                                        icon={<MenuIcon />}
                                        items={[
                                            { label: "Home", onClick: () => { } },
                                            { label: "Quem somos", onClick: () => { } },
                                            { label: "Proposta", onClick: () => { } },
                                            { label: "Contato", onClick: () => { } }
                                        ]}
                                    />

                                ) : (
                                        <Box direction="row" gap="medium" style={{ marginRight: '0.5vw' }}>
                                            <Anchor label="Home" color="#FA842F" href="#" />
                                            <Anchor label="Quem somos" color="#FA842F" href="#" />
                                            <Anchor label="Proposta" color="#FA842F" href="#" />
                                            <Anchor label="Contato" color="#FA842F" href="#" />
                                        </Box>

                                    )}

                        </ResponsiveContext.Consumer>
                    </Header>
                    {/* <Box background="#FFEBCF" direction='row-responsive' align='center' justify='center'>
                        <Box pad='larges' align='center' className=''>
                            <Box height="medium" width="large" direction="row" gap="medium">
                                <Image fit='contain' fill alignSelf='center' src={require('./qt_cor-01.png')} />
                                <Box direction="column" alignSelf="center">
                                    <Text size="8vh" color="#03B1C9">Quero</Text>
                                    <Text size="8vh" color="#FA842F">‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‎Trampo</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box> */}
                    <Box pad='large' align='center'>
                        <Text style={{ fontSize: '25px' }}>O
                        <Text style={{ fontSize: '25px', fontWeight: 'bold' }} color='#03B1C9'> Quero</Text>
                            <Text style={{ fontSize: '25px', fontWeight: 'bold' }} color='#FA842F'>Trampo </Text>
                        conecta o morador da comunidade à procura de emprego com o empregador de maneira assertiva e personalizada.</Text>
                        <Box direction='row' style={{ marginTop: '10vh', marginBottom: '5vh' }}>
                            <Box height='small' width='small'>
                                <Image fit='contain' fill alignSelf='center' src={require('./ilustration2.png')} />
                            </Box>
                            <Box height='small' width='small' >
                                <Image fit='contain' fill alignSelf='center' src={require('./ilustration3.png')} />
                            </Box>
                        </Box>
                    </Box>

                    <Box background='#FFEBCF' pad='large' align='center'>
                        <Box direction='row' align='center' gap='xlarge'>
                            <Box align='center' alignSelf='center'>
                                <Stack anchor='center'>
                                    <Meter
                                        type="circle"
                                        background="light-2"
                                        values={[{ value: this.state.meter, color: "#52CBDC" }]}
                                        size="small"
                                        thickness="small"
                                    />
                                    <Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
                                        <Text weight='bold' style={{ fontSize: '5vh' }}>
                                            {this.state.meter}
                                        </Text>
                                        <Text style={{ fontSize: '3vh' }}>%</Text>
                                    </Box>
                                </Stack>
                            </Box>
                            <Text style={{ fontSize: '25px' }}>
                                <Text style={{ fontSize: '25px', fontWeight: 'bold' }} >45% </Text>
                            da plataforma já foi desenvolvida.<br /><br />Acompanhe-nos nas redes sociais para ficar por dentro das novidades.</Text>
                        </Box>
                    </Box>
                    <Footer style={{position: 'absolute', bottom: '0', width: '100vw'}} background='#f6f6f6' pad='small' justify='center'>

                        <Box direction='row' gap='xxsmall' justify='center'>
                            <Anchor icon={<Instagram color='#52CBDC' />} />
                            <Anchor icon={<FacebookOption color='#52CBDC' />} />
                        </Box>

                    </Footer>
                </Grommet>

            </div>
        )
    }
}

export default Landing;