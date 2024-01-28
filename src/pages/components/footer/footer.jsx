
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_section}>
        <h3>Tienda de juegos digitales PS4 en Argentina</h3>
        <p style={{ fontFamily: 'sans-serif' }}>
          Somos una tienda en línea de Juegos digitales, gift cards, recargas y mucho más, siempre brindando la mejor atención y servicio a todos nuestros clientes desde 2020, que además se benefician de promociones cada mes!
        </p>
        <a href="#" className="boton">
          Por WhatsApp
        </a>
      </div>
      <div className={styles.footer_section}>
        <p>
          <i className="fas fa-check fa-2x"></i>
        </p>
        <h3>CALIDAD</h3>
        <p>
          Nuestros juegos digitales son versiones originales y completas, no tienen límite de uso, quedan para siempre en tu consola.
        </p>
      </div>
      <div className={styles.footer_section}>
        <p>
          <i className="fas fa-shield-alt fa-2x"></i>
        </p>
        <h3>SEGURIDAD</h3>
        <p>
          Tu compra está protegida y nuestros productos cuentan con garantía ilimitada. Nunca caduca el acceso al juego.
        </p>
      </div>
      <div className={styles.footer_section}>
        <p>
          <i className="fas fa-phone fa-2x"></i>
        </p>
        <h3>ATENCIÓN</h3>
        <p>Contás con un soporte por WhatsApp con la mejor atención posible.</p>
      </div>
    </footer>
  );
};

export default Footer;