// Logo SBMH embutida (PNG transparente). Para trocar, passe { logoSrc: 'caminho/da/logo.png' }.
const LOGO_SBMH = 'data:image/png;base64,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';

/**
 * Particle Ribbon — anel de partículas em forma de sela (3D) cujas partículas
 * saem do anel e montam a logo SBMH no centro, depois voltam.
 * Sem dependências. Uso: ParticleRibbon(document.querySelector('canvas'), { ...opções })
 * Retorna { destroy() } para limpar (útil em React/Next: chamar no cleanup do useEffect).
 */
function ParticleRibbon(canvas, opts) {
  const o = Object.assign({
    particles: 5200,         // total de partículas — TODAS montam a logo (nenhuma sobra no anel)
    trails: 0,               // linhas roxas desligadas (coloque 5 para voltar)
    trailColor: [84, 28, 140],  // roxo escuro (troque aqui a cor da linha)
    trailWidth: 2.2,         // espessura da linha em px
    particleColor: [255, 255, 255],
    background: '#000',
    speed: 1,                // multiplicador geral de velocidade
    fill: 0.86,              // quanto da largura o anel ocupa
    // ---- construção no centro ----
    build: true,             // liga/desliga a animação de "construção"
    shapes: ['logo'],        // formas em sequência: 'logo', 'cube', 'sphere', 'pyramid' ou 'text:SEU TEXTO'
    logoSrc: LOGO_SBMH,      // imagem da logo (PNG com fundo transparente). Pode trocar por '/img/logo.png'
    buildSize: 0.34,         // tamanho da forma em relação ao anel (anel = 1)
    hold: 6                  // segundos que a forma fica montada
  }, opts || {});

  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, DPR = 1, scale = 1, raf = 0, running = true, visible = true;
  const TAU = Math.PI * 2;

  // ---- Geometria: anel em "sela" (tipo Pringles) ----
  const R = 1, A = 0.36;                       // raio e amplitude da ondulação
  const center = (t, r = R, a = A, ph = 0) => [r * Math.cos(t), a * Math.cos(2 * t + ph), r * Math.sin(t)];
  const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v); };

  // ---- Partículas ----
  let P;
  function buildParticles() {
    // número fixo (não reduz no celular): menos partículas deixaria a logo falhada
    const n = o.particles;
    P = new Float32Array(n * 6); // t, radial, vertical, velocidade, brilho, fase
    for (let i = 0; i < n; i++) {
      const k = i * 6;
      P[k]     = Math.random() * TAU;
      P[k + 1] = gauss() * 0.12;                 // espessura radial da faixa
      P[k + 2] = gauss() * 0.075;                 // espessura vertical
      P[k + 3] = (0.012 + Math.random() * 0.02) * (Math.random() < 0.5 ? 1 : 0.6);
      P[k + 4] = 0.35 + Math.pow(Math.random(), 1.6) * 0.65;
      P[k + 5] = Math.random() * TAU;
    }
  }

  // ---- Construção: formas-alvo ----
  // Cada gerador devolve n pontos [x,y,z] distribuídos na superfície/arestas da forma.
  const rnd = (a, b) => a + Math.random() * (b - a);
  function onSegment(a, b) { const t = Math.random(); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  function onTriangle(a, b, c) { let u = Math.random(), v = Math.random(); if (u + v > 1) { u = 1 - u; v = 1 - v; }
    return [a[0] + (b[0] - a[0]) * u + (c[0] - a[0]) * v, a[1] + (b[1] - a[1]) * u + (c[1] - a[1]) * v, a[2] + (b[2] - a[2]) * u + (c[2] - a[2]) * v]; }
  // arestas bem marcadas (60%) + faces preenchidas (40%) = aparência de estrutura
  function fromMesh(n, edges, tris) { const out = [];
    for (let i = 0; i < n; i++) out.push(Math.random() < 0.6 ? onSegment(...edges[(Math.random() * edges.length) | 0]) : onTriangle(...tris[(Math.random() * tris.length) | 0]));
    return out; }
  const SHAPES = {
    cube(n, S) { const s = S * 0.85, v = [];
      for (let i = 0; i < 8; i++) v.push([(i & 1 ? s : -s), (i & 2 ? s : -s), (i & 4 ? s : -s)]);
      const E = [[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]].map(([a, b]) => [v[a], v[b]]);
      const F = [[0,1,3,2],[4,5,7,6],[0,1,5,4],[2,3,7,6],[0,2,6,4],[1,3,7,5]];
      const T2 = []; F.forEach(([a, b, c, d]) => { T2.push([v[a], v[b], v[c]], [v[a], v[c], v[d]]); });
      return fromMesh(n, E, T2); },
    pyramid(n, S) { const s = S * 1.05, b = -S * 0.8, ap = [0, S * 1.05, 0];
      const v = [[-s, b, -s], [s, b, -s], [s, b, s], [-s, b, s]];
      const E = [[v[0], v[1]], [v[1], v[2]], [v[2], v[3]], [v[3], v[0]], [v[0], ap], [v[1], ap], [v[2], ap], [v[3], ap]];
      const T2 = [[v[0], v[1], ap], [v[1], v[2], ap], [v[2], v[3], ap], [v[3], v[0], ap], [v[0], v[1], v[2]], [v[0], v[2], v[3]]];
      return fromMesh(n, E, T2); },
    sphere(n, S) { const r = S * 1.1, out = [], g = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < n; i++) { const y = 1 - (i / (n - 1)) * 2, rr = Math.sqrt(1 - y * y), th = g * i;
        out.push([Math.cos(th) * rr * r, y * r, Math.sin(th) * rr * r]); }
      return out; },
    // Logo: 55% das partículas no contorno (deixa a forma nítida) + 45% no preenchimento
    logo(n, S) { const L = logoData, k = (S * 3.1) / L.h, out = [];
      for (let i = 0; i < n; i++) {
        const src = Math.random() < 0.55 ? L.edge : L.fill;
        const q = src[(Math.random() * src.length) | 0];
        out.push([(q[0] + Math.random() - 0.5 - L.w / 2) * k, -(q[1] + Math.random() - 0.5 - L.h / 2) * k, rnd(-0.01, 0.01)]);
      }
      return out; },
    text(n, S, label) { const c = document.createElement('canvas'), w = 800, h = 220; c.width = w; c.height = h;
      const g = c.getContext('2d'); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      let fs = 180; g.font = `800 ${fs}px system-ui, sans-serif`;
      while (g.measureText(label).width > w * 0.92 && fs > 20) { fs -= 6; g.font = `800 ${fs}px system-ui, sans-serif`; }
      g.fillText(label, w / 2, h / 2);
      const d = g.getImageData(0, 0, w, h).data, px = [];
      for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) if (d[(y * w + x) * 4 + 3] > 128) px.push([x, y]);
      const k = (S * 4.2) / w, out = [];
      for (let i = 0; i < n; i++) { const q = px[(Math.random() * px.length) | 0] || [w / 2, h / 2];
        out.push([(q[0] - w / 2) * k, -(q[1] - h / 2) * k, rnd(-0.025, 0.025)]); }
      return out; }
  };

  // Linha do tempo de cada forma (segundos)
  const GATHER = 5, HOLD = o.hold, RELEASE = 3, REST = 2.5, CYCLE = GATHER + HOLD + RELEASE + REST, MOVE = 1.6;
  let NB = 0, TG, DL, DR, shapeIdx = -1, cycleStart = 0, isText = false;
  function buildTargets() {
    const spec = o.shapes[shapeIdx % o.shapes.length];
    isText = spec.startsWith('text:') || spec === 'logo';   // formas "planas": ficam de frente pra câmera
    if (spec === 'logo' && !logoData) { TG = null; return; } // logo ainda carregando
    const pts = spec.startsWith('text:') ? SHAPES.text(NB, o.buildSize, spec.slice(5)) : (SHAPES[spec] || SHAPES.cube)(NB, o.buildSize);
    // ordena de baixo para cima → a forma "sobe" como uma obra (texto: esquerda → direita)
    pts.sort((a, b) => spec.startsWith('text:') ? a[0] - b[0] : a[1] - b[1]);
    TG = new Float32Array(NB * 3); DL = new Float32Array(NB); DR = new Float32Array(NB);
    for (let i = 0; i < NB; i++) {
      TG[i * 3] = pts[i][0]; TG[i * 3 + 1] = pts[i][1]; TG[i * 3 + 2] = pts[i][2];
      DL[i] = (i / NB) * (GATHER - MOVE) * 0.9 + Math.random() * 0.25;     // atraso de chegada
      DR[i] = Math.random() * (RELEASE - MOVE);                           // atraso de saída
    }
  }
  const ease = x => x <= 0 ? 0 : x >= 1 ? 1 : (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  // ---- Carrega a logo e separa pixels de contorno e de preenchimento ----
  let logoData = null;
  if (o.shapes.includes('logo')) {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas'), w = img.naturalWidth, h = img.naturalHeight; c.width = w; c.height = h;
      const g = c.getContext('2d'); g.drawImage(img, 0, 0);
      const d = g.getImageData(0, 0, w, h).data, on = (x, y) => x >= 0 && y >= 0 && x < w && y < h && d[(y * w + x) * 4 + 3] > 128;
      const edge = [], fill = [];
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        if (!on(x, y)) continue;
        (on(x - 1, y) && on(x + 1, y) && on(x, y - 1) && on(x, y + 1) ? fill : edge).push([x, y]);
      }
      logoData = { w, h, edge, fill };
      if (NB) { cycleStart = time; buildTargets(); }
    };
    img.src = o.logoSrc;
  }

  // ---- Rastros (cometas) ----
  const TRAIL_LEN = 720;
  function newTrail(stagger) {
    const cross = Math.random() < 0.45;          // alguns cruzam o anel em outra inclinação
    return {
      t: Math.random() * TAU,
      v: (0.16 + Math.random() * 0.12) * (Math.random() < 0.5 ? 1 : -1),
      r: cross ? 0.85 + Math.random() * 0.2 : 0.92 + Math.random() * 0.14,
      a: cross ? A * (0.6 + Math.random() * 0.8) * (Math.random() < 0.5 ? 1 : -1) : A * (0.85 + Math.random() * 0.3),
      ph: cross ? Math.random() * TAU : 0,
      dy: (Math.random() - 0.5) * 0.12,
      life: stagger ? -Math.random() * 4 : 0,
      maxLife: 14 + Math.random() * 8,
      ring: Math.random() < 0.35,
      hist: []
    };
  }
  let T = [];
  function buildTrails() { T = []; for (let i = 0; i < o.trails; i++) T.push(newTrail(true)); }

  // ---- Câmera ----
  let yaw = 0, pitch = 0;
  function project(x, y, z, out) {
    // rotação Y (yaw) depois X (pitch)
    const cy = Math.cos(yaw), sy = Math.sin(yaw);
    let x1 = x * cy - z * sy, z1 = x * sy + z * cy;
    const cp = Math.cos(pitch), sp = Math.sin(pitch);
    let y1 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
    const d = 7, f = d / (d + z2);
    out[0] = W / 2 + x1 * f * scale;
    out[1] = H / 2 - y1 * f * scale;
    out[2] = z2;
    return out;
  }

  function resize() {
    const r = canvas.getBoundingClientRect();
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    scale = Math.min((W * o.fill) / 2.3, (H * 0.82) / 1.45);
    buildParticles();
    NB = o.build ? P.length / 6 : 0;   // todas as partículas participam da montagem
    if (NB) { if (shapeIdx < 0) shapeIdx = 0; buildTargets(); }
  }

  // buckets de alpha para desenhar milhares de pontos com poucas trocas de fillStyle
  const BUCKETS = 5;
  const buckets = Array.from({ length: BUCKETS }, () => []);
  const tmp = [0, 0, 0];
  const [pr, pg, pb] = o.particleColor;
  const [tr, tg, tb] = o.trailColor;

  let last = performance.now(), time = 0;
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000) * o.speed; last = now;
    time += dt;

    // leve "respiração" da câmera, como no vídeo
    yaw = 0.35 + Math.sin(time * 0.09) * 0.18;
    pitch = 0.2 + Math.sin(time * 0.07 + 1) * 0.06;

    ctx.globalCompositeOperation = 'source-over';
    if (o.background === 'transparent') {
      ctx.clearRect(0, 0, W, H);   // deixa ver o brilho da página por trás
    } else {
      ctx.fillStyle = o.background;
      ctx.fillRect(0, 0, W, H);
    }

    // ---- ciclo da construção ----
    let cyc = time - cycleStart;
    if (NB && cyc >= CYCLE) { cycleStart = time; cyc = 0; shapeIdx++; buildTargets(); }
    const spinY = time * 0.32, csY = Math.cos(spinY), snY = Math.sin(spinY);
    const tilt = isText ? 0 : 0.38, csX = Math.cos(tilt), snX = Math.sin(tilt);

    // ---- partículas ----
    for (let b = 0; b < BUCKETS; b++) buckets[b].length = 0;
    const n = P.length / 6;
    for (let i = 0; i < n; i++) {
      const k = i * 6;
      P[k] += P[k + 3] * dt;
      const t = P[k], ct = Math.cos(t), st = Math.sin(t);
      const wob = Math.sin(time * 0.6 + P[k + 5]) * 0.006;
      const rr = R + P[k + 1] + wob;
      const x = rr * ct, z = rr * st;
      let y = A * Math.cos(2 * t) + P[k + 2];
      let e = 0;
      if (i < NB && TG) {
        // progresso desta partícula: vai ao alvo, segura, volta ao anel
        if (cyc < GATHER + HOLD) e = ease((cyc - DL[i]) / MOVE);
        else e = 1 - ease((cyc - GATHER - HOLD - DR[i]) / MOVE);
        if (e > 0) {
          // alvo girando devagar (texto só gira de leve para continuar legível)
          let tx = TG[i * 3], ty = TG[i * 3 + 1], tz = TG[i * 3 + 2];
          if (isText) { const sw = Math.sin(time * 0.4) * 0.12, c2 = Math.cos(sw), s2 = Math.sin(sw); const nx = tx * c2 - tz * s2; tz = tx * s2 + tz * c2; tx = nx; }
          else { let y2 = ty * csX - tz * snX, z2 = ty * snX + tz * csX; const nx = tx * csY - z2 * snY; z2 = tx * snY + z2 * csY; tx = nx; ty = y2; tz = z2; }
          // compensa o yaw da câmera para o texto ficar sempre de frente
          if (isText) {
            const cp = Math.cos(pitch), sp = Math.sin(pitch); const ny = ty * cp + tz * sp; tz = -ty * sp + tz * cp; ty = ny;   // desfaz a inclinação
            const cy = Math.cos(-yaw), sy = Math.sin(-yaw); const nx = tx * cy - tz * sy; tz = tx * sy + tz * cy; tx = nx;      // desfaz o giro
          }
          const arc = Math.sin(Math.PI * e) * 0.18;   // trajetória em arco
          const xx = x + (tx - x) * e, zz = z + (tz - z) * e;
          y = y + (ty - y) * e + arc;
          project(xx, y, zz, tmp);
        } else project(x, y, z, tmp);
      } else project(x, y, z, tmp);
      const twinkle = 0.75 + 0.25 * Math.sin(time * 2.2 + P[k + 5] * 7);
      const depth = 0.7 + 0.3 * (1 - (tmp[2] + 1.3) / 2.6);   // mais perto = mais forte
      let a = P[k + 4] * twinkle * depth;
      if (e > 0) a = a + (1 - a) * e * 0.8;                     // peças montadas brilham mais
      const bi = Math.max(0, Math.min(BUCKETS - 1, (a * BUCKETS) | 0));
      buckets[bi].push(tmp[0], tmp[1], e > 0.5 ? 1.7 : (P[k + 4] > 0.8 ? 1.9 : 1.25));
    }
    ctx.globalCompositeOperation = 'lighter';
    for (let b = 0; b < BUCKETS; b++) {
      const arr = buckets[b]; if (!arr.length) continue;
      ctx.fillStyle = `rgba(${pr},${pg},${pb},${((b + 1) / BUCKETS) * 0.95})`;
      for (let j = 0; j < arr.length; j += 3) {
        const s = arr[j + 2];
        ctx.fillRect(arr[j] - s / 2, arr[j + 1] - s / 2, s, s);
      }
    }

    // ---- rastros (linhas violeta) ----
    ctx.lineCap = 'round';
    for (let i = 0; i < T.length; i++) {
      const c = T[i];
      c.life += dt;
      if (c.life < 0) continue;
      c.t += c.v * dt;
      const p = center(c.t, c.r, c.a, c.ph);
      p[1] += c.dy;
      c.hist.push(p);
      if (c.hist.length > TRAIL_LEN) c.hist.shift();

      // fade de entrada/saída
      const fade = Math.min(1, c.life / 2, Math.max(0, (c.maxLife - c.life) / 2.5));
      if (c.life > c.maxLife + 3) { T[i] = newTrail(false); continue; }

      const h = c.hist, m = h.length;
      if (m < 2) continue;
      const pts = new Array(m);
      for (let j = 0; j < m; j++) pts[j] = project(h[j][0], h[j][1], h[j][2], [0, 0, 0]);

      // Linha contínua e lisa, espessura constante (igual ao vídeo).
      // Só a cauda (primeiros 35% do histórico) esmaece, ponto a ponto.
      ctx.globalCompositeOperation = 'source-over';   // cor fica fiel (sem clarear sobre as partículas)
      ctx.lineWidth = o.trailWidth;
      ctx.lineJoin = 'round';
      const tailEnd = Math.floor(m * 0.35);
      ctx.lineCap = 'butt';
      for (let j = 1; j <= tailEnd; j++) {
        const al = fade * Math.pow(j / tailEnd, 1.6);
        if (al < 0.01) continue;
        ctx.strokeStyle = `rgba(${tr},${tg},${tb},${al})`;
        ctx.beginPath();
        ctx.moveTo(pts[j - 1][0], pts[j - 1][1]);
        ctx.lineTo(pts[j][0], pts[j][1]);
        ctx.stroke();
      }
      if (m - tailEnd > 1) {
        ctx.lineCap = 'round';
        ctx.strokeStyle = `rgba(${tr},${tg},${tb},${fade})`;
        ctx.beginPath();
        ctx.moveTo(pts[tailEnd][0], pts[tailEnd][1]);
        for (let k = tailEnd + 1; k < m; k++) ctx.lineTo(pts[k][0], pts[k][1]);
        ctx.stroke();
      }
      // marcador circular na ponta (aparece em alguns rastros)
      if (c.ring && fade > 0.3) {
        const hd = pts[m - 1];
        const pulse = 0.5 + 0.5 * Math.sin(time * 3 + i);
        ctx.strokeStyle = `rgba(${tr},${tg},${tb},${fade * (0.5 + pulse * 0.5)})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.arc(hd[0], hd[1], 5 + pulse * 2, 0, TAU); ctx.stroke();
        ctx.fillStyle = `rgba(${tr},${tg},${tb},${fade})`;
        ctx.beginPath(); ctx.arc(hd[0], hd[1], 1.8, 0, TAU); ctx.fill();
      }
    }

    if (running && visible && !reduce) raf = requestAnimationFrame(frame);
  }

  function start() {
    cancelAnimationFrame(raf);
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  // Pausa quando o canvas sai da tela ou a aba fica oculta (economiza bateria/CPU)
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && running && !reduce) start(); });
  io.observe(canvas);
  const onVis = () => { running = !document.hidden; if (running && visible && !reduce) start(); };
  document.addEventListener('visibilitychange', onVis);
  const ro = new ResizeObserver(() => { resize(); if (reduce) { time = 8; frame(performance.now()); } });
  ro.observe(canvas);

  resize(); buildTrails();
  if (reduce) {
    // Acessibilidade: com "reduzir movimento" ativo, mostra um quadro estático
    for (const c of T) { c.life = 2; for (let s = 0; s < TRAIL_LEN; s++) { c.t += c.v / 60; const p = center(c.t, c.r, c.a, c.ph); p[1] += c.dy; c.hist.push(p); } }
    frame(performance.now());
  } else start();

  return {
    destroy() { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); document.removeEventListener('visibilitychange', onVis); }
  };
}
