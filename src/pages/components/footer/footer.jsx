import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_section}>
        <h3>Nosotros</h3>
        <hr />
        <p style={{ fontFamily: 'sans-serif' }}>
          Somos una tienda en línea de juegos digitales, gift cards, recargas y mucho más, precios bajos y gran variedad de productos disponibles.
        </p>
         
        <p>Escribinos en Facebook, Instagram o por E-mail.</p>
        
        <div className={styles.footer_buttons}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/footer/facebook_png.png" alt="Logo de Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/footer/instagram_png.png" alt="Logo de Instagram" />
          </a>
          <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" title="Correo de Gmail.com">
            <img src="/footer/email_png.png" alt="Icono de correo electrónico" />
          </a>
        </div>
      </div>

      <div className={styles.footer_section}>
        <h3>Seguridad </h3>
        <hr />
        <p>Tu compra está protegida y nuestros productos cuentan con garantía ilimitada. Nunca caduca el acceso al juego.</p>

        
          <div style={{ visibility: 'hidden', height: '85px' }}>
          {/* Contenido invisible que ocupa espacio */}
          </div>

          <div className={styles.footer_logos}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/footer/visa_png.png" alt="Logo de Visa" width={"40px"}/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/footer/mastercard_png.png" alt="Logo de Mastercard" width={"40px"}/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/footer/paypal_png.png" alt="Logo de paypal" width={"40px"}/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/footer/americanexpress_png.png" alt="Logo de American Express" width={"40px"}/>
          </a>
          </div>

      </div>


  

      <div className={styles.footer_section}>
        <h3>Calidad</h3>
        <hr />
        <p>Nuestros juegos digitales son versiones originales y completas, no tienen límite de uso, quedan para siempre en tu consola.</p>
      </div>

      
      <div>
        <h5>Contacto</h5>
        <hr />
        <p>MalumaStore@gmail.com</p>
        <p>+54 9 11 1234-5678</p>

        
        {/* Botón de contacto */}
        <button className={styles.contact_button}>Contactar</button>
      


        {/* <p><hr /></p> */}
         <p>Todos los derechos reservados. 2024 ©</p>
         <p></p>
        </div>
    
      
      
    </footer>
  );
};

export default Footer;
