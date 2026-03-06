import { useState, useEffect } from "react";
import './Diseño/disenioCategorias.css';

// Carga automática de todas las fotos de /public/fotos/teatro/
const loadPhotos = () => {
  const context = require.context(
    "../../../../public/img/fotos_lucho/ARTISTAS",
    false,
    /\.(jpg|jpeg|png|webp)$/
  );
  return context.keys().map((path, i) => ({
    id: i + 1,
    src: process.env.PUBLIC_URL + "/img/fotos_lucho/ARTISTAS/" + path.replace("./", ""),
    alt: `Teatro ${i + 1}`,
  }));
};

// Layout asimétrico: reparte fotos en filas con proporciones variadas
const buildLayout = (photos) => {
  const patterns = [
    ["full"],
    ["half", "half"],
    ["third", "two-thirds"],
    ["two-thirds", "third"],
    ["half", "half"],
    ["full"],
  ];
  const layout = [];
  let i = 0;
  let p = 0;
  while (i < photos.length) {
    const row = [];
    for (const size of patterns[p % patterns.length]) {
      if (i < photos.length) row.push({ ...photos[i++], size });
    }
    layout.push(row);
    p++;
  }
  return layout;
};

const sizeToStyle = {
  full:         { flex: "1 1 100%" },
  half:         { flex: "1 1 calc(50% - 6px)" },
  third:        { flex: "1 1 calc(33.333% - 8px)" },
  "two-thirds": { flex: "1 1 calc(66.666% - 4px)" },
};

export default function Artistas() {
  const photos = loadPhotos();
  const layout = buildLayout(photos);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")      setLightbox(null);
      if (e.key === "ArrowRight")  setLightbox((i) => i !== null ? (i + 1) % photos.length : null);
      if (e.key === "ArrowLeft")   setLightbox((i) => i !== null ? (i - 1 + photos.length) % photos.length : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [photos.length]);

  return (
    <>
      <div className="pc-wrap">
        <div className="pc-header">
          <div>
            <p className="pc-label">Categoría</p>
            <h1 className="pc-title">Teatro</h1>
            <p className="pc-subtitle"></p>
          </div>
          <p className="pc-count">{photos.length} fotografías</p>
        </div>

        <div className="pc-grid">
          {layout.map((row, rowIdx) => (
            <div className="pc-row" key={rowIdx}>
              {row.map((photo) => (
                <div
                  key={photo.id}
                  className="pc-item"
                  style={sizeToStyle[photo.size]}
                  onClick={() => setLightbox(photo.id - 1)}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="pc-item-overlay" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="pc-lightbox" onClick={() => setLightbox(null)}>
          <button className="pc-lb-close" onClick={() => setLightbox(null)}>✕ cerrar</button>

          <button
            className="pc-lb-nav pc-lb-nav-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + photos.length) % photos.length); }}
          >‹</button>

          <div className="pc-lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightbox].src} alt={photos[lightbox].alt} />
          </div>

          <button
            className="pc-lb-nav pc-lb-nav-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % photos.length); }}
          >›</button>

          <p className="pc-lb-counter">{lightbox + 1} / {photos.length}</p>
        </div>
      )}
    </>
  );
}