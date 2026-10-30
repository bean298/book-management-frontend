import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Slide, { type SlideProps } from "@mui/material/Slide";

export type SnackbarSeverity = "success" | "info" | "warning" | "error";

interface AppSnackbarProps {
  open: boolean;
  message: string;
  severity?: SnackbarSeverity;
  onClose: () => void;
  autoHideDuration?: number;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

export default function AppSnackbar({
  open,
  message,
  severity,
  onClose,
  autoHideDuration = 2500,
}: AppSnackbarProps) {
  return (
    // Snackbar: Open popup
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={(_event, reason) => {
        // Ignore click outside so the notification stays until timeout
        if (reason === "clickaway") return;
        onClose();
      }}
      slots={{ transition: SlideTransition }} //Transition
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Position where snackbar showup
    >
      {/* Alert: Severit for snackbar */}
      <Alert
        severity={severity}
        onClose={onClose}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
