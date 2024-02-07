import { Container, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container id="header">
      <Box className="header">
        <Typography variant="h1" fontWeight={400}>
          Tiah's News
        </Typography>
      </Box>
    </Container>
  );
}
