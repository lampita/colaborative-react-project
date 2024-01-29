import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";


const Product = ({ product, addToCart }) => {
  const { image, title, price, stars, agotado, id } = product;

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <figure>
        <a href="#">
          <img src={image} alt={title} />
        </a>
        <figcaption>
          <h3>JUEGO DIGITAL PS4</h3>

          <h2>{title}</h2>

          <div>
            <h4>${price} </h4>
          </div>
        </figcaption>
        
        <Button variant="contained" size="small" onClick={handleOpenDialog}>Agregar</Button>
      </figure>

      <Dialog
        open={open}
        TransitionComponent={Slide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description">
            Agregar al carrito <h6>{title}</h6>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Descartar</Button>
          <Button
            onClick={() => {
              addToCart(id);
              handleClose();
            }}
          >
            De Acuerdo
          </Button>
        </DialogActions>
      </Dialog>

      <style jsx>{`
        h3 {
          font-size: 0.8rem;
          display: inline;
        }

        h2 {
          font-size: 0.7rem;
        }

        h4 {
          font-size: 0.7rem;
          display: inline;
        }

        a {
          text-decoration: none;
          color: rgb(255, 255, 255);
          text-align: center;
        }

        figure {
          background-color: transparent;
          width: 180px;
          height: 380px;
          border: 1px rgb(238, 238, 238);
          aling-items: center;
          margin: 10px;
          font-size: 0.7rem;
        }

        img {
          width: 100%;
        }

        figcaption {
          font-family: "Roboto";
          padding: 1rem;
          padding-top: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          aling-items: center;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default Product;
