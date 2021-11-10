import * as S from 'src/styles/styled';
import styled from 'styled-components';

export const modalStyles = {
  content: {
    width: '630px',
    height: '580px',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const CloseButtonS = styled(S.Button)`
  color: #a2ce49;
  float: right;
`;
