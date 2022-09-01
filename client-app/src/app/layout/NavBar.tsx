import React from 'react';
import { Menu, Container, Button, Segment } from 'semantic-ui-react';
import { Activity } from '../models/activity';

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Segment>
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" />
                            Reactivities
                    </Menu.Item>
                    <Menu.Item name='Activities' />
                    <Menu.Item>
                        <Button onClick={openForm} positive content='Create Activity' />
                    </Menu.Item>
                </Container>
            </Menu>
        </Segment>
    )
}