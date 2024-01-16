import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <TailSpin visible={true} height="80" width="80" color="#1C39BB" />
    </div>
  );
}

export default Loader;
