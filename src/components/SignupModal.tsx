import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { MdAlternateEmail, MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface ISignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: ISignupModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent userSelect={"none"}>
        <ModalHeader textAlign={"center"} py={8}>
          <Text fontSize={32}>회원가입</Text>
        </ModalHeader>
        <ModalCloseButton top={10} right={6} />
        <ModalBody>
          <InputGroup mb={2}>
            <InputLeftElement
              pointerEvents={"none"}
              children={<MdAlternateEmail color={"gray"} size={18} />}
              pt={2}
            />
            <Input
              type={"email"}
              placeholder="이메일"
              required
              variant={"flushed"}
              size={"lg"}
            />
          </InputGroup>
          <InputGroup mb={2}>
            <InputLeftElement
              pointerEvents={"none"}
              children={<MdLock color={"gray"} size={18} />}
              pt={2}
            />
            <Input
              type={"password"}
              placeholder="비밀번호"
              required
              variant={"flushed"}
              size={"lg"}
            />
          </InputGroup>
          <InputGroup mb={2}>
            <InputLeftElement
              pointerEvents={"none"}
              children={<MdLock color={"gray"} size={18} />}
              pt={2}
            />
            <Input
              type={"password"}
              placeholder="비밀번호 확인"
              required
              variant={"flushed"}
              size={"lg"}
            />
          </InputGroup>
          <InputGroup mb={2}>
            <InputLeftElement
              pointerEvents={"none"}
              children={<FaUser color={"gray"} size={18} />}
              pt={2}
            />
            <Input
              type={"text"}
              placeholder="닉네임"
              required
              variant={"flushed"}
              size={"lg"}
            />
          </InputGroup>
          <Button type={"submit"} w={"full"} py={6} my={8}>
            <Text fontSize={18}>등록</Text>
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
