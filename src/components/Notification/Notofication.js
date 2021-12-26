import PropTypes from 'prop-types';
import styled from 'styled-components';
export default function Notofication({ message }) {
  return (
    <NotoficationWrapper>
      <Text>{message}</Text>
    </NotoficationWrapper>
  );
}
Notofication.defaultProps = {
  message: "It's empty here",
};
Notofication.propTypes = {
  message: PropTypes.string.isRequired,
};
const NotoficationWrapper = styled.div`
  padding: 5px;
`;
const Text = styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;
