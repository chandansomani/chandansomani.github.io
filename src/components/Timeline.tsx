import { IonIcon } from "@ionic/react";
import { book, globe } from "ionicons/icons";
import WordTypewriterReadMore from "./WordTypewriterReadMore";
import { gitPullRequest, trophy } from "ionicons/icons";
import React, { useState, useEffect, useCallback } from "react";
import { closeOutline } from "ionicons/icons";


type IconKey = "gitPullRequest" | "trophy" | "globe" | "book";

type SectionItem = {
  title: string;
  link?: string;
  skills?: string;
  description?: string;
  image?: string;
};

type Section = {
  icon: IconKey;
  title: string;
  items: SectionItem[];
};

type TimelineEvent = {
  title: string;
  duration?: string;
  link?: string;
  description?: string;
  skills?: string;
  image?: string;
  longDesc?: string;
  sections?: Section[];
};

type TimelineProps = {
  timelineHeading: string;
  timelineEvents: TimelineEvent[];
  headIcon: IconKey;
};



const iconMap: Record<IconKey, string> = {
  gitPullRequest,
  trophy,
  globe,
  book
};


const Timeline: React.FC<TimelineProps> = ({
  timelineHeading,
  timelineEvents,
  headIcon
}) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={iconMap[headIcon]} />
        </div>
        <h3 className="h3">{timelineHeading}</h3>
      </div>

      <ol className="timeline-list">
        {timelineEvents.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </ol>
    </section>
  );
};

export default Timeline;


/*
  const TimelineItem_A: React.FC<{ item: TimelineEvent }> = ({ item }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <span>{item.duration}</span>

        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer" className="externallink">
            {item.link}
          </a>
        )}

        {item.description && (
          <p className="timeline-text">{item.description}</p>
        )}

        {item.skills && (
          <p className="timeline-text">
            <b>Skills:</b> {item.skills}
          </p>
        )}

        {item.image && (
          <a href={item.image} className="project-img">
            <img src={item.image} alt={item.title} />
          </a>
        )}

        {item.longDesc && (
          <WordTypewriterReadMore className="timeline-text" text={item.longDesc} previewLength={70} speed={70} />
        )}


        {item.sections &&
          item.sections.map((section: Section, idx: number) => (
            <SectionBlock key={idx} section={section} />
          ))}
      </li>
    );
  };

  const TimelineItem_1: React.FC<{ item: TimelineEvent }> = ({ item }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <span>{item.duration}</span>

        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer" className="externallink">
            {item.link}
          </a>
        )}

        {item.description && (
          <p className="timeline-text">{item.description}</p>
        )}

        {item.skills && (
          <p className="timeline-text">
            <b>Skills:</b> {item.skills}
          </p>
        )}

        {
          item.image && (
            <div style={{ marginTop: "8px" }}>
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="externallink"
                style={{ fontSize: "13px", fontWeight: 500 }}
              >
                View Demo Artifact
              </a>
            </div>
          )
        }

        {
          item.longDesc && (
            <WordTypewriterReadMore className="timeline-text" text={item.longDesc} previewLength={70} speed={70} />
          )
        }

        {
          item.sections &&
          item.sections.map((section: Section, idx: number) => (
            <SectionBlock key={idx} section={section} />
          ))
        }
      </li >
    );
  };

  export const TimelineItem_3: React.FC<{ item: TimelineEvent }> = ({ item }) => {
    // State to track image modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
        <li className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.duration}</span>

          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer" className="externallink">
              {item.link}
            </a>
          )}

          {item.description && (
            <p className="timeline-text">{item.description}</p>
          )}

          {item.skills && (
            <p className="timeline-text">
              <b>Skills:</b> {item.skills}
            </p>
          )}

          {// Styled Thumbnail Preview that Triggers Modal }
            {
              item.image && (
                <div className="project-img-preview" style={{ marginTop: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    style={{
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <div
                      style={{
                        width: "180px",
                        height: "100px",
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: "1px solid var(--jet, #383838)",
                        position: "relative",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease"
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--orange-yellow-crayola, #ffdb70)",
                        marginTop: "6px",
                        display: "inline-block"
                      }}
                    >
                      Click to view image 🔍
                    </span>
                  </button>
                </div>
              )
            }

          {item.longDesc && (
            <WordTypewriterReadMore
              className="timeline-text"
              text={item.longDesc}
              previewLength={70}
              speed={70}
            />
          )}

          {item.sections &&
            item.sections.map((section: Section, idx: number) => (
              <SectionBlock key={idx} section={section} />
            ))}
        </li>

        {// Lightbox / Image Modal Popup }
          {
            isModalOpen && item.image && (
            <div className="modal-container active" data-modal-container>
              <div
                className="overlay active"
                data-overlay
                onClick={() => setIsModalOpen(false)}
              ></div>
              <section
                className="testimonials-modal"
                style={{
                  maxWidth: "800px",
                  width: "90%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <button
                  title="Close Image Modal"
                  type="button"
                  className="modal-close-btn"
                  data-modal-close-btn
                  onClick={() => setIsModalOpen(false)}
                >
                  <IonIcon icon={closeOutline} />
                </button>

                <div style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
                  <h4 className="h3 modal-title" style={{ marginBottom: "15px" }}>
                    {item.title} - Artifact Preview
                  </h4>
                  <div
                    style={{
                      maxHeight: "70vh",
                      overflowY: "auto",
                      borderRadius: "8px",
                      border: "1px solid var(--jet, #383838)"
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </section>
            </div>
          )
        }
      </>
    );
  };
*/


interface TimelineItemProps {
  item: TimelineEvent;
  useBorderlessModal?: boolean; // Toggle: true for frameless backdrop, false for styled standard modal
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  useBorderlessModal = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close handler for Esc key
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Listen for Escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleClose();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, handleClose]);

  return (
    <>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <span>{item.duration}</span>

        {item.link && (
          <a href={item.link} target="_blank" rel="noreferrer" className="externallink">
            {item.link}
          </a>
        )}

        {item.description && <p className="timeline-text">{item.description}</p>}

        {item.skills && (
          <p className="timeline-text">
            <b>Skills:</b> {item.skills}
          </p>
        )}

        {/* Thumbnail Preview with Hover Overlay (Zoom Icon) */}
        {item.image && (
          <div className="project-img-preview" style={{ marginTop: "12px" }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer"
              }}
            >
              <div
                className="img-hover-container"
                style={{
                  width: "180px",
                  height: "100px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--jet, #383838)",
                  position: "relative",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                {/* Hover Overlay */}
                <div
                  className="hover-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out"
                  }}
                >
                  <span style={{ fontSize: "24px" }}>🔍</span>
                </div>
              </div>
            </button>
          </div>
        )}

        {item.longDesc && (
          <WordTypewriterReadMore
            className="timeline-text"
            text={item.longDesc}
            previewLength={70}
            speed={70}
          />
        )}

        {item.sections &&
          item.sections.map((section: Section, idx: number) => (
            <SectionBlock key={idx} section={section} />
          ))}
      </li>

      {/* Inline Hover CSS for Thumbnail */}
      <style>{`
        .img-hover-container:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>

      {/* Modal Popup Handler */}
      {isModalOpen && item.image && (
        <>
          {useBorderlessModal ? (
            /* Variant A: Borderless Pure Image Viewer with Backdrop */
            <div
              onClick={handleClose}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 1000,
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                backdropFilter: "blur(4px)"
              }}
            >
              <button
                title="Close (Esc)"
                type="button"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "30px",
                  cursor: "pointer",
                  zIndex: 1001
                }}
              >
                <IonIcon icon={closeOutline} />
              </button>

              <img
                src={item.image}
                alt={item.title}
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
                }}
              />
            </div>
          ) : (
            /* Variant B: Theme-Styled Container Modal */
            <div className="modal-container active" data-modal-container>
              <div className="overlay active" data-overlay onClick={handleClose}></div>
              <section
                className="testimonials-modal"
                style={{
                  maxWidth: "800px",
                  width: "90%",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <button
                  title="Close (Esc)"
                  type="button"
                  className="modal-close-btn"
                  data-modal-close-btn
                  onClick={handleClose}
                >
                  <IonIcon icon={closeOutline} />
                </button>

                <div style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
                  <h4 className="h3 modal-title" style={{ marginBottom: "15px" }}>
                    {item.title}
                  </h4>
                  <div
                    style={{
                      maxHeight: "70vh",
                      overflowY: "auto",
                      borderRadius: "8px",
                      border: "1px solid var(--jet, #383838)"
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};


const SectionBlock: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={iconMap[section.icon]} />
        </div>
        <h4 className="h4">{section.title}</h4>
      </div>

      <ol className="timeline-list">
        {section.items.map((item: any, index: number) => (
          <li className="timeline-item" key={index}>
            <span>{item.title}</span>

            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.link}
              </a>
            )}

            {item.skills && (
              <p className="timeline-text">
                <b>Skills:</b> {item.skills}
              </p>
            )}

            {item.description && (
              <p className="timeline-text"><WordTypewriterReadMore text={item.description} previewLength={70} speed={70} /> </p>
            )}

            {item.image && (
              <a href={item.image} className="project-img">
                <img src={item.image} alt={item.title} />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};