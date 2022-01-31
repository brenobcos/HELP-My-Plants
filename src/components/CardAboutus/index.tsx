import {
  Box,
  Flex,
  Image,
  keyframes,
  Text,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import AvatarBruno from "../../assets/avatarbruno.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export function CardAboutus() {
  const moviment = keyframes`
from { transform: translateX(0%); }
to { transform: translateX(100%)}`;
  const motion2 = usePrefersReducedMotion();

  const animation2 = motion2 ? undefined : `${moviment} infinite 20s linear`;

  return (
    <Flex>
      <Flex w="50px">
        <Image src={AvatarBruno} alt="Bruno" display="block" />
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5 }}
        >
          <Text>Caique Cavalheiro</Text>
          <Text>Scrum Master</Text>
          <FaGithub />
          <FaLinkedin />
        </motion.div>
      </Flex>
    </Flex>
  );
}
