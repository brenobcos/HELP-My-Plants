import { Box, useRadio } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        width="100%"
        padding={["4px", 3]}
        fontSize={["0.8rem", "1rem"]}
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="md"
        boxShadow="md"
        boxSizing="border-box"
        _checked={{
          bg: "green.800",
          color: "white",
          borderColor: "green.800",
        }}
        _focus={{
          border: "2px solid",
          borderColor: "green.200",
          boxSizing: "border-box",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default RadioCard;
