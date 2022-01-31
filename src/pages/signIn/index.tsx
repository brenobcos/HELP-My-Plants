import { Flex, Image } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";
import Header from "../../components/header";
import LogInForm from "../../components/SignInForm";

const img = require("../../assets/loginpage.png");

function SignIn() {
  return (
    <>
      <Flex
        sx={{
          width: "100vw",

          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Header
          firstLink="/aboutus"
          firstText="Conheça nossa equipe"
          secondLink="/curiosity"
          secondText="Como cuidar de sua planta"
          firstIcon={FaUserPlus}
          firstLabel="Cadastrar"
          iconLink="/signup"
        />
        <Flex
          sx={{
            width: "100vw",
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
            "@media screen and (min-width: 1024px)": {
              height: "100%",
              marginBottom: "12%",
              justifyContent: "space-evenly",
              alignItems: "center",
            },
          }}
        >
          <LogInForm />
          <Image
            src={img}
            sx={{
              borderRadius: "50%",
              width: "95vw",
              height: "95vw",
              maxWidth: "500px",
              maxHeight: "500px",
              opacity: "0.6",
              position: "fixed",
              bottom: "-15vw",
              right: "-15vw",
              zIndex: "-1",
              filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.4))",
              "@media screen and (min-width: 1024px)": {
                opacity: "1",
                width: "30vw",
                height: "30vw",
                position: "inherit",
                minWidth: "100px",
                minHeight: "100px",
                maxWidth: "400px",
                maxHeight: "400px",
                bottom: "0",
                right: "5vw",
                top: "15vh",
              },
              "@media screen and (min-width: 1280px)": {
                width: "35vw",
                height: "35vw",
              },
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default SignIn;
