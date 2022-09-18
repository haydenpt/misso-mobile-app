import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  // SCREEN CONTAINER
  eventScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
    // backgroundColor: "#0A274C",
    width: "100%",
  },

  // SHADOW STYLES
  boxShadow1: {
    shadowColor: "#000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 5,
  },
  boxShadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  // IMAGE STYLES

  // BUTTON AND LINK STYLES
  buttonFullWidth: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    width: "100%",
  },
  buttonDark: {
    backgroundColor: "#0A274C",
  },
  buttonLight: {
    backgroundColor: "#dbf0fb",
  },

  // TEXT STYLES
  textDark: {
    color: "#0A274C",
  },
  textWhite: {
    color: "#ffffff",
  },
  textGrey: {
    color: "#dadada",
  },
  text: {
    header: {},
    body: {},
  },

  // FORM STYLES
  // INPUT FIELD STYLES

  // LOADING
  loadingBackdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  loadingIcon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  // POPUP DIALOG BOX
  popUpMessageBox: {
    position: "absolute",
    left: "5%",
    right: "5%",
    top: "10%",
    zIndex: 1,
    backgroundColor: "#ffffff",
    flex: 1,
    width: "90%",
    borderRadius: 12,
    padding: 20,
    info: {
      backgroundColor: "#dbf0fb",
    },
    success: {
      backgroundColor: "#c9f7d0",
    },
    warning: {
      backgroundColor: "#ffeeb6",
    },
    error: {
      backgroundColor: "#ffa6a6",
    },
  },
  popUpMessageCloseButton: {
    position: "absolute",
    right: 5,
    top: 5,
  },
});

export const stylesAuth = StyleSheet.create({
  authScreenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 100,
    backgroundColor: "#0A274C",
    width: "100%",
  },
  authFooterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 35,
    left: 20,
    right: 20,
  },
  authFormContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: "center",
  },
  logoInAuth: {
    width: "50%",
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
  },
  authInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#dedede",
    width: "100%",
    height: 50,
    margin: 5,
    padding: 5,
    paddingLeft: 10,
  },
  authFormHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  loginTools: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
    paddingRight: 10,
    margin: 5,
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
  },
});
