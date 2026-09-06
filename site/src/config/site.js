// ============================================================
// CONFIGURAÇÃO CENTRAL DO SITE HK CUSTOM
// Altere aqui os links de venda e os dados de contato.
// Nenhum outro arquivo deve conter esses valores "hardcoded".
// ============================================================

export const MARKETPLACE_MERCADOLIVRE_URL = "https://www.mercadolivre.com.br/pagina/hkcustom";
export const MARKETPLACE_SHOPEE_URL = "https://shopee.com.br/hkcustom";

export const CONTACT = {
  whatsappNumber: "5511939342449", // apenas dígitos, com DDI + DDD
  whatsappMessage: "Olá! Vim pelo site da HK Custom e gostaria de saber mais sobre os produtos.",
  instagramUrl: "https://www.instagram.com/hk.custom?stkn=MTVyZXV3Zmd2YWVhYw==",
  email: "", // preencher quando disponível
};

export const whatsappLink = () =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const SITE = {
  name: "HK Custom",
  tagline: "Tecnologia que conecta e protege.",
  foundedYear: 2019,
  currentYear: new Date().getFullYear(),
};
