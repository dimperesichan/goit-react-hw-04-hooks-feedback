import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();
export default function Title({ title, titleType, titleStyles }) {
  return (
    <>
      {titleType === true ? (
        <TitleH1 titleStyles={titleStyles}>{title}</TitleH1>
      ) : (
        <TitleH2 titleStyles={titleStyles}>{title}</TitleH2>
      )}
    </>
  );
}
Title.defaultProps = {
  title: 'Title',
  titleType: false,
  titleStyles: 'normal',
};
Title.propTypes = {
  title: PropTypes.string,
  titleType: PropTypes.bool,
  titleStyles: PropTypes.string.isRequired,
};
const titleTypes = {
  accented: {
    color: `${styles.yellowColor}`,
  },
  normal: {
    color: `${styles.blueColor}`,
  },
};
const TitleH1 = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: var(--big);
  color: ${({ titleStyles }) => titleTypes[titleStyles].color};
`;
const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-family: var(--font);
  color: ${({ titleStyles }) => titleTypes[titleStyles].color};
`;
