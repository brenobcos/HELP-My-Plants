import {
  Flex,
  Image,
  theme,
  Icon,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAlignRight } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/LogoFull-LightMode.svg";
import { useAuth } from "../../providers/Auth/index";
import EditUser from "../Modal/ModalEditUser";

interface HeaderProps {
  firstLink: string;
  secondLink?: string;
  firstText: string;
  secondText?: string;
  firstIcon?: IconType;
  iconLink?: string;
  firstLabel?: string;
}

export function Header({
  firstText,
  secondText,
  firstLink,
  secondLink,
  firstIcon,
  firstLabel,
  iconLink,
}: HeaderProps) {
  const history = useHistory();
  const { accessToken, signOut } = useAuth();

  function handleSignOut() {
    signOut();
    history.push("/");
  }
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      {!!accessToken && <EditUser isOpen={isOpen} onClose={onClose} />}
      <Flex
        w="100%"
        alignItems="flex-start"
        justifyContent="space-between"
        paddingLeft={["10px", "10px", "20px"]}
      >
        <Flex
          mt={["0px", "10px"]}
          ml={["10px", "20px"]}
          alignItems="flex-end"
          alignSelf="end"
        >
          <Image
            cursor="pointer"
            onClick={() => (!!accessToken ? {} : history.push("/"))}
            w={["150px", "200px", "200px", "180px"]}
            h={["140px"]}
            src={Logo}
          ></Image>
        </Flex>
        <Flex
          w={["50%", "50%", "50%", "60%"]}
          alignItems="center"
          justifyContent="space-evenly"
          display={["none", "none", "flex"]}
          mt="20px"
        >
          <Text
            fontSize={["md", "md", "0.8rem", "1rem", "1.375rem"]}
            as="a"
            cursor="pointer"
            href={firstLink}
          >
            {firstText}
          </Text>
          {!!secondLink && secondText && (
            <Text
              fontSize={["md", "md", "0.8rem", "1rem", "1.375rem"]}
              as="a"
              cursor="pointer"
              href={secondLink}
            >
              {secondText}
            </Text>
          )}
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          bg={theme.colors.green[800]}
          marginBottom="auto"
          w="80px"
          h="60px"
          borderRadius="0 0 0 8px"
        >
          <Box
            display={["flex", "flex", "none"]}
            w="100%"
            justifyContent="space-around"
          >
            {!!firstIcon && !!iconLink && (
              <Icon
                onClick={() => history.push(iconLink)}
                w="25px"
                h="25px"
                color="white"
                cursor="pointer"
                display={["block", "block", "none"]}
                alignItems="center"
                alignSelf="center"
                justifyContent="center"
                as={firstIcon}
              />
            )}
            <Menu>
              <MenuButton w="100%" h="100%" as="button" color="white">
                <Text
                  as="span"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon w="20px" h="20px" as={FaAlignRight} color="white" />
                </Text>
              </MenuButton>
              <MenuList cursor="pointer">
                {!accessToken && history.location.pathname === "/aboutus" && (
                  <>
                    <MenuItem onClick={() => history.push("/signin")}>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => history.push("/signup")}>
                      Cadastro
                    </MenuItem>
                  </>
                )}

                {!accessToken && history.location.pathname === "/aboutus" && (
                  <>
                    <MenuItem onClick={() => history.push("/signin")}>
                      Login
                    </MenuItem>
                    <MenuItem onClick={() => history.push("/signup")}>
                      Cadastro
                    </MenuItem>
                  </>
                )}
                {history.location.pathname === "/signin" && (
                  <MenuItem onClick={() => history.push("/signup")}>
                    Cadastro
                  </MenuItem>
                )}
                {history.location.pathname === "/signup" && (
                  <MenuItem onClick={() => history.push("/signin")}>
                    Login
                  </MenuItem>
                )}
                <MenuItem onClick={() => history.push(firstLink)}>
                  {firstText}
                </MenuItem>
                {!!secondText && !!secondLink && (
                  <MenuItem onClick={() => history.push(secondLink)}>
                    {secondText}
                  </MenuItem>
                )}
                {!!accessToken && (
                  <>
                    {history.location.pathname === "/dashboard" ||
                      (history.location.pathname === "/plants" && (
                        <>
                          <MenuItem onClick={() => history.push("/aboutus")}>
                            Conheça nossa equipe
                          </MenuItem>
                          <MenuItem onClick={onOpen}>Editar usuário</MenuItem>
                        </>
                      ))}
                    {history.location.pathname === "/curiosity" && (
                      <>
                        <MenuItem onClick={() => history.push("plants")}>
                          Encontrar uma nova planta
                        </MenuItem>
                        <MenuItem onClick={onOpen}>Editar usuário</MenuItem>
                      </>
                    )}
                    <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Box>
          {!accessToken && !!firstLabel && !!iconLink && (
            <Tooltip
              bg="green.100"
              color="green.800"
              hasArrow={true}
              position="absolute"
              bottom="auto"
              label={firstLabel}
              placement="bottom"
            >
              <Text as="span">
                <Icon
                  w="25px"
                  h="25px"
                  color="white"
                  cursor="pointer"
                  display={["none", "none", "flex"]}
                  alignItems="center"
                  alignSelf="center"
                  justifyContent="center"
                  as={firstIcon}
                  onClick={() => history.push(iconLink)}
                />
              </Text>
            </Tooltip>
          )}
          {!firstLabel && !iconLink && (
            <Tooltip
              label="Menu"
              bg="green.100"
              color="green.800"
              aria-label="A tooltip"
            >
              <Box display={["none", "none", "flex"]}>
                <Menu>
                  <MenuButton>
                    <Text
                      as="span"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon w="20px" h="20px" as={FaAlignRight} color="white" />
                    </Text>
                  </MenuButton>
                  <MenuList>
                    {!accessToken && (
                      <>
                        <MenuItem onClick={() => history.push("/signin")}>
                          Login
                        </MenuItem>
                        <MenuItem onClick={() => history.push("/signup")}>
                          Cadastro
                        </MenuItem>
                      </>
                    )}
                    {!!accessToken && (
                      <>
                        <MenuItem onClick={onOpen}>Editar usuário</MenuItem>
                        {history.location.pathname === "/dashboard" ||
                          (history.location.pathname === "/plants" && (
                            <>
                              <MenuItem
                                onClick={() => history.push("/aboutus")}
                              >
                                Conheça nossa equipe
                              </MenuItem>
                            </>
                          ))}
                        {history.location.pathname === "/curiosity" && (
                          <>
                            <MenuItem onClick={() => history.push("plants")}>
                              Encontrar uma nova planta
                            </MenuItem>
                          </>
                        )}

                        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                      </>
                    )}
                  </MenuList>
                </Menu>
              </Box>
            </Tooltip>
          )}
        </Flex>
      </Flex>
    </>
  );
}
