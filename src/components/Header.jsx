import { Container, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container id="header-container">
      <Box className="header">
        <Typography variant="h1" fontWeight={45} sx={{ padding: 1 }}>
          TIAH'S NEWS
        </Typography>
      </Box>
    </Container>
  );
}
