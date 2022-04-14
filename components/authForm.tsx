import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";
const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  // const handleClick = () => setShow(!show);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };
  return (
    <Box height="100vh" width="100vw" bg="gray.200" color="white">
      <Flex justify="center" align="center" height="auto" paddingTop="150px">
        <NextImage src="/logoBlack.svg" width={250} height={150} />
      </Flex>
      <Flex justify="center" align="center" height="auto" direction="column">
        <Box
          padding="50px"
          bg="gray.900"
          borderRadius="10px"
          width="25rem"
          height="250px"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} align="center">
              <Input
                placeholder="email"
                type="email"
                size="md"
                onChange={(e) => setEmail(e.target.value)}
                width="70%"
              />

              <Input
                placeholder="password"
                type={show ? "text" : "password"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                width="70%"
              />
              {/*
               <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handl0eClick}>
                  {show ? `🙈` : "🙉"}
                </Button>
              </InputRightElement>
            </InputGroup> */}
              <Button
                width="50%"
                type="submit"
                bg="gray.700"
                isLoading={isLoading}
                loadingText="Loading..."
                sx={{
                  "&:hover": {
                    bg: "gray.800",
                  },
                }}
              >
                {mode}
              </Button>
            </Stack>
          </form>
        </Box>
        <Box color="gray.900" paddingTop="20px">
          Don't you have an account?
          <NextLink href="/signup" passHref>
            <Link> Signup</Link>
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
