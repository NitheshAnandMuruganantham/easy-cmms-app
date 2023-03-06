import * as React from "react";
import { ScrollView, View } from "react-native";
import BodyHead from "../../../components/headTitle";
import TicketItem from "../../../components/ticketCard";
import style from "./style";
import MaintenanceCard from "../../../components/maintananceCard";
import { useMaintenanceQuery } from "../../../generated/generated";
import Spinner from "react-native-loading-spinner-overlay";

interface MaintanceHomeProps {
  navigation: any;
}

const MaintanceHome: React.FunctionComponent<MaintanceHomeProps> = (props) => {
  const { data, loading, error } = useMaintenanceQuery({
    variables: {
      where: {
        resolved: {
          equals: false,
        },
      },
    },
  });

  return (
    <ScrollView style={style.container}>
      <Spinner visible={loading} textContent={"Loading..."} />
      <BodyHead
        text1="Ongoing"
        text2="raised"
        text3="Maintenances"
        style={{ marginLeft: 10 }}
      />
      <Spinner visible={loading} textContent={"Loading..."} />
      {!loading &&
        data?.maintenances
          .filter((d) => d.resolved == false)
          .map((data, index) => {
            return (
              <MaintenanceCard
                data={data}
                key={index}
                viewMaintenance={(id) => {
                  props.navigation.navigate("ViewMaintenance", {
                    MaintenanceId: id,
                  });
                }}
              />
            );
          })}
    </ScrollView>
  );
};

export default MaintanceHome;
