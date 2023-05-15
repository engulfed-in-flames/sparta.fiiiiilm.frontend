import {
  Avatar,
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Grid,
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TfiCommentAlt } from "react-icons/tfi";
import { IFollowVars } from "../type";
import { invalidateUser, toggleFollowing } from "../api";
import { useOutletContextUser } from "../hooks/useUser";

export default function Me() {
  const { user: me } = useOutletContextUser();

  const queryClient = useQueryClient();

  const { isOpen: isFollowingOpen, onToggle: onFollowingToggle } =
    useDisclosure();
  const { isOpen: isFollowerOpen, onToggle: onFollowerToggle } =
    useDisclosure();
  const { isOpen: isMyReviewsOpen, onToggle: onMyReviewsToggle } =
    useDisclosure();

  const onClickFollow = async ({ userPk, isFollow }: IFollowVars) => {
    await toggleFollowing({ userPk, isFollow });
    queryClient.refetchQueries(["me"]);
  };
  const onClickInvalidation = async (userPk: number) => {
    await invalidateUser(userPk);
    queryClient.refetchQueries(["me"]);
  };

  return (
    <Box w={"90%"} mt={12} mx={"auto"}>
      {me && (
        <Grid gridTemplateColumns={"1fr 4fr"} columnGap={8}>
          <Flex
            w={"240px"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            aspectRatio={"calc(3/4)"}
            boxShadow={"xl"}
            borderRadius={"md"}
            py={2}
            px={6}
          >
            <Avatar src={me.avatar} size={"2xl"} />
            <Text fontSize={"xl"}>{me.nickname}</Text>
            <Text>{me.intro}</Text>
          </Flex>

          <Flex
            w={"full"}
            minH={"100vh"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            boxShadow={"xl"}
            px={8}
            py={4}
          >
            <Box>
              <Box mb={8}>
                <HStack>
                  <Text fontSize={"xl"}>팔로잉</Text>
                  {isFollowingOpen ? (
                    <IconButton
                      onClick={onFollowingToggle}
                      icon={<FiChevronDown />}
                      aria-label="Open Following List"
                      color={"black"}
                      bg={"white"}
                    />
                  ) : (
                    <IconButton
                      onClick={onFollowingToggle}
                      icon={<FiChevronUp />}
                      aria-label="Close Following List"
                      color={"black"}
                      bg={"white"}
                    />
                  )}
                </HStack>
                <Collapse in={isFollowingOpen} animateOpacity>
                  <UnorderedList
                    w={"95%"}
                    h={"180px"}
                    color="white"
                    px={4}
                    py={2}
                    my="4"
                    mx={"auto"}
                    rounded="md"
                    overflowY={"scroll"}
                  >
                    {me.followings.map((following, index) => (
                      <ListItem key={index} mb={2}>
                        <Flex justifyContent={"space-between"}>
                          <HStack spacing={4}>
                            <Avatar size={"sm"} />
                            <Text color={"black"}>{following.nickname}</Text>
                          </HStack>
                          <Button
                            onClick={() =>
                              onClickFollow({
                                userPk: following.pk,
                                isFollow: false,
                              })
                            }
                            colorScheme="red"
                            mr={8}
                          >
                            취소
                          </Button>
                        </Flex>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Collapse>
              </Box>
              <Box mb={8}>
                <HStack>
                  <Text fontSize={"xl"}>팔로워</Text>
                  {isFollowerOpen ? (
                    <IconButton
                      onClick={onFollowerToggle}
                      icon={<FiChevronDown />}
                      aria-label="Open Follower List"
                      color={"black"}
                      bg={"white"}
                    />
                  ) : (
                    <IconButton
                      onClick={onFollowerToggle}
                      icon={<FiChevronUp />}
                      aria-label="Close Follower List"
                      color={"black"}
                      bg={"white"}
                    />
                  )}
                </HStack>
                <Collapse in={isFollowerOpen} animateOpacity>
                  <UnorderedList
                    w={"95%"}
                    h={"180px"}
                    color="white"
                    px={4}
                    py={2}
                    my="4"
                    mx={"auto"}
                    rounded="md"
                    overflowY={"scroll"}
                  >
                    {me?.followers &&
                      me?.followers.map((follower, index) => (
                        <ListItem key={index} mb={2}>
                          <Flex justifyContent={"space-between"}>
                            <HStack spacing={4}>
                              <Avatar size={"sm"} />
                              <Text color={"black"}>{follower.nickname}</Text>
                            </HStack>
                            <Button
                              onClick={() =>
                                onClickFollow({
                                  userPk: follower.pk,
                                  isFollow: true,
                                })
                              }
                              colorScheme="green"
                              mr={8}
                            >
                              팔로우
                            </Button>
                          </Flex>
                        </ListItem>
                      ))}
                  </UnorderedList>
                </Collapse>
              </Box>
              <Box>
                <HStack>
                  <Text fontSize={"xl"}>내 관람평</Text>
                  {isMyReviewsOpen ? (
                    <IconButton
                      onClick={onMyReviewsToggle}
                      icon={<FiChevronDown />}
                      aria-label="Open My Review List"
                      color={"black"}
                      bg={"white"}
                    />
                  ) : (
                    <IconButton
                      onClick={onMyReviewsToggle}
                      icon={<FiChevronUp />}
                      aria-label="Close My Review List"
                      color={"black"}
                      bg={"white"}
                    />
                  )}
                </HStack>
                <Collapse in={isMyReviewsOpen} animateOpacity>
                  <UnorderedList
                    w={"95%"}
                    h={"60vh"}
                    color="white"
                    px={4}
                    py={2}
                    my="4"
                    mx={"auto"}
                    rounded="md"
                    overflowY={"scroll"}
                  >
                    {me?.reviews.map((review) => (
                      <ListItem key={review.pk} w={"full"} mb={2}>
                        <Flex w={"full"} color={"black"}>
                          <Flex
                            w={"full"}
                            flexDirection={"column"}
                            alignItems={"flex-start"}
                          >
                            <Text fontSize={"xl"} mb={4}>
                              {review.title}
                            </Text>

                            <Text
                              mb={4}
                              whiteSpace={"normal"}
                              wordBreak={"break-all"}
                            >
                              {review.content}
                            </Text>
                            <Flex
                              w={"full"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                            >
                              <HStack>
                                {review.likes === 0 ? (
                                  <>
                                    <HiOutlineHeart color={"red"} />
                                  </>
                                ) : (
                                  <>
                                    <HiHeart color={"red"} />
                                  </>
                                )}

                                <Text>{review.likes}</Text>
                                <TfiCommentAlt />
                                <Text>{review.comments}</Text>
                              </HStack>
                              <Text fontSize={"sm"} color={"gray.600"}>
                                {review.createdAt}
                              </Text>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Divider my={4} />
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Collapse>
              </Box>
            </Box>
            <Flex justifyContent={"flex-end"}>
              <Button mr={2}>수정</Button>
              <Button
                onClick={() => onClickInvalidation(me.pk)}
                colorScheme="red"
              >
                회원탈퇴
              </Button>
            </Flex>
          </Flex>
        </Grid>
      )}
    </Box>
  );
}
