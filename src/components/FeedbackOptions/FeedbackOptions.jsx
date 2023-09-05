import { BtnWraper, ButtonStyled } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BtnWraper>
      {options.map(value => (
        <ButtonStyled key={value} onClick={() => onLeaveFeedback(value)}>
          {value}
        </ButtonStyled>
      ))}
    </BtnWraper>
  );
}