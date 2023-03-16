import * as React from "react";
import { ScrollView, View } from "react-native";
import BodyHead from "../../../components/headTitle";
import TicketItem from "../../../components/ticketCard";
import style from "./style";
import MaintenanceCard from "../../../components/maintananceCard";
import { useMaintenanceQuery } from "../../../generated/generated";
import Spinner from "react-native-loading-spinner-overlay";
import UserContext from "../../../context/userContext";
import axios from "../../../utils/axios";
import { useInterval } from "../../../utils/interval";
import RefetchContext from "../../../context/refetchContext";
interface MaintanceHomeProps {
  navigation: any;
}

const MaintanceHome: React.FunctionComponent<MaintanceHomeProps> = (props) => {
  const user = React.useContext(UserContext);
  const [refetch, setRefresh] = React.useContext(RefetchContext);

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    setLoading(true);
    axios.post("maintenance").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    console.log("refetching maintenance");
    axios.post("maintenance").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [refetch]);

  useInterval(() => {
    axios.post("maintenance").then((res) => {
      setData(res.data);
    });
  }, 10000);

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
        data.map((data, index) => {
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
