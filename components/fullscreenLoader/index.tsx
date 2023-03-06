import React, { useEffect, useState } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const Loader = function () {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);
  return (
    <Spinner
      visible={loading}
      textContent={"Loading..."}
      textStyle={{
        fontFamily: "Poppins-Regular",
        color: "#FFF",
      }}
    />
  );
};

export default Loader;
