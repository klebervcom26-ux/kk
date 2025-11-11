// CONFIGURÁVEL: altere apenas o número do WhatsApp se quiser
const WHATSAPP_NUMBER = '5511948249533'; // formato: país + ddd + número

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Quero um orçamento sem compromisso para rastreamento veicular.')}`

// Atualiza os links do site para WhatsApp
const btns = [document.getElementById('btn-hero'), document.getElementById('btn-cta'), document.getElementById('whatsapp-top')]
btns.forEach(b => { if(b) b.setAttribute('href', whatsappLink) })

// Espaços para inserir Pixel/Google Tag
// Se você tiver IDs, cole os scripts aqui manualmente ou peça pra eu adicionar:

// EXEMPLO (não ativado):
// function insertFacebookPixel(id){
//   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//   n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//   n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
//   }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
//   window.fbq('init', id); window.fbq('track', 'PageView');
// }

// Limpeza: mostra no console que a página carregou
console.log('JF Tech landing (static) carregada. WhatsApp:', WHATSAPP_NUMBER)
