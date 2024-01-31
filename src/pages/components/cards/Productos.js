import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import Tooltip from "@mui/material/Tooltip";

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
        <div>
          <img src={image} alt={title} />
        </div>
        <figcaption>
          <div className="encabezado">JUEGO DIGITAL PS4</div>
          <div className="cuerpo">
            <Tooltip title={title.toUpperCase()} placement="top" arrow>
              <div>
                {title.length > 20 ? (
                  <span><strong> {title.slice(0, 22 - 1).toUpperCase() + " \u2026"}</strong></span>
                ) : (
                  <span><strong>{title.toUpperCase()}</strong></span>
                )}
                <div>{Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price)}</div>
              </div>
            </Tooltip>
          </div>
          <div className="pie">
            <Button
              variant="contained"
              style={{
                backgroundImage: "linear-gradient(to right, #0054a5, #1db6ef)",
              }}
              size="small"
              onClick={handleOpenDialog}
            >
              Agregar
            </Button>
          </div>
        </figcaption>
      </figure>

      <Dialog
        open={open}
        TransitionComponent={Slide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div>🛒 Agregar al carrito</div><div><strong>  {title.toUpperCase()}</strong> ?</div>
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
        .encabezado {
          font-size: 0.6rem;
          color: white;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .cuerpo {
          font-size: 0.7rem;
          color: white;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .pie {
          font-size: 0.7rem;
          color: white;
          display: flex;
          justify-content: center;
        }

        figure {
          background-color: transparent;
          width: 180px;
          height: 350px;
          border: 1px solid white;
          border-radius: 5px;
          margin: 10px;
        }

        img {
          width: 100%;
        }

        figcaption {
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 5px;
        }
      `}</style>
    </>
  );
};

export default Product;
