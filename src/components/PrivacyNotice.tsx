import { Link } from 'react-router-dom';

/**
 * Aviso de primera capa (RGPD/AEPD) para mostrar junto a los formularios que
 * recogen datos personales.
 */
const PrivacyNotice = () => (
  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
    Responsable: Jordi Reina García (D&amp;J Partners). Finalidad: responder a tu solicitud y gestión
    comercial. Derechos: jordi@djpartners.es. Más información en la{' '}
    <Link to="/privacy-policy" className="underline hover:text-gray-700">política de privacidad</Link>.
  </p>
);

export default PrivacyNotice;
