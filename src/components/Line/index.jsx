import { Box, Typography } from "@mui/material";

const Line = () => {
  return (
    <Box
      sx={{
        height: "1px",
        width: "100%",
        my: "36px",
        backgroundColor: "#24272C",
        position: "relative",
      }}
    >
      <Typography
        component={"span"}
        sx={{
          width: "48px",
          height: "15px",
          fontSize: "12px",
          fontFamily: `'Mulish',sans-serif`,
          textAlign: "center",
          position: "absolute",
          left: "50%",
          top: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
        }}
      >
        OR
      </Typography>
    </Box>
  );
};

export default Line;
