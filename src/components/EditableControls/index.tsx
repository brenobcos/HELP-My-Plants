import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="flex-end" size="sm">
      <IconButton
        aria-label=""
        icon={<FaCheck />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label=""
        icon={<MdOutlineClose fontSize="20px" />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        aria-label=""
        size="sm"
        icon={<FaEdit />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
}