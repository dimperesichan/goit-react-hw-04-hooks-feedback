import PropTypes from 'prop-types';
import styled from 'styled-components';
export default function Button({ title, handleClick, content, type }) {
  return (
    <ButtonWrapper title={title} onClick={handleClick} type={type}>
      {content}
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  type: 'button',
  onClick: () => null,
};
Button.propTypes = {
  onResetButton: PropTypes.func,
};
const ButtonWrapper = styled.button`
  padding: 10px 20px;
  font-family: var(--big);
  font-weight: 700;
  text-transform: capitalize;
  color: var(--dark);
  background-color: var(--white);
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  transition: all 250ms ease-in;
  :hover {
    color: var(--white);
    background-color: var(--dark);
  }
`;
