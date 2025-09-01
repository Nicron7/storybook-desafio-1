import {
  Button,
  Typography,
  Box,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";

export interface BuggyShowcaseProps {
  variant?: "contained" | "outlined";
  isMobile?: boolean;
  isLoading?: boolean;
  moreInputs?: boolean;
}

export const BuggyShowcase = ({
  variant,
  isMobile,
  isLoading = false,
  moreInputs = false,
}: BuggyShowcaseProps) => {
  return (
    <Paper
      elevation={10}
      sx={{
        width: isMobile ? "95%" : { xs: "95%", sm: "80%", md: "50%" }, // Bug: tamaños fijos y excesivos, no responsivo
        maxWidth: isMobile ? "400px" : { xs: "400px", md: "500px" }, // Bug: sin límite
        background:
          variant === "contained"
            ? "oklch(0.2226 0 32.32)"
            : "oklch(0.1662 0 32.32 / 15.25%)", // Bug: colores chillones
        padding: isMobile ? 4 : { xs: 4, md: 5 }, // Bug: padding inconsistente
        margin: "auto",
        border:
          variant === "outlined" ? "1px solid oklch(0.1662 0 32.32)" : "none", // Bug: borde muy grueso
        borderRadius: ".5rem", // Bug: sin bordes redondeados
        boxShadow: "0 5px 10px #00000094", // Bug: sombra excesiva
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)",
          fontWeight: "bold",
          letterSpacing: isMobile ? 1 : { xs: 1, sm: 2, md: 3 }, // Bug: cambia mucho según tamaño
          marginBottom: 1,
          textAlign: isMobile
            ? "center"
            : { xs: "center", sm: "left", md: "center" }, // Bug: alineación inconsistente
          fontSize: isMobile ? 24 : { xs: 24, sm: 28, md: 30 }, // Bug: fuente gigante en desktop
        }}
      >
        ¡Componente (Ex)Buggy!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: variant === "contained" ? "#fafafa" : "oklch(0.2433 0 32.32)",
          textAlign: { xs: "center", sm: "left", md: "center" },
          mb: 4,
        }}
      >
        Ya no está tan buggy
      </Typography>

      {moreInputs ? (
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: isMobile ? 0 : { xs: 0, sm: 2 },
              flexDirection: isMobile ? "column" : { xs: "column", sm: "row" },
            }}
          >
            <TextField
              label="Nombre"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor:
                      variant === "contained"
                        ? "#fafafa"
                        : "oklch(0.1662 0 32.32)",
                    borderRadius: ".3rem",
                  },
                  "&:hover fieldset": {
                    borderColor: "#8a8a8aff",
                  },
                },
                width: "100%", // Bug: input se sale en mobile
                background: "transparent", // Bug: fondo semitransparente
                input: {
                  color:
                    variant === "contained"
                      ? "#fafafa"
                      : "oklch(0.1662 0 32.32)", // Bug: texto rojo
                  fontSize: isMobile ? 15 : { xs: 15, md: 16 }, // Bug: fuente muy grande en desktop
                },
                label: {
                  color:
                    variant === "contained"
                      ? "#fafafa"
                      : "oklch(0.1662 0 32.32)", // Bug: label verde
                  fontSize: isMobile ? 15 : { xs: 15, md: 16 },
                },
                mb: 2,
              }}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor:
                      variant === "contained"
                        ? "#fafafa"
                        : "oklch(0.1662 0 32.32)",
                    borderRadius: ".3rem",
                  },
                  "&:hover fieldset": {
                    borderColor: "#8a8a8aff",
                  },
                },
                width: "100%", // Bug: input se sale en mobile
                background: "transparent", // Bug: fondo semitransparente
                input: {
                  color:
                    variant === "contained"
                      ? "#fafafa"
                      : "oklch(0.1662 0 32.32)", // Bug: texto rojo
                  fontSize: isMobile ? 15 : { xs: 15, md: 16 }, // Bug: fuente muy grande en desktop
                },
                label: {
                  color:
                    variant === "contained"
                      ? "#fafafa"
                      : "oklch(0.1662 0 32.32)", // Bug: label verde
                  fontSize: isMobile ? 15 : { xs: 15, md: 16 },
                },
                mb: 2,
              }}
            />
          </Box>
          <TextField
            label="Email"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    variant === "contained"
                      ? "#fafafa"
                      : "oklch(0.1662 0 32.32)",
                  borderRadius: ".3rem",
                },
                "&:hover fieldset": {
                  borderColor: "#8a8a8aff",
                },
              },
              width: "100%", // Bug: input se sale en mobile
              background: "transparent", // Bug: fondo semitransparente
              input: {
                color:
                  variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)", // Bug: texto rojo
                fontSize: isMobile ? 15 : { xs: 15, md: 16 }, // Bug: fuente muy grande en desktop
              },
              label: {
                color:
                  variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)", // Bug: label verde
                fontSize: isMobile ? 15 : { xs: 15, md: 16 },
              },
              mb: 2,
            }}
          />
        </Box>
      ) : (
        <TextField
          label="Nombre"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor:
                  variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)",
                borderRadius: ".3rem",
              },
              "&:hover fieldset": {
                borderColor: "#8a8a8aff",
              },
            },
            width: "100%", // Bug: input se sale en mobile
            background: "transparent", // Bug: fondo semitransparente
            input: {
              color:
                variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)", // Bug: texto rojo
              fontSize: isMobile ? 15 : { xs: 15, md: 16 }, // Bug: fuente muy grande en desktop
            },
            label: {
              color:
                variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)", // Bug: label verde
              fontSize: isMobile ? 15 : { xs: 15, md: 16 },
            },
            mb: 2,
          }}
        />
      )}
      <Box
        sx={{
          display: "flex", // Bug: cambia de block a flex sin sentido
          flexWrap: "wrap",
          gap: 1,
          mb: 2,
          justifyContent: "center",
          alignItems: "center",
          width: isMobile ? "100%" : { xs: "100%", sm: "auto" }, // Bug: se sale en mobile
        }}
      >
        <Button
          variant={variant}
          color="secondary"
          sx={{
            fontSize: 12, // Bug: tamaño de fuente explota en desktop
            padding:
              variant === "contained"
                ? {
                    xs: ".7rem 2.5rem",
                    sm: ".7rem 2.3rem",
                    md: ".7rem 2rem",
                  }
                : {
                    xs: "calc(.7rem - 1px) 2.5rem",
                    sm: "calc(.7rem - 1px) 2.3rem",
                    md: "calc(.7rem - 1px) 2rem",
                  }, // Bug: padding desproporcionado
            border:
              variant === "outlined" ? "1px solid oklch(0.1662 0 32.32)" : "", // Bug: borde llamativo
            borderRadius: ".3rem", // Bug: cambia de cuadrado a círculo
            background: isLoading
              ? "oklch(0.273 0 32.32)"
              : variant === "contained"
              ? "oklch(0.1662 0 32.32)"
              : "transparent", // Bug: gradiente poco usable
            color: isLoading
              ? "#888888ff"
              : variant === "contained"
              ? "#fafafa"
              : "oklch(0.1662 0 32.32)", // Bug: texto casi ilegible
            width: isMobile ? "100%" : { xs: "100%", sm: "auto" }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          {isLoading ? (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CircularProgress
                size={16}
                color="inherit"
              />{" "}
              Cargando...
            </div>
          ) : (
            "¡Haz clic! (Enviar)"
          )}
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            fontSize: 12, // Bug: fuente minúscula en mobile, gigante en desktop
            padding: {
              xs: "calc(.7rem - 1px) 2.5rem",
              sm: "calc(.7rem - 1px) 2.3rem",
              md: "calc(.7rem - 1px) 2rem",
            }, // Bug: padding absurdo
            borderRadius: ".3rem", // Bug: sin bordes redondeados
            color: "oklch(0.3858 0.1158 32.32)",
            width: isMobile ? "100%" : { xs: "100%", sm: "auto" }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          O no... (Cancelar)
        </Button>
      </Box>
      <Typography
        variant="body1"
        sx={{
          color: variant === "contained" ? "#fafafa" : "oklch(0.1662 0 32.32)",
          background:
            variant === "contained" ? "oklch(0.1662 0 32.32)" : "transparent", // Bug: fondo amarillo
          padding: isMobile ? 2 : { xs: 2, sm: 3, md: 4 }, // Bug: padding inconsistente
          border:
            variant === "outlined" ? "1px solid oklch(0.1662 0 32.32)" : "none", // Bug: borde cambia mucho
          fontStyle: "italic",
          borderRadius: ".3rem",
          fontSize: isMobile ? 17 : { xs: 17, md: 20 }, // Bug: fuente muy pequeña o muy grande
          width: "auto", // Bug: texto se sale en mobile
        }}
      >
        Este componente tiene (TENÍA) muchos bugs visuales y de responsive
        intencionales. ¿Puedes encontrarlos todos?
      </Typography>
    </Paper>
  );
};

export default BuggyShowcase;
