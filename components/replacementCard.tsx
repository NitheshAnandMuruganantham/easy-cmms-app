import { StyleSheet } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Button, Card, Icon } from "@rneui/themed";
import React from "react";

interface ReplacementCardProps {
  data: any;
}

const ReplacementCard: RneFunctionComponent<ReplacementCardProps> = (props) => {
  return (
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
      <Card.Title
        style={{
          fontFamily: "Poppins-Black",
          fontSize: 20,
        }}
      >
        {props.data.name}
      </Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        item : {props.data.items?.name} ({props.data.items?.id})
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        quantity : {props.data.quantity}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
        Approved :{" "}
        <Text
          style={{
            backgroundColor: props.data.approved ? "#5cb85c" : "#d9534f",
            padding: 5,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {props.data.approved ? "  Yes  " : "  No  "}
        </Text>
      </Text>
    </Card>
  );
};

export default ReplacementCard;

const styles = StyleSheet.create({
  fonts: {
    marginBottom: 8,
  },
});
