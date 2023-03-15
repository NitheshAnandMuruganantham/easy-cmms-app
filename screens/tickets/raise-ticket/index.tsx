import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Text, View } from "react-native";
import { BottomSheet, Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import client from "../../../utils/apollo";
import toast from "react-native-root-toast";
import {
  Ticket_Status,
  useCreateTicketsMutation,
  useGetAllMachinesDropdownQuery,
} from "../../../generated/generated";
import Logger from "../../../utils/logger";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from "react-native-root-toast";
import Capture from "../../../components/capture";
import RefetchContext from "../../../context/refetchContext";

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const RaiseTicket: FunctionComponent<Props> = (props) => {
  const { data: machines, loading } = useGetAllMachinesDropdownQuery();
  const [image, setImage] = useState<any>();
  const [createTicket, { loading: CreateTicketsLoading }] =
    useCreateTicketsMutation();
  const [refresh, setRefresh] = useContext(RefetchContext);
  return (
    <BottomSheet
      onBackdropPress={() => props.setIsVisible(false)}
      isVisible={props.isVisible}
    >
      <Formik
        initialValues={{
          title: "",
          machine: "",
          description: "",
        }}
        onSubmit={async (values) => {
          await createTicket({
            variables: {
              createTicketInput: {
                machines: {
                  connect: {
                    id: values.machine,
                  },
                },
                name: values.title,
                description: values.description,
                photos: image,
                status: Ticket_Status.Open,
              },
            },
          }).catch((e) => {
            toast.show("Something went wrong", {
              position: toast.positions.TOP + 50,
            });
          });
          client
            .refetchQueries({
              include: ["Tickets"],
            })
            .catch((e) => {});
          setRefresh(true);
          props.setIsVisible(false);
          Toast.show("Ticket raised successfully", {
            position: Toast.positions.TOP + 50,
            duration: Toast.durations.SHORT,
          });
        }}
      >
        {({
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm,
          isValid,
          values,
          errors,
          setFieldValue,
        }) => (
          <View
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              backgroundColor: "white",
            }}
          >
            <Spinner
              visible={CreateTicketsLoading || isSubmitting || loading}
              textContent={"Loading..."}
            />

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              Raise Ticket
            </Text>
            <Input
              errorMessage={errors.title}
              placeholder="title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            <Input
              errorMessage={errors.description}
              placeholder="description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            <Picker
              selectedValue={values.machine}
              style={{
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 2,
                borderColor: "gray",
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: 10,
                color: "black",
                paddingRight: 30,
              }}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue("machine", itemValue);
              }}
            >
              {machines &&
                machines?.machines.map((machine) => {
                  return (
                    <Picker.Item
                      label={machine.label}
                      value={machine.value}
                      key={machine.value}
                    />
                  );
                })}
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <Capture
              startCamera={props.isVisible}
              image={image}
              initilizeCamera={() => {
                setImage(null);
              }}
              captureImage={(image) => {
                setImage(image);
              }}
            />
            <Button
              disabled={isSubmitting || !image || !isValid}
              onPress={() => submitForm()}
              buttonStyle={{
                backgroundColor: "black",
                borderRadius: 20,
                marginTop: 5,
                marginBottom: 20,
              }}
              style={{
                paddingTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
              }}
              title="Raise Ticket"
            />
          </View>
        )}
      </Formik>
    </BottomSheet>
  );
};

export default RaiseTicket;
