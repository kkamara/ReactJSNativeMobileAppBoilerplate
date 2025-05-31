import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ComponentPropsWithoutRef, forwardRef, } from 'react';
import Colors from '@/constants/Colors';

type ButtonProps = {
  text: string;
  special?: boolean;
  pressableStyle?: ViewStyle;
  textStyle?: TextStyle;
} & ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({
    text,
    special,
    pressableStyle,
    textStyle,
    ...pressableProps
  }, ref) => {
    return (
      <Pressable
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
      </Pressable>
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
    fontSize: 16,
    fontWeight: 700,
    color: Colors.light.text,
  },
});

export default Button;
