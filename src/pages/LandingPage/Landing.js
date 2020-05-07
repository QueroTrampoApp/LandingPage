import React, { Component } from 'react';
import { Grommet, Box, Image, Header, Text, Anchor, Avatar, ResponsiveContext, Menu, Meter, Stack, Footer, TextInput } from 'grommet';
import { Menu as MenuIcon, Instagram, FacebookOption, MailOption } from 'grommet-icons';
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";


class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meter: 55,
            email: ''
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#FFFFFF", minHeight: '100vh' }}>
                <Grommet theme={customTheme}>
                    <Header background='#f6f6f6' pad="small">
                        <Image src={require('./qt_cor-01.png')} style={{ width: '7vh' }} />
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <Menu
                                        icon={<MenuIcon />}
                                        items={[
                                            { label: "Em breve", onClick: () => { } },
                                        ]}
                                    />

                                ) : (
                                        <Box direction="row" gap="medium" style={{ marginRight: '0.5vw' }}>
                                            <Anchor label="Em breve" color="#FA842F" href="#" />
                                        </Box>

                                    )}
                        </ResponsiveContext.Consumer>
                    </Header>

                    <ResponsiveContext.Consumer>
                        {responsive =>
                            responsive === "small" ? (
                                <Box background='#f2f2f2' pad='large' align='center'>
                                    <Text textAlign='center' style={{ fontSize: '2.5vh' }}>O
                                        <Text style={{ fontSize: '2.5vh', fontWeight: 'bold' }} color='#03B1C9'> Quero</Text>
                                        <Text style={{ fontSize: '2.5vh', fontWeight: 'bold' }} color='#FA842F'>Trampo </Text>
                        conecta o morador da comunidade à procura de emprego com o empregador de maneira assertiva e personalizada.</Text>
                                    <Box style={{ marginTop: '5vh' }}>
                                        <Image fit='contain' fill alignSelf='center' src={require('./ilustration4.png')} style={{ width: '80vw' }} />
                                    </Box>
                                </Box>
                            ) : (
                                    <Box background='#f2f2f2' pad='large' align='center'>
                                        <Text textAlign='center' style={{ fontSize: '25px' }}>O
                                            <Text style={{ fontSize: '25px', fontWeight: 'bold' }} color='#03B1C9'> Quero</Text>
                                            <Text style={{ fontSize: '25px', fontWeight: 'bold' }} color='#FA842F'>Trampo </Text>
                        conecta o morador da comunidade à procura de emprego com o empregador de maneira assertiva e personalizada.</Text>
                                        <Box style={{ marginTop: '5vh' }}>
                                            <Image fit='contain' fill alignSelf='center' src={require('./ilustration4.png')} style={{ width: '40vw' }} />
                                        </Box>
                                    </Box>
                                )}
                    </ResponsiveContext.Consumer>

                    <Box align='center' pad='large'>
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <Box gap='xsmall'>
                                        <Box direction='row' gap='xsmall'>
                                            <Image src={require('./gif-preto.gif')} style={{ width: '30vw' }} />
                                            <Box alignSelf='center' gap='small' direction='column'>
                                                <Text textAlign='center' style={{ fontSize: '2.5vh' }}>Uma nova forma de procurar empregos.</Text>
                                            </Box>
                                        </Box>
                                    </Box>) : (
                                        <Box gap='medium'>
                                            <Box direction='row' gap='xlarge'>
                                                <Image fit='contain' src={require('./gif-preto.gif')} style={{ width: '10vw' }} />
                                                <Box alignSelf='center' gap='small' direction='column'>
                                                    <Text textAlign='center' style={{ fontSize: '25px' }}>Uma nova forma de procurar empregos.</Text>

                                                </Box>
                                            </Box>
                                        </Box>
                                    )}
                        </ResponsiveContext.Consumer>
                    </Box>

                    <Box background='#FFEBCF' pad='xlarge' align='center' style={{ marginBottom: '4vh' }}>
                        <ResponsiveContext.Consumer>
                            {responsive =>
                                responsive === "small" ? (
                                    <Box>
                                        <Box direction='row' align='center' gap='medium'>
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
                                                        <Text weight='bold' style={{ fontSize: '7vw' }}>
                                                            {this.state.meter}
                                                        </Text>
                                                        <Text style={{ fontSize: '7vw' }}>%</Text>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                            <Box direction='column' gap='small'>
                                                <Text textAlign='center' style={{ fontSize: '2.5vh' }}>
                                                    <Text style={{ fontSize: '2.5vh', fontWeight: 'bold' }} >{this.state.meter}% </Text>
                                                        da plataforma já foi desenvolvida.</Text>
                                                <Text textAlign='center' style={{ fontSize: '2.5vh', marginBottom: '5vh' }}>Inscreva-se para receber avisos exclusivos.</Text>
                                            </Box>
                                        </Box>
                                        <TextInput placeholder='Digite seu email' onChange={event => this.setState({ email: event.target.value })}
                                            icon={<MailOption color='#52CBDC' />} style={{ textAlign: 'center' }} />
                                    </Box>
                                ) : (
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
                                            <Box direction='column' gap='small'>
                                                <Text style={{ fontSize: '25px' }}>
                                                    <Text style={{ fontSize: '25px', fontWeight: 'bold' }} >{this.state.meter}% </Text>
                                                        da plataforma já foi desenvolvida.</Text>
                                                <Text textAlign='center' style={{ fontSize: '25px', marginBottom: '1vh' }}>Inscreva-se para receber avisos exclusivos.</Text>
                                                <TextInput placeholder='Digite seu email' onChange={event => this.setState({ email: event.target.value })}
                                                    icon={<MailOption color='#52CBDC' />} style={{ textAlign: 'center' }} />
                                            </Box>
                                        </Box>
                                    )}
                        </ResponsiveContext.Consumer>
                    </Box>
                    <Footer style={{ position: 'static', bottom: '0', width: '100vw' }} background='#f6f6f6' pad='small' justify='center'>
                        <Box direction='row' gap='xxsmall' justify='center'>
                            <Anchor icon={<Instagram color='#52CBDC' />} />
                            <Anchor icon={<FacebookOption color='#52CBDC' />} />
                        </Box>
                    </Footer>
                </Grommet>

            </div >
        )
    }
}

const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            focus: '#52CBDC'
        }
    },
});
export default Landing;