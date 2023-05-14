import React from "react";
import { Button, Text, View } from "react-native";
import { AsyncStorage } from "react-native";
import Colors from "../../constants/Colors";
import { logoutAction } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>If you want to logout , press the button</Text>

      <Button
        title="Log out"
        color={Colors.accent}
        onPress={() => dispatch(logoutAction())}
      />
    </View>
  );
};

export default ProfileScreen;
