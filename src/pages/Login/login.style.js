import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Makes sure the image covers the entire screen
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
  },
  logoContainer: {
    flex: 1,
  },
  logoImage: {
    width: "100%",
    resizeMode: "contain",
  },
  redSection: {
    flex: 3,
    backgroundColor: "#C91429",
    height: "100%",
    borderBottomLeftRadius: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  formContainer: {
    width: "80%", // Form covers 80% of the main container
    padding: 20,
    height: 380,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderColor: "#ddd",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 36,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#F1F3F6",
    backgroundColor:"#FFFFFF",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    borderColor: "#ddd",
    // borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    position: "relative",
  },
  showHideIcon: {
    position: "absolute",
    right: 10,
    height: 33,
    // justifyContent: "center",
  },
  forgotPasswordContainer: {
    // flexDirection:,
    marginTop: -55,
    marginLeft:154,
   
  },
  forgotPasswordText: {
    color: "#C7222A",
    fontSize: 12,
    fontWeight: "400",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#C7222A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
