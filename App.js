// Core
import React from "react";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/routes/Navigator";
import { navigationRef } from "./RootNavigation";

// Context Providers
import { AuthProvider } from "./src/components/auth/AuthContext";
import { ProfileProvider } from "./src/components/auth/ProfileContext";
import { MessageProvider } from "./src/components/auth/MessageContext";
import DrawerMenu from "./src/routes/Drawer";

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ProfileProvider>
          <MessageProvider>
            {/* <DrawerMenu /> */}
            <Navigator />
          </MessageProvider>
        </ProfileProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);
export default App;
