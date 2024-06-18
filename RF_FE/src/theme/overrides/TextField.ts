export default function Textfield() {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(26, 188, 156, 1) ",
            },
            "&:hover fieldset": {
              borderColor: "rgba(26, 188, 156, 1)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "rgba(255, 99, 71, 1)",
            },
          },
        },
      },
    },
  };
}
