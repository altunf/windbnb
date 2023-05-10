import Button from "@mui/material/Button";
import { montserrat700 } from "@/styles/fonts";

export default function SuperHost() {
  return (
    <>
      <Button
        sx={{
          borderRadius: 24,
          borderColor: "black",
          color: "black",
          height: 30,
        }}
        variant="outlined"
        size="small"
        className={montserrat700.className}
      >
        Super Host
      </Button>
    </>
  );
}
