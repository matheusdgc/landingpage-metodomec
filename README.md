# Método MEC — Landing Page

Landing page do programa **Método MEC (Mente, Espírito, Corpo)**, conduzido pela Dra. Andreia Polo Luquete. Página de vendas para inscrições no programa online de desenvolvimento pessoal feminino.

---

## Tecnologias

- React 18 + Vite 5
- Tailwind CSS 3 com tokens de design customizados
- Framer Motion (animações e efeito de partículas)
- Lucide React (ícones)

---

## Estrutura do projeto

```
src/
  components/
    Header.jsx           Navegação fixa com detecção de seção ativa
    Hero.jsx             Seção principal com imagem e CTAs
    Problem.jsx          Seção de problema
    Solution.jsx         Seção de solução
    Method.jsx           Apresentação do método
    About.jsx            Biografia da Dra. Andreia
    Investment.jsx       Preço, countdown e botão de compra
    FAQ.jsx              Perguntas frequentes (accordion)
    Footer.jsx           Rodapé com links e contato
    CountdownTimer.jsx   Contador regressivo até o prazo de inscrição
    ExitIntentPopup.jsx  Popup de saída (desktop e mobile)
    WhatsAppButton.jsx   Botão flutuante de WhatsApp
    ui/
      moving-border.tsx  Botão com borda animada (shadcn/ui)
      LogoWithParticles.jsx  Wrapper com efeito de partículas no hover
  config.js              Configurações centralizadas (URLs, contato, prazo)
  App.jsx
  main.jsx
  index.css
public/
  images/                Imagens (logos, fotos, banners)
  favicon.png
  .htaccess              Configuração Apache para deploy no HostGator
```

---

## Configuracao

Todas as variáveis do negócio estão em `src/config.js`:

```js
CHECKOUT_URL          URL de pagamento (Cakto)
WHATSAPP_NUMBER       Número do WhatsApp (formato internacional, sem +)
WHATSAPP_MESSAGE      Mensagem padrão do WhatsApp
WHATSAPP_WAITLIST_MESSAGE  Mensagem de lista de espera
ENROLLMENT_DEADLINE   Data de encerramento das inscrições
INSTAGRAM_URL         URL do perfil no Instagram
EMAIL                 E-mail de contato
SITE_URL              URL do site em produção
CRM_VERIFICATION_URL  Link de verificação do CRM no CFM
```

## Desenvolvimento

```bash
npm install
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`.

---

## Build para producao

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

---

## Imagens necessarias

Todas as imagens devem estar em `public/images/`:

| Arquivo | Uso |
|---|---|
| `header-logo-mec.png` | Logo no header |
| `logo-mec-v2.png` | Logo no footer |
| `profile1.jpeg` | Foto da Dra. Andreia (Hero) |
| `profile2.jpeg` | Foto da Dra. Andreia (About) |
| `banner2-metodomec.png` | Imagem de compartilhamento (OG/WhatsApp) |
| `banner-metodomec.png` | Banner complementar |
| `favicon.png` | Favicon (raiz de `public/`) |

---

## Notas de manutencao

- O `ExitIntentPopup` dispara uma vez por sessao (via `sessionStorage`). Em desktop, ativa quando o mouse sai pelo topo da janela; em mobile, quando o usuario faz um scroll rapido para cima.
- O `CountdownTimer` exibe automaticamente um link de lista de espera via WhatsApp apos o prazo definido em `ENROLLMENT_DEADLINE`.
- O Schema.org JSON-LD em `index.html` nao possui `validThrough` — para marcar uma nova oferta com prazo, adicione o campo `"validThrough": "YYYY-MM-DD"` dentro de `offers`.
