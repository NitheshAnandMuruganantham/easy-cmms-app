import { StyleSheet, View } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Button, Card, Badge } from "@rneui/themed";
import React from "react";

interface MaintenanceCardProps {
  data: any;
  viewMaintenance: (id: number) => void;
}

const MaintenanceCard: RneFunctionComponent<MaintenanceCardProps> = (props) => {
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
        machine : {props.data.machines.label} ({props.data.machines.id})
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
      <Button
        onPress={() => props.viewMaintenance(props.data.id)}
        type="outline"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="view now"
      />
    </Card>
  );
};

export default MaintenanceCard;

const styles = StyleSheet.create({
  fonts: {
    marginBottom: 8,
  },
});
