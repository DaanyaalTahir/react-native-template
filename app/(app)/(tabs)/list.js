import { View, Text } from "react-native";
import React from "react";
import { FlatGrid } from "react-native-super-grid";
import { StyleSheet, Dimensions } from "react-native";
import {
  Center,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonIcon,
  Heading,
  Badge,
  BadgeText,
  HStack,
} from "@gluestack-ui/themed";
import { router } from "expo-router";

const list = () => {
  return (
    <Text>
      hello there
      <Button
        onPress={() => {
          router.push(`/device/1`);
        }}
      >
        <ButtonText>Link</ButtonText>
      </Button>
    </Text>
  );
};

export default list;
