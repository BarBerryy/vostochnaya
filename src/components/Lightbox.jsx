import { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="close" aria-label="Закрыть" onClick={onClose}>
        ×
      </button>
      <img src={src} alt="" />
    </div>
  );
}
