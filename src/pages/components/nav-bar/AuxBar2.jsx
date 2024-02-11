import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  handleChange,
  MenuItem,
} from "@mui/material";
//import styles from "@/styles/AuxBar2.module.css";
import { useContext } from "react";
import { ProductsContext } from "@/pages/components/Reducer+Context/Reducer+Context";

const AuxBar2 = () => {
  const [state, dispatch] = useContext(ProductsContext);
  const { cart, products } = state;
  const totalQuantity = cart.reduce(
    (qty, product) => qty + product.quantity,
    0
  );

  const opcionMapeo = (op) => {
    dispatch({ type: "OPCION_DE_MAPEO", payload: op });
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          position: "fixed",
          zIndex: "10",
          marginTop: "0rem",
                  }}
                mode="dark" 
      >
        <Grid item xs={2} >
          <FormControl
            variant="filled"
            fullWidth
            style={{backgrounColor: "black", color: "white" }}
          >
            <InputLabel
              id="demo-simple-select-filled-label"
              style={{ backgrounColor: "black", color: "white" }}
            >
              CUENTAS PS PLUS
            </InputLabel>
            <Select
              //labelId="demo-simple-select-filled-label"
              //id="demo-simple-select-filled"
              style={{ backgrounColor: "grey", color: "white" }}
              onChange={handleChange}
            >
              <MenuItem style={{ backgrounColor: "grey", color: "black" }}>
                Demo 1
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "black" }}>
                Demo 2
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "black" }}>
                Demo 3
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2} style={{ backgrounColor: "black", color: "white" }}>
          <FormControl
            variant="filled"
            fullWidth
            style={{ backgrounColor: "black", color: "white" }}
          >
            <InputLabel style={{ backgrounColor: "black", color: "white" }}>
              PLAYSTATION 4
            </InputLabel>
            <Select
              onChange={handleChange}
              style={{ backgrounColor: "black", color: "white" }}
            >
              <MenuItem
                style={{ backgrounColor: "black", color: "white" }}
                onClick={() => {
                  opcionMapeo("all");
                }}
              >
                TODOS LOS JUEGOS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  opcionMapeo("masVendido");
                }}
                v
                alue=""
                style={{ backgrounColor: "black", color: "white" }}
              >
                MAS VENDIDOS
              </MenuItem>
              <MenuItem
                onClick={() => {
                  opcionMapeo("ofertas");
                }}
                style={{ backgrounColor: "black", color: "white" }}
              >
                OFERTAS
              </MenuItem>
              <MenuItem
                style={{ backgrounColor: "black", color: "white" }}
                onClick={() => {
                  opcionMapeo("preventa");
                }}
              >
                PREVENTAS
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid style={{ backgrounColor: "black", color: "white" }} item xs={2}>
          <FormControl variant="filled" fullWidth className="formcontrol">
            <InputLabel style={{ backgrounColor: "black", color: "white" }}>
              PLAYSTATION-5
            </InputLabel>
            <Select
              onChange={handleChange}
              style={{ backgrounColor: "black", color: "white" }}
            >
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} style={{ backgrounColor: "black", color: "white" }}>
          <FormControl
            style={{ backgrounColor: "black", color: "white" }}
            variant="filled"
            fullWidth
          >
            <InputLabel style={{ backgrounColor: "black", color: "white" }}>
              CUENTAS PS PLUS
            </InputLabel>
            <Select
              onChange={handleChange}
              style={{ backgrounColor: "black", color: "white" }}
            >
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} style={{ backgrounColor: "black", color: "white" }}>
          <FormControl
            style={{ backgrounColor: "black", color: "white" }}
            variant="filled"
            fullWidth
          >
            <InputLabel
              style={{ backgrounColor: "black", color: "white" }}
              //id="demo-simple-select-disabled-label"
            >
              GIFT CARDS
            </InputLabel>
            <Select
              onChange={handleChange}
              style={{ backgrounColor: "black", color: "white" }}
            >
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2} style={{ backgrounColor: "black", color: "white" }}>
          <FormControl
            variant="filled"
            fullWidth
            style={{ backgrounColor: "black", color: "white" }}
          >
            <InputLabel style={{ backgrounColor: "black", color: "white" }}>
              PSN CARDS
            </InputLabel>
            <Select
              onChange={handleChange}
              style={{ backgrounColor: "black", color: "white" }}
            >
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
              <MenuItem style={{ backgrounColor: "black", color: "white" }}>
                Demo
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default AuxBar2;
