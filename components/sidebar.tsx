import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import { navMenu, musicMenu } from "../constants/constants";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="200px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" width={200} height={100} />
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.label}>
                <LinkBox>
                  <NextLink href={menu.routes} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.label}>
                <LinkBox>
                  <NextLink href={menu.routes} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.label}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
          <Divider color="gray.900" />
          <Box height="66%" overflowY="auto" paddingY="20px">
          <h1></h1>
          </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
