export const useWhatsAppChat = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = '+573043824486'; // Número de teléfono de WhatsApp
    const message = 'Hola, estoy interesado en contactar contigo.'; // Mensaje predeterminado (opcional)
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_blank');
  };
  return { redirectToWhatsApp };
};
