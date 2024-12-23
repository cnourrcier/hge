import React, { useEffect, useState } from 'react';
import './HistoryPage.css';

const TimelineItem = ({ year, event, imageSrc }) => (
  <div className="timeline-item">
    <div className="newspaper-clipping">
      <img src={imageSrc} alt={`${year} event`} />
    </div>
    <div className="timeline-content">
      <div className="timeline-year">{year}</div>
      <div className="timeline-event">{event}</div>
    </div>
  </div>
);

const CelebrityImage = ({ imageSrc, name }) => (
  <div className='celebrity-image'>
    <img src={imageSrc} alt={name} />
    <p>{name}</p>
  </div>
)

const HistoryPage = () => {

  const timelineEvents = [
    {
      year: "1925",
      event: "Estate built by McNeal Swasey for Agnes Swobdi-Meade",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950168/Clark%20Gable%20Estate%20Website/ClarkGableEstate1925_bqdmbp.jpg`
    },
    {
      year: "1930s-40s",
      event: "Clark Gable and Carole Lombard's desert hideaway",
      image: "https://via.placeholder.com/300x200.png?text=Kimball+and+Fleeson"
    },
    {
      year: "1950s-60s",
      event: "Home to Dan Kimball and Doris Fleeson",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950164/Clark%20Gable%20Estate%20Website/DanKimball_n09alo.jpg`
    },
    {
      year: "1969-78",
      event: "Residence of Shar Cracraft, Editor of Palm Springs Life Magazine",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950503/Clark%20Gable%20Estate%20Website/SharCracraft_zkyjxj.jpg`
    },
    {
      year: "2000s",
      event: "Hosted political fundraisers for Rep. Mary Bono",
      image: "https://via.placeholder.com/300x200.png?text=Mary+Bono+Fundraisers"
    },
    {
      year: "2015",
      event: "Clark Gable Estate Garden Party 'Gable Awards'",
      image: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1724950348/Clark%20Gable%20Estate%20Website/GardenParty_c3viyw.png`
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1200) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTimeline = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < timelineEvents.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleEvents = timelineEvents.slice(currentIndex, currentIndex + itemsToShow);

  const celebrities = [
    { name: "Clark Gable", image: "https://via.placeholder.com/300x400.png?text=Clark+Gable" },
    { name: "Carole Lombard", image: "https://via.placeholder.com/300x400.png?text=Carole+Lombard" },
    { name: "Bing Crosby", image: "https://via.placeholder.com/300x400.png?text=Bing+Crosby" },
    { name: "Sammy Davis Jr.", image: "https://via.placeholder.com/300x400.png?text=Sammy+Davis+Jr." },
    { name: "Maurice Chevalier", image: "https://via.placeholder.com/300x400.png?text=Maurice+Chevalier" },
    { name: "Dan Kimball", image: "https://via.placeholder.com/300x400.png?text=Dan+Kimball" },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <h1>About Clark Gable Estate</h1>

        <section className="history-section">
          <h2>Our Rich History</h2>
          <p>Established in 1925, the Clark Gable Estate is the oldest home in Old Las Palmas, Palm Springs. This Spanish Colonial Revival estate was created by Master Architect McNeal Swasey for Los Angeles fashion designer and importer Mrs. Agnes Swobdi-Meade during the Roaring Twenties.</p>

          <h3>Timeline</h3>
          <div className="timeline-container">
            <button
              className="timeline-nav-button left"
              onClick={() => scrollTimeline('left')}
              disabled={currentIndex === 0}
            >
              &lt;
            </button>
            <div className="timeline">
              {visibleEvents.map((event, index) => (
                <TimelineItem key={currentIndex + index} year={event.year} event={event.event} imageSrc={event.image} />
              ))}
            </div>
            <button
              className="timeline-nav-button right"
              onClick={() => scrollTimeline('right')}
              disabled={currentIndex === timelineEvents.length - itemsToShow}
            >
              &gt;
            </button>
          </div>
        </section>

        <section className="features-section">
          <h2>Notable Features</h2>
          <ul>
            <li>Breathtaking views of San Jacinto Mountains</li>
            <li>Large lot with lush gardens and mature palm trees</li>
            <li>Swimming pool and pool cabana</li>
            <li>Pickle Ball Court adaptable for outdoor events</li>
            <li>Private Casita above Garage</li>
            <li>Gated, private, and secluded, yet walking distance to downtown Palm Springs</li>
            <li>Original plaster moldings, ornate Spanish lighting, and period furnishings</li>
            <li>Pool table custom-made for Kirk Douglas</li>
          </ul>
        </section>

        <section className="celebrity-section">
          <h2>Celebrity Residents and Visitors</h2>
          <p>The Clark Gable Estate has been home to and visited by numerous celebrities over the years, including:</p>
          <div className='celebrity-gallery'>
            {celebrities.map((celebrity, index) => (
              <CelebrityImage key={index} imageSrc={celebrity.image} name={celebrity.name} />
            ))}
          </div>
        </section>

        <section className="legacy-section">
          <h2>Legacy and Preservation</h2>
          <p>The Clark Gable Estate's legacy is a compelling tapestry woven from the threads of visionary individuals who have called it home. From fashion designers to Hollywood icons, from influential columnists to military leaders, each resident has contributed to the rich history of this property.</p>
          <p>We are committed to preserving this historic gem. Recent renovations have restored architectural details and paint colors to their former glory. Restoration is an ongoing process, and we invite you to follow our journey as we continue these efforts.</p>
        </section>

        <section className="quote-section">
          <blockquote>
            "This house is part of Palm Springs heritage."
            <footer>- Joel Douglas, Son of Kirk Douglas</footer>
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default HistoryPage;