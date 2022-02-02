import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

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
  function Shared() {
    return (
      <AnimateSharedLayout>
        <Flex margin="4px 0">
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px 0 50px 0",
              border: "3px solid transparent",
              background:
                "linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(15deg, #FFFFFF 30%, #184A2C 30%,#FFFFFF 90%) border-box",
            }}
            layout
          >
            <Image
              boxShadow="0 2px 4px 2px rgba(0, 0, 0, 0.15)"
              width="98px"
              maxWidth="98px"
              height="98x"
              maxHeight="98px"
              border="3px solid transparent"
              bg="linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(50deg, #FFFFFF 25%, #184A2C 70%,#FFFFFF 0%) border-box"
              borderRadius="50px 0 50px 0"
              src={image}
              alt={name}
            />
            <AnimatePresence>
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Flex
                  flexDir="column"
                  width={["200px", "220px", "220px", "300px"]}
                >
                  <Text textAlign="center" color="green.800" fontSize={"20px"}>
                    {name}
                  </Text>
                  <Text textAlign="center" color="green.500" fontSize="16px">
                    {office}
                  </Text>
                  <Flex
                    alignItems="center"
                    justifyContent="space-evenly"
                    margin="0 30px"
                  >
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
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Flex>
      </AnimateSharedLayout>
    );
  }

  return <Shared />;
}
