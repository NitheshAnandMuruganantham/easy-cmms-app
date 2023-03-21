import * as React from "react";
import { ScrollView, View } from "react-native";
import BodyHead from "../../../components/headTitle";
import style from "./style";
import MaintenanceCard from "../../../components/maintananceCard";
import Spinner from "react-native-loading-spinner-overlay";
import UserContext from "../../../context/userContext";
import axios from "../../../utils/axios";
import { useInterval } from "../../../utils/interval";
import RefetchContext from "../../../context/refetchContext";
import PastMaintenanceCard from "../../../components/pastMaintananceCard";
interface MaintanceHomeProps {
  navigation: any;
}

const MaintenanceHome: React.FunctionComponent<MaintanceHomeProps> = (
  props
) => {
  const user = React.useContext(UserContext);
  const [refetch, setRefresh] = React.useContext(RefetchContext);

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<any[]>([]);
  React.useEffect(() => {
    setLoading(true);
    axios.post("PastMaintenance").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    console.log("refetching past maintenance");
    axios.post("PastMaintenance").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [refetch]);

  useInterval(() => {
    axios.post("PastMaintenance").then((res) => {
      setData(res.data);
    });
  }, 10000);

  return (
    <ScrollView style={style.container}>
      <Spinner visible={loading} textContent={"Loading..."} />
      <BodyHead
        text1="past"
        text2="Maintenances"
        text3="done"
        style={{ marginLeft: 20 }}
      />
      <Spinner visible={loading} textContent={"Loading..."} />
      {!loading &&
        data.map((data, index) => {
          return <PastMaintenanceCard data={data} key={index} />;
        })}
    </ScrollView>
  );
};

export default MaintenanceHome;
