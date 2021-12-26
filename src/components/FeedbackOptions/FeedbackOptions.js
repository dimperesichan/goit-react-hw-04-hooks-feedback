import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackWrapper>
      {options.map(element => (
        <Button
          key={element}
          title={`Leave a ${element} response`}
          handleClick={() => onLeaveFeedback(element)}
          content={element}
        />
      ))}
    </FeedbackWrapper>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  button {
    color: var(--yellow);
    :first-of-type {
      color: var(--green);
    }
    :last-of-type {
      color: var(--red);
    }
    :hover {
      color: var(--white);
      background-color: var(--yellow);
    }
    :first-of-type:hover {
      background-color: var(--green);
    }
    :last-of-type:hover {
      background-color: var(--red);
    }
  }
`;
