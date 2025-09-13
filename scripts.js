async function init() {
  try {
    const response = await fetch('produtos.json');
    const produtosData = await response.json();
    window.PRODUTOS = produtosData;
    render();
  } catch (e) {
    console.error('Erro ao carregar produtos:', e);
  }
}

function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else e.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).filter(Boolean).forEach(c => {
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return e;
}

const grid = document.getElementById('produtos');
const q = document.getElementById('q');
const fCategoria = document.getElementById('fCategoria');
const fPotencia = document.getElementById('fPotencia');
const btnLimpar = document.getElementById('btnLimpar');
const toast = document.getElementById('toast');
const modalWrap = document.getElementById('modalWrap');
const modalTitle = document.getElementById('modalTitle');
const panesEl = document.getElementById('panes');
const tabsEl = document.getElementById('tabs');
const modalCloseBtn = document.getElementById('modalClose');
if (modalCloseBtn) {
  modalCloseBtn.onclick = () => {
    if (modalWrap) modalWrap.style.display = 'none';
  };
}

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

function render() {
  if (!grid || !window.PRODUTOS) return;
  grid.innerHTML = '';
  const term = (q && q.value ? q.value : '').toLowerCase();
  const cat = fCategoria && fCategoria.value ? fCategoria.value : '';
  const pwr = fPotencia && fPotencia.value ? fPotencia.value : '';
  let list = window.PRODUTOS.filter(p => {
    const hitText = [p.nome, p.categoria, (p.specs || []).join(' '), (p.highlights || []).join(' ')].join(' ').toLowerCase().includes(term);
    const hitCat = !cat || p.categoria === cat;
    const hitPwr = !pwr || (pwr === '<=160' && p.potencia <= 160) || (pwr === '<=400' && p.potencia <= 400) || (pwr === '>400' && p.potencia > 400);
    return hitText && hitCat && hitPwr;
  });
  if (!list.length) {
    grid.appendChild(el('div', { class: 'small', html: 'Nenhum item encontrado. Ajuste os filtros.' }));
    return;
  }
  list.forEach(p => {
    const mediaEl = el('div', { class: 'media', onclick: () => openModal(p) },
      p.media && p.media.fotos && p.media.fotos[0] ?
        el('img', { src: p.media.fotos[0], alt: p.nome, style: 'width:100%; height:100%; object-fit:cover' }) :
        'imagem do produto'
    );
    const tags = el('div', { class: 'meta' }, [
      el('span', { class: 'tag' }, p.categoria),
      el('span', { class: 'tag ok' }, `${p.potencia} W RMS`),
      p.highlights && p.highlights[0] ? el('span', { class: 'tag warn' }, p.highlights[0]) : null
    ]);
    const specs = el('div', { class: 'specs', html: '• ' + (p.specs || []).join('<br>• ') });
    const addBtn = el('button', { class: 'btn', 'data-id': p.id }, 'Adicionar à cotação');
    addBtn.onclick = () => toggleCart(p);
    const cardBody = el('div', { class: 'body' }, [
      el('h3', { class: 'h', onclick: () => openModal(p) }, p.nome),
      tags,
      specs,
      el('div', { class: 'price' }, [
        addBtn,
        el('button', { class: 'btn ghost', onclick: () => copyShare(p) }, 'Copiar link')
      ])
    ]);
    const card = el('article', { class: 'card' }, [mediaEl, cardBody]);
    grid.appendChild(card);
  });
}

const CART = new Set();
function toggleCart(p) {
  if (CART.has(p.id)) {
    CART.delete(p.id);
    showToast(`Removido: ${p.nome}`);
  } else {
    CART.add(p.id);
    showToast(`Adicionado: ${p.nome}`);
  }
}

function copyShare(p) {
  const url = location.origin + location.pathname + `?produto=${encodeURIComponent(p.id)}`;
  navigator.clipboard.writeText(url).then(() => showToast('Link copiado!'));
}

function openModal(p) {
  if (!modalWrap) return;
  modalTitle.textContent = p.nome;
  tabsEl.innerHTML = '';
  panesEl.innerHTML = '';
  const tabNames = ['Visão Geral','Especificações','Curvas','Mídia','Aplicações & Setup','Venda (Dores & Provas)','Documentos'];
  tabNames.forEach((name, i) => {
    const tab = el('button', { class: 'tab' + (i === 0 ? ' active' : ''), onclick: () => switchTab(i) }, name);
    tabsEl.appendChild(tab);
    const pane = el('div', { class: 'pane' + (i === 0 ? ' active' : ''), id: 'pane' + i });
    panesEl.appendChild(pane);
  });
  // Pane 0: overview bullets
  const pane0 = document.getElementById('pane0');
  if (pane0) {
    pane0.innerHTML = '<p style="color:var(--muted)">Projetado para <b>voz na frente</b> com timbre limpo.</p>';
    if (p.venda && p.venda.bullets) {
      const ul = el('ul', { class: 'specs', html: '• ' + p.venda.bullets.join('<br>• ') });
      pane0.appendChild(ul);
    }
  }
  // Pane1: full specs
  const pane1 = document.getElementById('pane1');
  if (pane1) {
    const kv = p.specs_full || {};
    if (Object.keys(kv).length) {
      const table = el('table', { class: 'table kv' });
      Object.entries(kv).forEach(([k, v]) => {
        const tr = el('tr', {}, [el('td', {}, k), el('td', {}, v)]);
        table.appendChild(tr);
      });
      pane1.appendChild(table);
    } else {
      pane1.appendChild(el('div', { class: 'small' }, 'Especificações detalhadas indisponíveis.'));
    }
  }
  // Pane2: curves
  const pane2 = document.getElementById('pane2');
  if (pane2) {
    if (p.response_curve_img) {
      pane2.appendChild(el('img', { src: p.response_curve_img, alt: 'Curva de resposta', style: 'width:100%; border:1px solid var(--line); border-radius:10px' }));
    } else {
      pane2.appendChild(el('div', { class: 'small' }, 'Curva indisponível'));
    }
  }
  // Pane3: media
  const pane3 = document.getElementById('pane3');
  if (pane3) {
    const gal = el('div', { class: 'gallery' });
    (p.media?.fotos || []).forEach(src => {
      gal.appendChild(el('img', { src, alt: p.nome }));
    });
    const vids = (p.media?.videos || []).map(u => {
      const embed = u.includes('embed') ? u : u.replace('watch?v=', 'embed/');
      const container = el('div', { class: 'video' });
      const iframe = el('iframe', { src: embed, allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowfullscreen: true });
      container.appendChild(iframe);
      return container;
    });
    pane3.appendChild(gal);
    vids.forEach(v => pane3.appendChild(v));
  }
  // Pane4: aplicacoes
  const pane4 = document.getElementById('pane4');
  if (pane4) {
    const ap = p.aplicacoes || {};
    pane4.appendChild(el('div', { html: `<b>Estilo:</b> ${ap.estilo || '-'}` }));
    pane4.appendChild(el('div', { html: `<b>Cortes sugeridos:</b> ${ap.cortes || '-'}` }));
    pane4.appendChild(el('div', { html: `<b>Amplificação:</b> ${ap.amps_sugeridos || '-'}` }));
    pane4.appendChild(el('div', { html: `<b>Caixas/Instalação:</b> ${ap.caixas || '-'}` }));
    pane4.appendChild(el('div', { class: 'small', html: '<i>Tip de segurança:</i> use limiter adequado ao RMS e corte HPF indicado.' }));
  }
  // Pane5: venda details
  const pane5 = document.getElementById('pane5');
  if (pane5) {
    pane5.innerHTML = `
      <p><b>Dor:</b> ${p.venda?.dor || '-'}</p>
      <p><b>Ganho:</b> ${p.venda?.ganho || '-'}</p>
      <p><b>Prova:</b> ${p.venda?.prova || '-'}</p>
      <p><b>Oferta:</b> ${p.venda?.oferta || '-'}</p>
      <ul>${(p.venda?.bullets || []).map(b => `<li>${b}</li>`).join('')}</ul>
    `;
  }
  // Pane6: docs
  const pane6 = document.getElementById('pane6');
  if (pane6) {
    if (p.documentos && p.documentos.length) {
      p.documentos.forEach(doc => {
        const div = el('div', {});
        const link = el('a', { href: doc.url, target: '_blank' }, doc.titulo);
        div.appendChild(link);
        pane6.appendChild(div);
      });
    } else {
      pane6.appendChild(el('div', { class: 'small' }, 'Nenhum documento anexado.'));
    }
  }
  modalWrap.style.display = 'flex';
  function switchTab(i) {
    const tabElems = tabsEl.querySelectorAll('.tab');
    const paneElems = panesEl.querySelectorAll('.pane');
    tabElems.forEach((el, idx) => el.classList.toggle('active', idx === i));
    paneElems.forEach((el, idx) => el.classList.toggle('active', idx === i));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  if (q) q.addEventListener('input', render);
  if (fCategoria) fCategoria.addEventListener('change', render);
  if (fPotencia) fPotencia.addEventListener('change', render);
  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      if (q) q.value = '';
      if (fCategoria) fCategoria.value = '';
      if (fPotencia) fPotencia.value = '';
      render();
    });
  }
});
