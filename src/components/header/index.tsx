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
} from "@chakra-ui/react";
import { FaAlignRight } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/LogoFull-LightMode.svg";
import { useAuth } from "../../providers/auth/index";

interface HeaderProps {
  firstLink: string;
  secondLink?: string;
  firstText: string;
  secondText?: string;
  firstIcon?: IconType;
  iconLink?: string;
  firstLabel?: string;
}

function Header({
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
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={["10px", "10px", "20px"]}
    >
      <Image
        w={["150px", "200px", "200px", "260px"]}
        h={["140px"]}
        src={Logo}
        paddingLeft="3vw"
      ></Image>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
        display={["none", "none", "flex"]}
      >
        <Text
          fontSize={["md", "md", "md", "1.375rem"]}
          as="a"
          cursor="pointer"
          href={firstLink}
        >
          {firstText}
        </Text>
        {!!secondLink && secondText && (
          <Text
            fontSize={["md", "md", "md", "1.375rem"]}
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
        marginBottom="auto"
        bg={theme.colors.green[800]}
        w={["100px", "100px", "120px"]}
        h={["60px", "60px", "80px"]}
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
              {!accessToken && history.location.pathname === "aboutus" && (
                <>
                  <MenuItem onClick={() => history.push("/signin")}>
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => history.push("/signup")}>
                    Cadastro
                  </MenuItem>
                </>
              )}

              {!accessToken && history.location.pathname === "aboutus" && (
                <>
                  <MenuItem onClick={() => history.push("/signin")}>
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => history.push("/signup")}>
                    Cadastro
                  </MenuItem>
                </>
              )}
              {history.location.pathname === "signin" && (
                <MenuItem onClick={() => history.push("/signup")}>
                  Cadastro
                </MenuItem>
              )}
              {history.location.pathname === "signup" && (
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
                  {history.location.pathname === "dashboard" ||
                    (history.location.pathname === "plants" && (
                      <>
                        <MenuItem onClick={() => {}}>Editar usuário</MenuItem>
                        <MenuItem onClick={() => history.push("/aboutus")}>
                          Conheça nossa equipe
                        </MenuItem>
                      </>
                    ))}
                  {history.location.pathname === "curiosity" && (
                    <>
                      <MenuItem onClick={() => {}}>Editar usuário</MenuItem>
                      <MenuItem onClick={() => history.push("plants")}>
                        Encontrar uma nova planta
                      </MenuItem>
                    </>
                  )}
                  <MenuItem onClick={() => signOut()}>Sair</MenuItem>
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
                {!!accessToken && (
                  <>
                    {history.location.pathname === "dashboard" ||
                      (history.location.pathname === "plants" && (
                        <>
                          <MenuItem onClick={() => {}}>Editar usuário</MenuItem>
                          <MenuItem onClick={() => history.push("/aboutus")}>
                            Conheça nossa equipe
                          </MenuItem>
                        </>
                      ))}
                    {history.location.pathname === "curiosity" && (
                      <>
                        <MenuItem onClick={() => {}}>Editar usuário</MenuItem>
                        <MenuItem onClick={() => history.push("plants")}>
                          Encontrar uma nova planta
                        </MenuItem>
                      </>
                    )}
                    <MenuItem onClick={() => signOut()}>Sair</MenuItem>
                  </>
                )}
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
              </MenuList>
            </Menu>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;
