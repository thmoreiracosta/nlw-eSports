import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 5,
    justifyContent: "space-between",
  },
  logo: {
    width: 80,
    height: 50,
  },
  empty: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 340,
    height: 170,
    borderRadius: 8,
    marginTop: 20,
  },
  containerList: {
    width: "100%",
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
