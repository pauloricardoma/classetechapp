import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32
  },
  infoContainer: {
    width: '100%',
    paddingVertical: 16,
    marginBottom: 32,
  },
  infoContent: {
    width: '100%',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 4
  },
  title: {
    fontSize: 24,
    fontWeight: '400'
  },
  titleValue: {
    fontSize: 24,
    fontWeight: '600'
  },
  btnContainerContained: {
    width: 100,
    marginBottom: 32
  },
});
