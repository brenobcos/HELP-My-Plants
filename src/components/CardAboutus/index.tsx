import {
  Flex,
  IconButton,
  Image,
  Text,
  keyframes,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface CardProps {
  name: string;
  image: string;
  github: string;
  linkedin: string;
  office: string;
}

export function CardAboutus({
  name,
  image,
  github,
  linkedin,
  office,
}: CardProps) {
  const appear = keyframes`
   0%   {opacity:0;}
  50%  {opacity:0;}
  75%  {opacity: 0.8;}
  100% {opacity: 1;}
  
  `;
  function Shared() {
    const appearAnimation = `${appear} 1 1s linear forwards`;

    return (
      <Flex
        sx={{
          marginBottom: "5px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Flex
          style={{
            alignItems: "center",
            borderRadius: "50px 0 50px 0",
            border: "3px solid transparent",
            background:
              "linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(20deg, #FFFFFF 0%, #184A2C 50%,#FFFFFF 100%) border-box",
          }}
        >
          <Flex
            display="block"
            flexDir="column"
            width="68px"
            height="98px"
            paddingLeft="22%"
            cursor="pointer"
            sx={{
              transition: "width 1s",
              overflow: "hidden",
              maxHeight: "98px",
              opacity: 0,
              zIndex: 1,
              alignItems: "center",
              justifyContent: "center",
              ":hover": {
                animation: `${appearAnimation}`,
                width: ["280px", "348px", "398px"],
              },
              ":active": {
                animation: `${appearAnimation}`,
                width: ["280px", "348px", "398px"],
              },
            }}
          >
            <Text
              textAlign="center"
              color="green.800"
              fontSize={["15px", "20px"]}
            >
              {name}
            </Text>
            <Text
              textAlign="center"
              color="green.500"
              fontSize={["12px", "16px"]}
            >
              {office}
            </Text>
            <Flex alignItems="center" justifyContent="center" margin="0 30px">
              <IconButton
                _active={{ border: "none", bgColor: "white" }}
                _after={{ border: "none", bgColor: "white" }}
                _focus={{ border: "none", bgColor: "white" }}
                cursor="pointer"
                bgColor="transparent"
                aria-label=""
                icon={
                  <Link href={github} target="_blank">
                    <FaGithub fontSize="25px" />
                  </Link>
                }
                marginLeft="10%"
              ></IconButton>
              <IconButton
                _active={{ border: "none", bgColor: "white" }}
                _after={{ border: "none", bgColor: "white" }}
                _focus={{ border: "none", bgColor: "white" }}
                cursor="pointer"
                bgColor="transparent"
                aria-label=""
                icon={
                  <Link href={linkedin} target="_blank">
                    <FaLinkedin fontSize="25px" />
                  </Link>
                }
              ></IconButton>
            </Flex>
          </Flex>
          <Image
            className="AvatarImage"
            boxShadow="0 2px 4px 2px rgba(0, 0, 0, 0.15)"
            width="98px"
            height="98x"
            borderRadius="50px 0 50px 0"
            src={image}
            alt={name}
            position="absolute"
          />
        </Flex>
      </Flex>
    );
  }

  return <Shared />;
}
