import React from 'react';
import {
  Card,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  useDisclosure,
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import './nav-bar.css';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef('left');

  return (
    <>
      <Card>
        <CardBody>
          <SimpleGrid columns={2} spacing={10}>
            <Box height="50px">
              <Button
                className="menu"
                ref={btnRef}
                colorScheme="teal"
                onClick={onOpen}
              >
                <i class="fa fa-bars" aria-hidden="true"></i>
              </Button>
            </Box>
            <Box className="logo" height="50px" justifyContent="center">
              <Text>
                <h3>Titulo</h3>
              </Text>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
