import { Alert } from "@mui/material";

function ErrorAlert() {
  return (
    <div style={{ width: "70%", height: "1000px", margin: "80px auto" }}>
      <Alert
        variant="filled"
        severity="error"
        sx={{
          justifyContent: "center",
        }}
      >متاسفانه مشکلی رخ داده است </Alert>
    </div>
  );
}

export default ErrorAlert;
