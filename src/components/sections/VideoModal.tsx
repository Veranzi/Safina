'use client'

interface VideoModalProps {
  src: string
  onClose: () => void
}

export default function VideoModal({ src, onClose }: VideoModalProps) {
  if (!src) return null

  return (
    <div
      className="modal fade show"
      id="videoModal"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: '800px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-body" style={{ position: 'relative', padding: 0 }}>
            <button
              type="button"
              className="close"
              onClick={onClose}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="ratio ratio-16x9">
              <iframe
                src={src}
                allowFullScreen
                allow="autoplay"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
