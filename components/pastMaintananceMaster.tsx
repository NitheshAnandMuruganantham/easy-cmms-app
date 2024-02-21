import { StyleSheet } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Button, Card, Icon } from "@rneui/themed";
import React from "react";

interface MaintenanceCardProps {
  data: any;
}

const PastMaintenanceCard: RneFunctionComponent<MaintenanceCardProps> = (
  props
) => {
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
          fontSize: 25,
        }}
      >
        {props.data.name}
      </Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        {props.data.description}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        machine : {props.data.machines.id} ({props.data.machines.label})
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        status : {props.data.resolved ? "resolved" : "un-resolved"}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        from :{" "}
        {`${new Date(props.data.from).toLocaleDateString()} ${new Date(
          props.data.from
        ).toLocaleTimeString("en-US")}`}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        to :{" "}
        {`${new Date(props.data.to).toLocaleDateString()} ${new Date(
          props.data.to
        ).toLocaleTimeString("en-US")}`}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        elapsed :{" "}
        {props.data?.elapsed ? props.data.elapsed.toLocaleString() : "nill"}
      </Text>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>
        assignee : {props.data.assignee.name} ({props.data.assignee.id})
      </Text>
    </Card>
  );
};

export default PastMaintenanceCard;

const styles = StyleSheet.create({
  fonts: {
    marginBottom: 8,
  },
});
