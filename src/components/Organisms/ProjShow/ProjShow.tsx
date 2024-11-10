import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ProjShow.module.scss';

interface ProjShowProps {
  title: string;
  description: string;
  images: string[];
}

export function ProjShow({ title, description, images }: ProjShowProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollToIndex = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setCurrentIndex(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (emblaApi) emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.thumbnailContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={styles.thumbnail}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className={styles.closeButton}>
              X
            </button>

            {/* Main Image Carousel */}
            <div className={styles.embla} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {images.map((img, idx) => (
                  <div className={styles.emblaSlide} key={idx}>
                    <img src={img} alt="" className={styles.largeImage} />
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className={styles.thumbnailsRow}>
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className={`${styles.smallThumbnail} ${idx === currentIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => scrollToIndex(idx)}
                />
              ))}
            </div>

            <h3 className={styles.modalTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
