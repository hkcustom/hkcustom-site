// Monta a URL correta para arquivos em public/, respeitando o "base"
// configurado no vite.config.js (necessário para publicar em GitHub Pages,
// onde o site fica em /<repositorio>/ em vez da raiz do domínio).
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
