import "./MobileCoverArtwork.css";

type CoverVariant = "renault" | "goodplanet" | "alten" | "wedding" | "quiz" | "portfolio";

export default function MobileCoverArtwork({ src, variant }: { src: string; variant: CoverVariant }) {
  return <div className={`mobile-cover-artwork mobile-cover-artwork--${variant}`} aria-hidden="true">
    <div className="mobile-cover-artwork__visual"><img src={src} alt="" /></div>
  </div>;
}
