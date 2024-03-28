import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
  content: {
    width: '100%',
    top: 16,
    margin: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    fontWeight: '400'
  },
  textContainer: {
    width: '82%'
  }
});
