import { useState } from "react";
import PropTypes from "prop-types";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";

export default function PasswordInput({ onChange }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        onChange={onChange}
        pr="4.5rem"
        name="password"
        focusBorderColor="bg.1"
        type={show ? "text" : "password"}
        placeholder="Password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" bg="bg.2" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
