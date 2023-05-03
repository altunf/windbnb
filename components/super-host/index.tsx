import Button from "@mui/material/Button";

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
      >
        Super Host
      </Button>
    </>
  );
}
