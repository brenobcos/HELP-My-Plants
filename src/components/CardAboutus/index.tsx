import { Flex, IconButton, Image, Text, useDisclosure } from "@chakra-ui/react";
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
  const { isOpen, onClose, onOpen } = useDisclosure();

  function Shared() {
    return (
      <AnimateSharedLayout>
        <Flex margin="5px 0">
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              border: "3px solid transparent",
              background:
                "linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(15deg, #FFFFFF 30%, #46FF42 30%,#FFFFFF 90%) border-box",
            }}
            layout
          >
            <Image
              boxShadow="0 2px 4px 2px rgba(0, 0, 0, 0.15)"
              width="108px"
              maxWidth="108px"
              height="108px"
              maxHeight="108px"
              onMouseEnter={onOpen}
              onClick={isOpen ? onClose : onOpen}
              border="3px solid transparent"
              bg="linear-gradient(#FFFFFF, #FFFFFF) padding-box,linear-gradient(50deg, #FFFFFF 25%, #46FF42 70%,#FFFFFF 0%) border-box"
              borderRadius="50px"
              src={image}
              alt={name}
            />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Flex
                    w={["200px", "300px"]}
                    flexDir="column"
                    onMouseLeave={onClose}
                    onClick={onClose}
                  >
                    <Text
                      textAlign="center"
                      color="green.800"
                      fontSize={["20px", "26px"]}
                    >
                      {name}
                    </Text>
                    <Text textAlign="center" color="green.500" fontSize="18px">
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
                        bgColor="white"
                        aria-label=""
                        onClick={() => (window.location.href = `${github}`)}
                        icon={<FaGithub fontSize="30px" />}
                      ></IconButton>
                      <IconButton
                        _active={{ border: "none" }}
                        _after={{ border: "none" }}
                        _focus={{ border: "none" }}
                        cursor="pointer"
                        bgColor="white"
                        aria-label=""
                        onClick={() => (window.location.href = `${linkedin}`)}
                        icon={<FaLinkedin fontSize="30px" />}
                      ></IconButton>
                    </Flex>
                  </Flex>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Flex>
      </AnimateSharedLayout>
    );
  }

  return <Shared />;
}
