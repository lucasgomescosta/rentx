import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  
  margin-right: 9px;
  padding-right: 9px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
  active ? theme.colors.title : theme.colors.shape};
    
  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px
  height: 132px;

  justify-content: center;
  align-items: center;
`

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
