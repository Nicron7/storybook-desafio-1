import { Button, Typography, Box, TextField, Paper } from "@mui/material";

export const BuggyShowcase = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        width: { xs: "95%", sm: "80%", md: "50%" }, // Bug: tamaños fijos y excesivos, no responsivo
        maxWidth: { xs: "400px", md: "500px" }, // Bug: sin límite
        background: "oklch(0.2226 0 32.32)", // Bug: colores chillones
        padding: { xs: 4, md: 5 }, // Bug: padding inconsistente
        margin: "auto",
        borderRadius: ".5rem", // Bug: sin bordes redondeados
        boxShadow: "0 5px 10px #00000094", // Bug: sombra excesiva
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#fafafa",
          fontWeight: "bold",
          letterSpacing: { xs: 1, sm: 2, md: 3 }, // Bug: cambia mucho según tamaño
          marginBottom: 1,
          textAlign: { xs: "center", sm: "left", md: "center" }, // Bug: alineación inconsistente
          fontSize: { xs: 26, sm: 28, md: 30 }, // Bug: fuente gigante en desktop
        }}
      >
        ¡Componente (Ex)Buggy!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#8a8a8aff",
          textAlign: { xs: "center", sm: "left", md: "center" },
          mb: 4,
        }}
      >
        Ya no está tan buggy
      </Typography>
      <TextField
        label="Nombre"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fafafa",
              borderRadius: ".3rem",
            },
            "&:hover fieldset": {
              borderColor: "#8a8a8aff",
            },
          },
          width: "100%", // Bug: input se sale en mobile
          background: "transparent", // Bug: fondo semitransparente
          input: {
            color: "#fafafa", // Bug: texto rojo
            fontSize: { xs: 15, md: 16 }, // Bug: fuente muy grande en desktop
          },
          label: {
            color: "#fafafa", // Bug: label verde
            fontSize: { xs: 15, md: 16 },
          },
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: "flex", // Bug: cambia de block a flex sin sentido
          flexWrap: "wrap",
          gap: 1,
          mb: 2,
          justifyContent: "center",
          alignItems: { xs: "center", sm: "center" },
          width: { xs: "100%", sm: "auto" }, // Bug: se sale en mobile
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontSize: 12, // Bug: tamaño de fuente explota en desktop
            padding: {
              xs: ".7rem 2.5rem",
              sm: ".7rem 2.3rem",
              md: ".7rem 2rem",
            }, // Bug: padding desproporcionado
            border: "", // Bug: borde llamativo
            borderRadius: ".3rem", // Bug: cambia de cuadrado a círculo
            background: "oklch(0.1662 0 32.32)", // Bug: gradiente poco usable
            color: "#fafafa",
            width: { xs: "100%", sm: "auto" }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          ¡Haz clic! (Enviar)
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            fontSize: 12, // Bug: fuente minúscula en mobile, gigante en desktop
            padding: {
              xs: "calc(.7rem - 2px) 2.5rem",
              sm: "calc(.7rem - 2px) 2.3rem",
              md: "calc(.7rem - 2px) 2rem",
            }, // Bug: padding absurdo
            borderRadius: ".3rem", // Bug: sin bordes redondeados
            color: "oklch(0.3858 0.1158 32.32)",
            width: { xs: "100%", sm: "auto" }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          O no... (Cancelar)
        </Button>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: "#fafafa",
          background: "oklch(0.1662 0 32.32)", // Bug: fondo amarillo
          padding: { xs: 2, sm: 3, md: 4 }, // Bug: padding inconsistente
          border: "1px solid #fafafa", // Bug: borde cambia mucho
          fontStyle: "italic",
          borderRadius: ".3rem",
          fontSize: { xs: 18, md: 20 }, // Bug: fuente muy pequeña o muy grande
          width: { xs: "auto", sm: "auto" }, // Bug: texto se sale en mobile
        }}
      >
        Este componente tiene (TENÍA) muchos bugs visuales y de responsive
        intencionales. ¿Puedes encontrarlos todos?
      </Typography>
    </Paper>
  );
};

export default BuggyShowcase;
