import { Flex, IconButton, Image, Text, keyframes } from "@chakra-ui/react";
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
   0%   {opacity: 0;}
  25%  {opacity: 0;}
  50%  {opacity: 0.6;}
  75%  {opacity: 0.8;}
  100% {opacity: 1;}
  
  `;
  function Shared() {
    const appearAnimation = `${appear} 1 1s linear forwards`;

    return (
      <Flex
        sx={{
          paddingBottom: "4px",
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
              "linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(20deg, #FFFFFF 30%, #184A2C 50%,#FFFFFF 70%) border-box",
          }}
        >
          <Flex
            flexDir="column"
            width="68px"
            sx={{
              transition: "width 1s",
              overflow: "hidden",
              maxHeight: "98px",
              opacity: "0",
              zIndex: 1,
              ":hover": {
                animation: `${appearAnimation}`,
                width: ["298px", "348px", "398px"],
              },
              ":active": {
                animation: `${appearAnimation}`,
                width: ["298px", "348px", "398px"],
              },
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Text textAlign="center" color="green.800" fontSize={"20px"}>
              {name}
            </Text>
            <Text textAlign="center" color="green.500" fontSize="16px">
              {office}
            </Text>
            <Flex alignItems="center" justifyContent="center" margin="0 30px">
              <IconButton
                as="a"
                _active={{ border: "none" }}
                _after={{ border: "none" }}
                _focus={{ border: "none" }}
                cursor="pointer"
                bgColor="transparent"
                aria-label=""
                onClick={() => (window.location.href = `${github}`)}
                icon={<FaGithub fontSize="25px" />}
                marginLeft="10%"
              ></IconButton>
              <IconButton
                _active={{ border: "none" }}
                _after={{ border: "none" }}
                _focus={{ border: "none" }}
                cursor="pointer"
                bgColor="transparent"
                aria-label=""
                onClick={() => (window.location.href = `${linkedin}`)}
                icon={<FaLinkedin fontSize="25px" />}
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
