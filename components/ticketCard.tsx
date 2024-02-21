import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Button, Card, Image } from "@rneui/themed";
import CachedImage from "expo-cached-image";

import React from "react";

interface TicketCardProps {
  data: any;
  viewTicket: (id: string) => void;
}

const TicketCard: RneFunctionComponent<TicketCardProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.viewTicket(props.data.id);
      }}
    >
      <Card
        containerStyle={{
          borderRadius: 20,
          shadowColor: "black",
          shadowOpacity: 0.2,
          paddingBottom: 10,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 5,
          backgroundColor: "#fff",
        }}
      >
        <Card.Title style={{ fontSize: 25 }}>{props.data.name}</Card.Title>
        <Card.Divider />
        <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "500" }}>
          {props.data.description}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 15 }}>
          machine : {props.data.machines.id} ({props.data.machines.name})
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 15 }}>
          status : {props.data.status}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 15 }}>
          raised by : {props.data.user.name} ({props.data.user.id})
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

export default TicketCard;
