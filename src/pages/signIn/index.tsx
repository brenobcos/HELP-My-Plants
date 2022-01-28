import { Box, Flex, Image } from "@chakra-ui/react";
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
        <Box
          sx={{
            backgroundColor: "red.400",
            color: "green.100",
            width: "100%",
            height: "100px",
          }}
        >
          Substituir pelo header
        </Box>
        <Flex
          sx={{
            paddingTop: "10vh",
            height: "100%",
            width: "100vw",
            alignItems: "flex-start",
            justifyContent: "center",
            "@media screen and (min-width: 1024px)": {
              justifyContent: "flex-start",
              paddingLeft: "2vw",
              paddingTop: "20vh",
            },
            "@media screen and (min-width: 1280px)": {
              paddingLeft: "10vw",
            },
            "@media screen and (min-width: 1480px)": {
              paddingLeft: "15vw",
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
                minWidth: "100px",
                minHeight: "100px",
                maxWidth: "580px",
                maxHeight: "580px",
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
