import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  btnHeaderToggleText: {
    fontSize: 32,
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  },
  mainText: {
    fontSize: 24,
    fontWeight: '600'
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 16
  },
  btnNext: {
    width: 140,
    marginTop: 32
  }
});
