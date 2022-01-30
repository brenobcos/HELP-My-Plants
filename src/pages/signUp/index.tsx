import { Flex, Image } from "@chakra-ui/react";
import { RegisterForm } from "../../components/signup/registerForm";
import Header from "../../components/header";
import { FaRegUser } from "react-icons/fa";

const img = require("../../assets/signuppage.png");

function SignUp() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Header
        firstLink="aboutus"
        secondLink="curiosity"
        firstText="Conheça nosso time"
        secondText="Como cuidar da sua planta"
        firstIcon={FaRegUser}
        firstLabel="Login"
        iconLink="/signin"
      />
      <Flex
        alignItems={[
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
          "center",
        ]}
        as="main"
        justify="flex-end"
        minH="calc(100vh - 140px)"
      >
        <Image
          src={img}
          sx={{
            borderRadius: "50%",
            bottom: "-15vw",
            filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4))",
            height: "80vw",
            left: "-15vw",
            maxHeight: "500px",
            maxWidth: "500px",
            opacity: "0.6",
            position: "fixed",
            width: "80vw",
            zIndex: "-1",
            "@media screen and (min-width: 1024px)": {
              bottom: "20vh",
              height: "30vw",
              left: "10vw",
              maxHeight: "580px",
              maxWidth: "580px",
              minHeight: "100px",
              minWidth: "100px",
              opacity: "1",
              top: "26vh",
              width: "30vw",
            },
            "@media screen and (min-width: 1280px)": {
              height: "35vw",
              width: "35vw",
            },
          }}
        />
        <RegisterForm />
      </Flex>
    </Flex>
  );
}

export default SignUp;
