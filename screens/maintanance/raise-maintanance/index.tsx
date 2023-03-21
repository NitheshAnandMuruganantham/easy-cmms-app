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
import axios from "../../../utils/axios";
import toast from "react-native-root-toast";
import {
  Ticket_Status,
  useCreateMaintananceMutation,
  useCreateTicketsMutation,
  useGetAllMachinesDropdownQuery,
} from "../../../generated/generated";
import Logger from "../../../utils/logger";
import Spinner from "react-native-loading-spinner-overlay/lib";
import Toast from "react-native-root-toast";
import Capture from "../../../components/capture";
import RefetchContext from "../../../context/refetchContext";
import * as Yup from "yup";
import UserContext from "../../../context/userContext";
interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

const log = new Logger("RaiseTicket");

const RaiseMaintenance: FunctionComponent<Props> = (props) => {
  const { data: machines, loading: MachineLoading } =
    useGetAllMachinesDropdownQuery();
  const [image, setImage] = useState<any>();
  const user = useContext(UserContext);
  const [create, { loading, error }] = useCreateMaintananceMutation();
  const [refresh, setRefresh] = useContext(RefetchContext);

  return (
    <BottomSheet
      onBackdropPress={() => props.setIsVisible(false)}
      isVisible={props.isVisible}
    >
      <Formik
        initialValues={{
          title: "",
          duration: 30,
          machine: undefined,
          description: "",
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Title is required"),
          machine: Yup.number().required("Machine is required"),
          duration: Yup.number().required(),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={async (values) => {
          axios
            .post("inputPastMaintenance", {
              name: values.title,
              description: values.description,
              machine_id: values.machine,
              photo: image,
              from: new Date(),
              to: new Date(
                new Date().setMinutes(new Date().getMinutes() + values.duration)
              ),
            })
            .then((res) => {
              if (res?.data) {
                Toast.show("Work raised successfully", {
                  position: Toast.positions.TOP + 50,
                  duration: Toast.durations.SHORT,
                });
              }
            })
            .catch((e) => {
              toast.show("Something went wrong", {
                position: toast.positions.TOP + 50,
              });
            });
          setRefresh((prev) => !prev);
          props.setIsVisible(false);
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
              visible={isSubmitting || loading}
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
              Raise Work
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
            <Input
              keyboardType="numeric"
              errorMessage={errors.duration}
              placeholder="duration"
              onChangeText={(text) => {
                setFieldValue("duration", text);
              }}
              onBlur={handleBlur("duration")}
              value={`${values.duration}`}
            />
            <Picker
              selectedValue={values.machine}
              placeholder="Select Machine"
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
              <Picker.Item label="Select Machine" value={undefined} />
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
                marginTop: 20,
                marginBottom: 20,
              }}
              style={{
                paddingTop: 50,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
              }}
              title="Raise Work"
            />
          </View>
        )}
      </Formik>
    </BottomSheet>
  );
};

export default RaiseMaintenance;
