import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

interface LoginListDataProps {
  id: string;
  service_name: string;
  email: string;
  password: string;
}

interface LoginListProps extends FlatListProps<LoginListDataProps> {
  keyExtractor: (item: LoginListDataProps) => string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #f2f3f5;
  padding: 0 24px;
`;

export const Metadata = styled.View`
  margin-top: 32px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: "Rubik_500Medium";
  color: #3d434d;
`;

export const TotalPassCount = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: "Rubik_400Regular";
  color: #888d97;
`;

export const LoginList = styled(
  FlatList as new () => FlatList<LoginListDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
})<LoginListProps>`
  margin-top: ${RFValue(16)}px;
`;
