import Colors from '@/constants/Colors';
import { ComponentPropsWithoutRef, forwardRef, } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  text: string;
  special?: boolean;
  pressableStyle?: ViewStyle;
  textStyle?: TextStyle;
} & ComponentPropsWithoutRef<typeof TouchableOpacity>;

const ButtonOpacity = forwardRef<View | null, ButtonProps>(
  ({
    text,
    special,
    pressableStyle,
    textStyle,
    ...pressableProps
  }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...pressableProps}
        style={[
          styles.container,
          special ? { backgroundColor: Colors.light.tint, } : null,
          pressableStyle ? pressableStyle : null,
        ]}
      >
        <Text
          style={[
            styles.text,
            special ? { color: "#fff", } : null,
            textStyle ? textStyle : null,
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#4582ec",
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.light.text,
  },
});

export default ButtonOpacity;
