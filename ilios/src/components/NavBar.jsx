import {
    Flex,
    LinkOverlay,
    Text
} from '@chakra-ui/react';

import logo from '../logo.svg'
function NavBar() {
    return (
        <Flex>
            <LinkOverlay>
                <image src="logo"/>
                <Text>Ilios</Text>
            </LinkOverlay>
        </Flex>
    );
}
export default NavBar;