import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ComponentPropsWithoutRef, forwardRef, } from 'react';
import Colors from '@/constants/Colors';

type ButtonProps = {
  text: string;
  special?: boolean;
} & ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, special, ...pressableProps }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={[
          styles.container, 
          special ? { backgroundColor: Colors.light.tint, } : { borderColor: "#4582ec", },
        ]}
      >
        <Text style={[styles.text, special ? { color: "#fff", } : null]}>{text}</Text>
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
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
    color: Colors.light.text,
  },
});

export default Button;
