import { useState } from 'react'
import { GlobalStyle } from './global'
import {
    Body,
    Bullet,
    Bullets,
    Container,
    MenuContainer,
    MenuItem,
    Navbar,
    Perfil,
    PerfilCard,
    RightNav,
} from './styles'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <GlobalStyle />
            <Container>
                <Navbar>
                    <MenuContainer>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>Skills</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </MenuContainer>
                </Navbar>
                <Body>
                    <Perfil></Perfil>
                    <PerfilCard>
                        <div>
                            <h3>Sabrina Midori Assato</h3>
                            <p>Junior Developer</p>
                        </div>
                        <div>
                            <p>MBA Software Engeneering</p>
                            <p>Frontend Developer</p>
                        </div>
                    </PerfilCard>
                </Body>
                <RightNav>
                    <Bullets>
                        <Bullet></Bullet>
                        <Bullet></Bullet>
                        <Bullet></Bullet>
                        <Bullet></Bullet>
                    </Bullets>
                </RightNav>
            </Container>
        </>
    )
}

export default App
