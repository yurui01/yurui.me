"use client";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/images/focused.png" },
  { src: "/images/mountains-1.jpg" },
  { src: "/images/FlG3qw_aUAElyEm.jpeg" },
  { src: "/images/Fwf9JaQacAITHEL.jpeg" },
  { src: "/images/231707156_897712797481666_8105648653811025204_n.jpg" },
  { src: "/images/199664131_231832218455325_6419900195144753306_n.jpg" },
  { src: "/images/189032735_808741953384523_9022807722012922033_n.jpg" },
];

export default function FavoritesPage() {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="py-12">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              key={index}
              alt={`favorites-${index}`}
              src={image.src}
              style={{ width: "100%", display: "block" }}
              onClick={() => setSelected(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Lightbox
        open={selected >= 0}
        index={selected}
        close={() => setSelected(-1)}
        slides={images}
      />
    </div>
  );
}
