import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { isUserLoading, user, isLoggedIn } = useUser();
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

  const queryClient = useQueryClient();
  const toast = useToast();

  const onLogout = () => {
    Cookies.remove("access");
    Cookies.remove("refresh");
    queryClient.refetchQueries(["me"]);
    toast({
      title: "로그아웃",
      status: "success",
      position: "bottom-right",
      duration: 3000,
    });
  };
  return (
    <HStack
      userSelect={"none"}
      w={"full"}
      px={12}
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
      <Flex>
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
            {!isUserLoading && !isLoggedIn ? (
              <>
                <MenuItem onClick={onLoginOpen}>
                  <Text fontSize={18}>로그인</Text>
                </MenuItem>
                <MenuItem onClick={onSignupOpen}>
                  <Text fontSize={18}>회원가입</Text>
                </MenuItem>
              </>
            ) : (
              <>
                <Link to="/me">
                  <MenuItem>
                    <Text fontSize={16}></Text>마이페이지
                  </MenuItem>
                </Link>
                <MenuItem onClick={onLogout}>
                  <Text fontSize={16} color={"gray.400"}>
                    로그아웃
                  </Text>
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignupModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </HStack>
  );
}
