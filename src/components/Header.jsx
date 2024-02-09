import { Container, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container
      id="header-container"
      sx={{ p: 1, m: 0, boxShadow: 3 }}
      maxWidth="xl"
    >
      <Box className="header">
        <Typography
          variant="h1"
          fontSize="70px"
          fontWeight={400}
          letterSpacing={4}
        >
          TIAH'S NEWS
        </Typography>
      </Box>
    </Container>
  );
}
