import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  return (
    <HStack
      userSelect={"none"}
      w={"full"}
      px={12}
      mb={12}
      boxShadow={"base"}
      justifyContent={"space-between"}
    >
      <Box position={"relative"} w={100} h={100} overflow={"hidden"}>
        <Link to={"/"}>
          <Image
            src="/images/logo.png"
            position={"absolute"}
            top={-10}
            left={0}
            height={200}
            objectFit={"cover"}
          />
        </Link>
      </Box>
      <HStack>
        <IconButton
          icon={<FaMoon />}
          aria-label="Night Mode"
          mr={2}
          size={"lg"}
          bg={"white"}
        />
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<CgMenu />}
            w={24}
            h={12}
            px={4}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"md"}
          >
            <Avatar size={"sm"} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onLoginOpen}>
              <Text fontSize={24}>로그인</Text>
            </MenuItem>
            <MenuItem onClick={onSignupOpen}>
              <Text fontSize={24}>회원가입</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </HStack>
  );
}
