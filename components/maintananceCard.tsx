import { StyleSheet } from "react-native";
import { RneFunctionComponent, Text } from "@rneui/base";
import { Button, Card, Icon } from "@rneui/themed";
import React from "react";
import { Maintenance } from "../generated/generated";

interface MaintenanceCardProps {
  data: any;
  viewMaintenance: (id: number) => void;
}

const MaintenanceCard: RneFunctionComponent<MaintenanceCardProps> = (props) => {
  return (
    <Card>
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Divider />
      <Text style={{ marginBottom: 10 }}>{props.data.description}</Text>
      <Text style={{ marginBottom: 10 }}>
        machine : {props.data.machines.id} ({props.data.machines.label})
      </Text>
      <Text style={{ marginBottom: 10 }}>
        status : {props.data.resolved ? "resolved" : "un-resolved"}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        from : {props.data.from.toLocaleString()}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        to : {props.data.to.toLocaleString()}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        elapsed :{" "}
        {props.data?.elapsed ? props.data.elapsed.toLocaleString() : "nill"}
      </Text>
      <Text style={{ marginBottom: 10 }}>
        assignee : {props.data.assignee.name} ({props.data.assignee.id})
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
