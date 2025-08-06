import { Button, ButtonGroup, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  min-width: 36px;  /* ensures consistent button size */
`;

const QuantityDisplay = styled(Button)`
  pointer-events: none;  /* disables clicks */
  border-radius: 0;
  min-width: 36px;
`;

const GroupedButton = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <Component>
      <StyledButton onClick={onDecrement} disabled={quantity <1}>
        -
      </StyledButton>

      <QuantityDisplay disabled>
        {quantity}
      </QuantityDisplay>

      <StyledButton onClick={onIncrement}>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
