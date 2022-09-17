import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface VWProps extends ViewProps {
  title: string;
  subTitle: string;  
}

export function Heading({title, subTitle, ...rest} : VWProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}