import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "./src/components/auth/AuthContext";

import Navigator from "./src/routes/Navigator";
import { ProfileProvider } from "./src/components/auth/ProfileContext";
import { MessageProvider } from "./src/components/auth/MessageContext";
import { navigationRef } from "./RootNavigation";

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ProfileProvider>
          <MessageProvider>
            <Navigator />
          </MessageProvider>
        </ProfileProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

registerRootComponent(App);
export default App;
