const whatsappNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91 9443906305"
).replace(/\D/g, "");

export function getWhatsAppOrderUrl(productName?: string, price?: string) {
  const message = productName
    ? `Hello Liora Fashions, I would like to order the ${productName}${price ? ` (${price})` : ""}.`
    : "Hello Liora Fashions, I would love to know more about your collection.";
  const baseUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "https://wa.me/";

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
