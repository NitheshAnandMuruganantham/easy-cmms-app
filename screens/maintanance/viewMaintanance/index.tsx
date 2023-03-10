import { View, Text, ScrollView } from "react-native";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRoute } from "@react-navigation/native";
import {
  useGetMaintananceQuery,
  useUpdateMaintananceMutation,
} from "../../../generated/generated";
import toast from "react-native-root-toast";
import { Button, Image } from "@rneui/themed";
import { Table, Row, Rows } from "react-native-table-component";
import style from "./style";
import client from "../../../utils/apollo";
import TakePic from "./takePic";
import Spinner from "react-native-loading-spinner-overlay/lib";
interface Props {
  navigation: any;
}

const ViewTicket: FunctionComponent<Props> = (props) => {
  const route = useRoute<any>();
  const [ShowSubmit, SetShowSubmit] = useState<boolean>(false);
  const { data, error, loading } = useGetMaintananceQuery({
    variables: {
      maintenanceId: route.params.MaintenanceId,
    },
  });

  const [updateMaintanance] = useUpdateMaintananceMutation();

  return (
    <ScrollView>
      <Spinner visible={loading} textContent={"Loading..."} />
      <Text style={style.title}>{data?.maintenance.name}</Text>
      <TakePic
        setIsVisible={SetShowSubmit}
        isVisible={ShowSubmit}
        submit={async (uri: string) => {
          await updateMaintanance({
            variables: {
              updateMaintananceId: data?.maintenance.id,
              updateMaintananceInput: {
                photo: {
                  set: uri,
                },
                resolved: {
                  set: true,
                },
              },
            },
          });
          client.refetchQueries({
            include: ["getMaintanance"],
          });
          await toast.show("Task completed", {
            position: toast.positions.TOP + 50,
          });
          props.navigation.goBack();
        }}
      />
      <Text style={style.description}>{data?.maintenance.description}</Text>
      <View style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}>
        <Table
          borderStyle={{
            borderBottomWidth: 3,
            borderColor: "black",
          }}
        >
          <Rows
            textStyle={{
              fontSize: 18,
              paddingBottom: 5,
              fontWeight: "500",
            }}
            style={{
              padding: 10,
              borderWidth: 1,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
            data={[
              [
                "from",
                `${
                  new Date(data?.maintenance.from).toLocaleDateString() +
                  " " +
                  new Date(data?.maintenance.from).toLocaleTimeString()
                }`,
              ],
              [
                "to",
                `${
                  new Date(data?.maintenance.to).toLocaleDateString() +
                  " " +
                  new Date(data?.maintenance.to).toLocaleTimeString()
                }`,
              ],
              [
                "to",
                `${data?.maintenance.machine.label} (${data?.maintenance.machine.id})`,
              ],
              [
                "machine",
                `${data?.maintenance.machine.label} (${data?.maintenance.machine.id})`,
              ],
              [
                "block",
                `${data?.maintenance.machine.block.name} (${data?.maintenance.machine.block.id})`,
              ],
              [
                "section",
                `${data?.maintenance.machine.section.name} (${data?.maintenance.machine.section.id})`,
              ],
              ["planned", `${data?.maintenance.un_planned ? "No" : "Yes"}`],
              ["status", `${data?.maintenance.resolved ? "Resolved" : "Open"}`],
            ]}
          />
        </Table>

        <Button
          buttonStyle={{
            backgroundColor: "green",
            paddingHorizontal: 10,
            marginTop: 20,
            borderRadius: 5,
          }}
          style={{ marginTop: "5%" }}
          onPress={async () => {
            SetShowSubmit(true);
          }}
        >
          complete task
        </Button>
      </View>
    </ScrollView>
  );
};

export default ViewTicket;
