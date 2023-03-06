import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent } from "react";
import Tickets from "./home";
import ViewTicket from "./view";
import HomeHeader from "../../components/navigationHeaders/home";
interface VenueProps {}

const Stack = createNativeStackNavigator();

const Venue: FunctionComponent<VenueProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TicketHome"
        options={{
          header(props) {
            return <HomeHeader />;
          },
        }}
        component={Tickets}
      />
      <Stack.Screen
        options={{
          title: "View Ticket",
        }}
        name="TicketView"
        component={ViewTicket}
      />
    </Stack.Navigator>
  );
};

export default Venue;
