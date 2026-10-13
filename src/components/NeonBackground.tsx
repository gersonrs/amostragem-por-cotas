import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface EtherealRibbon {
  id: number;
  points: Point[];
  maxPoints: number;
  x: number;
  y: number;
  angle: number;
  angleSpeed: number;
  speed: number;
  color: string;
  glowColor: string;
  width: number;
  life: number;
  maxLife: number; // 3 to 8 segundos
  dormantTimer: number;
  state: 'active' | 'dormant';
  opacity: number;
  peakOpacity: number;
}

interface MistPuff {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
  baseAlpha: number;
  phase: number;
  phaseSpeed: number;
}

interface FogBand {
  y: number;
  baseY: number;
  height: number;
  speed: number;
  phase: number;
  alpha: number;
  color: string;
}

interface LuminousStar {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
  life: number;
  maxLife: number;
  dormantTimer: number;
  state: 'active' | 'dormant';
  peakAlpha: number;
  twinkleSpeed: number;
}

// Cores calmas e discretas para não roubar atenção
const MUTED_PALETTES = [
  {
    // Dourado suave UFRPE
    color: 'rgba(212, 175, 55, 0.40)',
    glow: 'rgba(212, 175, 55, 0.25)',
  },
  {
    // Ciano celestial profundo
    color: 'rgba(56, 189, 248, 0.35)',
    glow: 'rgba(56, 189, 248, 0.20)',
  },
  {
    // Violeta crepuscular
    color: 'rgba(168, 85, 247, 0.32)',
    glow: 'rgba(168, 85, 247, 0.18)',
  },
  {
    // Esmeralda vegetal / biométrica
    color: 'rgba(52, 211, 153, 0.32)',
    glow: 'rgba(52, 211, 153, 0.18)',
  },
  {
    // Âmbar etéreo
    color: 'rgba(245, 158, 11, 0.35)',
    glow: 'rgba(245, 158, 11, 0.20)',
  },
];

const STAR_COLORS = [
  { color: 'rgba(255, 255, 255, 0.85)', glow: 'rgba(255, 255, 255, 0.4)' },
  { color: 'rgba(254, 240, 138, 0.80)', glow: 'rgba(212, 175, 55, 0.4)' },
  { color: 'rgba(186, 230, 253, 0.80)', glow: 'rgba(56, 189, 248, 0.35)' },
  { color: 'rgba(233, 213, 255, 0.75)', glow: 'rgba(168, 85, 247, 0.35)' },
];

export const NeonBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvasSize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    const handleResize = () => {
      setupCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    // 1. Linhas longas em neon (bem longas, ciclo de 3 a 8 segundos)
    const createRibbon = (id: number, startRandomAge = false): EtherealRibbon => {
      const palette = MUTED_PALETTES[Math.floor(Math.random() * MUTED_PALETTES.length)];
      const x = Math.random() * width;
      const y = Math.random() * height;
      const initialAngle = Math.random() * Math.PI * 2;

      // 3 a 8 segundos (180 a 480 quadros)
      const maxLife = 180 + Math.floor(Math.random() * 300);

      // Linhas BEM LONGAS: 200 a 300 pontos de extensão
      const maxPoints = 200 + Math.floor(Math.random() * 100);

      const initialSpeed = 2.2 + Math.random() * 0.8;
      const points: Point[] = [];
      const seedCount = startRandomAge ? Math.min(maxPoints, 120) : 40;
      for (let s = 0; s < seedCount; s++) {
        points.push({
          x: x - Math.cos(initialAngle) * (s * initialSpeed),
          y: y - Math.sin(initialAngle) * (s * initialSpeed),
        });
      }

      return {
        id,
        points,
        maxPoints,
        x,
        y,
        angle: initialAngle,
        angleSpeed: (Math.random() - 0.5) * 0.03,
        speed: initialSpeed,
        color: palette.color,
        glowColor: palette.glow,
        width: 14 + Math.random() * 8, // Largura suave para compor o desfoque
        life: startRandomAge ? Math.floor(Math.random() * maxLife) : 0,
        maxLife,
        dormantTimer: 0,
        state: 'active',
        opacity: 0,
        peakOpacity: 0.28 + Math.random() * 0.10, // Sutil para ser apenas um pequeno efeito
      };
    };

    const ribbonCount = 3;
    const ribbons: EtherealRibbon[] = Array.from({ length: ribbonCount }, (_, i) => createRibbon(i, true));
    ribbons.forEach((r, idx) => {
      r.life = Math.floor((r.maxLife / ribbonCount) * idx);
    });

    // 2. Estrelas orbes luminosas (desfocadas, suaves, surgem e somem em 3 a 6s)
    const createStar = (id: number, startRandomAge = false): LuminousStar => {
      const palette = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      const maxLife = 160 + Math.floor(Math.random() * 220); // ~2.6s a 6.3s

      return {
        id,
        x: Math.random() * width,
        y: Math.random() * height,
        size: 3.5 + Math.random() * 5.0, // Orbes macios de luz
        color: palette.color,
        glowColor: palette.glow,
        life: startRandomAge ? Math.floor(Math.random() * maxLife) : 0,
        maxLife,
        dormantTimer: 0,
        state: 'active',
        peakAlpha: 0.35 + Math.random() * 0.25,
        twinkleSpeed: 0.05 + Math.random() * 0.06,
      };
    };

    const starCount = 18;
    const stars: LuminousStar[] = Array.from({ length: starCount }, (_, i) => createStar(i, true));
    stars.forEach((s) => {
      s.life = Math.floor(Math.random() * s.maxLife);
    });

    // 3. Nuvens volumétricas de névoa (fog puffs) que flutuam sobre o cenário
    const mistPuffs: MistPuff[] = [
      { x: width * 0.15, y: height * 0.25, radius: 550, vx: 0.20, vy: 0.08, color: '212, 175, 55', baseAlpha: 0.065, phase: 0, phaseSpeed: 0.008 },
      { x: width * 0.80, y: height * 0.70, radius: 620, vx: -0.16, vy: -0.10, color: '30, 58, 138', baseAlpha: 0.080, phase: 2, phaseSpeed: 0.009 },
      { x: width * 0.50, y: height * 0.40, radius: 520, vx: 0.12, vy: -0.12, color: '126, 34, 206', baseAlpha: 0.060, phase: 4, phaseSpeed: 0.007 },
      { x: width * 0.85, y: height * 0.20, radius: 480, vx: -0.14, vy: 0.10, color: '16, 185, 129', baseAlpha: 0.055, phase: 1, phaseSpeed: 0.010 },
      { x: width * 0.20, y: height * 0.85, radius: 500, vx: 0.15, vy: -0.07, color: '245, 158, 11', baseAlpha: 0.060, phase: 3, phaseSpeed: 0.008 },
      { x: width * 0.45, y: height * 0.80, radius: 580, vx: -0.10, vy: 0.12, color: '51, 65, 85', baseAlpha: 0.085, phase: 5, phaseSpeed: 0.006 },
    ];

    // 4. Faixas horizontais de névoa densa e contínua (rolling fog bands)
    const fogBands: FogBand[] = [
      { y: height * 0.20, baseY: height * 0.20, height: 280, speed: 0.005, phase: 0, alpha: 0.055, color: '212, 175, 55' },
      { y: height * 0.55, baseY: height * 0.55, height: 320, speed: 0.004, phase: 2, alpha: 0.065, color: '30, 41, 59' },
      { y: height * 0.82, baseY: height * 0.82, height: 260, speed: 0.006, phase: 4, alpha: 0.060, color: '56, 189, 248' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // =======================================================================
      // 1. ESTRELAS DESFOCADAS (ORBES SUAVES DE LUZ AO FUNDO)
      // =======================================================================
      stars.forEach((star, idx) => {
        if (star.state === 'dormant') {
          star.dormantTimer--;
          if (star.dormantTimer <= 0) {
            stars[idx] = createStar(star.id, false);
          }
          return;
        }

        star.life++;
        const inFrames = 35;
        const outFrames = 40;
        let alpha = 0;

        if (star.life < inFrames) {
          alpha = (star.life / inFrames) * star.peakAlpha;
        } else if (star.life > star.maxLife - outFrames) {
          alpha = Math.max(0, ((star.maxLife - star.life) / outFrames) * star.peakAlpha);
        } else {
          const breathing = Math.sin(star.life * star.twinkleSpeed + star.id) * 0.08;
          alpha = Math.min(1, Math.max(0.1, star.peakAlpha + breathing));
        }

        if (star.life >= star.maxLife) {
          star.state = 'dormant';
          star.dormantTimer = 20 + Math.floor(Math.random() * 50);
          return;
        }

        if (alpha > 0.01) {
          ctx.save();
          ctx.globalAlpha = alpha;

          // Disco suave e difuso
          const halo = star.size * 2.8;
          const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, halo);
          grad.addColorStop(0, star.color);
          grad.addColorStop(0.4, star.glowColor);
          grad.addColorStop(1, 'rgba(0,0,0,0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(star.x, star.y, halo, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }
      });

      // =======================================================================
      // 2. LINHAS DE NEON LONGAS E DESFOCADAS (RIBBONS MEANDRANDO NA ESCURIDÃO)
      // =======================================================================
      ribbons.forEach((ribbon, idx) => {
        if (ribbon.state === 'dormant') {
          ribbon.dormantTimer--;
          if (ribbon.dormantTimer <= 0) {
            ribbons[idx] = createRibbon(ribbon.id, false);
          }
          return;
        }

        ribbon.life++;

        const fadeFrames = 45;
        if (ribbon.life < fadeFrames) {
          ribbon.opacity = (ribbon.life / fadeFrames) * ribbon.peakOpacity;
        } else if (ribbon.life > ribbon.maxLife - fadeFrames) {
          ribbon.opacity = Math.max(0, ((ribbon.maxLife - ribbon.life) / fadeFrames) * ribbon.peakOpacity);
        } else {
          ribbon.opacity = ribbon.peakOpacity;
        }

        if (ribbon.life >= ribbon.maxLife) {
          ribbon.state = 'dormant';
          ribbon.dormantTimer = 25 + Math.floor(Math.random() * 45);
          return;
        }

        ribbon.angle += ribbon.angleSpeed;
        if (Math.random() < 0.03) {
          ribbon.angleSpeed = (Math.random() - 0.5) * 0.035;
        }

        const margin = 80;
        if (ribbon.x < margin) ribbon.angle += 0.04;
        if (ribbon.x > width - margin) ribbon.angle += 0.04;
        if (ribbon.y < margin) ribbon.angle += 0.04;
        if (ribbon.y > height - margin) ribbon.angle += 0.04;

        ribbon.x += Math.cos(ribbon.angle) * ribbon.speed;
        ribbon.y += Math.sin(ribbon.angle) * ribbon.speed;

        ribbon.points.unshift({ x: ribbon.x, y: ribbon.y });
        if (ribbon.points.length > ribbon.maxPoints) {
          ribbon.points.pop();
        }

        const len = ribbon.points.length;
        if (len > 4 && ribbon.opacity > 0.01) {
          ctx.save();

          // Traçado macio e contínuo para a linha longa
          ctx.beginPath();
          ctx.moveTo(ribbon.points[0].x, ribbon.points[0].y);
          for (let p = 1; p < len - 1; p++) {
            const xc = (ribbon.points[p].x + ribbon.points[p + 1].x) / 2;
            const yc = (ribbon.points[p].y + ribbon.points[p + 1].y) / 2;
            ctx.quadraticCurveTo(ribbon.points[p].x, ribbon.points[p].y, xc, yc);
          }

          ctx.shadowBlur = 40;
          ctx.shadowColor = ribbon.glowColor;
          ctx.strokeStyle = ribbon.color;
          ctx.globalAlpha = ribbon.opacity;
          ctx.lineWidth = ribbon.width;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          ctx.restore();
        }
      });

      // =======================================================================
      // 3. CAMADA DE NÉVOA POR CIMA (COBRINDO AS LINHAS E AS ESTRELAS)
      // Névoa densa, macia e envolvente que passa por cima de tudo
      // =======================================================================
      ctx.save();

      // A) Nuvens volumétricas de névoa flutuando
      mistPuffs.forEach((puff) => {
        puff.phase += puff.phaseSpeed;
        puff.x += puff.vx;
        puff.y += puff.vy;

        if (puff.x < -puff.radius) puff.x = width + puff.radius;
        if (puff.x > width + puff.radius) puff.x = -puff.radius;
        if (puff.y < -puff.radius) puff.y = height + puff.radius;
        if (puff.y > height + puff.radius) puff.y = -puff.radius;

        const currentAlpha = puff.baseAlpha * (1 + Math.sin(puff.phase) * 0.25);

        const grad = ctx.createRadialGradient(puff.x, puff.y, 0, puff.x, puff.y, puff.radius);
        grad.addColorStop(0, `rgba(${puff.color}, ${currentAlpha})`);
        grad.addColorStop(0.35, `rgba(${puff.color}, ${currentAlpha * 0.6})`);
        grad.addColorStop(0.7, `rgba(${puff.color}, ${currentAlpha * 0.2})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // B) Faixas horizontais de névoa ondulante (rolling fog)
      fogBands.forEach((band) => {
        band.phase += band.speed;
        band.y = band.baseY + Math.sin(band.phase) * 35;

        const bandGrad = ctx.createLinearGradient(0, band.y - band.height / 2, 0, band.y + band.height / 2);
        bandGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        bandGrad.addColorStop(0.5, `rgba(${band.color}, ${band.alpha})`);
        bandGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = bandGrad;
        ctx.fillRect(0, band.y - band.height / 2, width, band.height);
      });

      // C) Véu de fumaça noturna que suaviza o contraste global
      const nocturnalVeil = ctx.createLinearGradient(0, 0, 0, height);
      nocturnalVeil.addColorStop(0, 'rgba(11, 12, 14, 0.20)');
      nocturnalVeil.addColorStop(0.5, 'rgba(11, 12, 14, 0.08)');
      nocturnalVeil.addColorStop(1, 'rgba(11, 12, 14, 0.25)');
      ctx.fillStyle = nocturnalVeil;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* 
        Canvas com DESFOQUE INTENSO (filter: blur(16px)):
        Linhas e estrelas ficam totalmente desfocadas, transformando-se em névoa luminosa e orbes suaves
        Opacidade reduzida (0.50) para ser apenas um pequeno efeito misterioso e sutil
      */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          display: 'block',
          filter: 'blur(16px)', // BEM DESFOCADO como solicitado
          transform: 'scale(1.05)', // Evita vinhetas secas nas bordas devido ao desfoque
          opacity: 0.50, // Sutil e discreto, não rouba a atenção dos slides
        }}
      />

      {/* Camada adicional de névoa ambiente suave com gradiente difuso (Dreamy fog overlay) */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, rgba(30,58,138,0.06) 50%, transparent 80%)',
          filter: 'blur(40px)',
        }}
      />
    </div>
  );
};
