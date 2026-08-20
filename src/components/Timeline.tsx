import { IonIcon } from "@ionic/react";
import { book, globe, gitPullRequest, trophy, closeOutline } from "ionicons/icons";
import WordTypewriterReadMore from "./WordTypewriterReadMore";
import React, { useState, useEffect, useCallback } from "react";
import Viewer from "react-viewer";

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
  book,
};

const Timeline: React.FC<TimelineProps> = ({
  timelineHeading,
  timelineEvents,
  headIcon,
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
          <TimelineItem key={index} item={item} useReactViewer={true} />
        ))}
      </ol>
    </section>
  );
};

export default Timeline;

interface TimelineItemProps {
  item: TimelineEvent;
  useReactViewer?: boolean; // Set true for `react-viewer`, false for Custom Borderless Modal
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  useReactViewer = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Close handler for custom modal
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    setScale(1);
  }, []);

  // Zoom logic for custom modal
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = e.deltaY * -0.01;
    setScale((prevScale) => Math.min(Math.max(1, prevScale + delta), 4));
  };

  // Esc key handler for custom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        handleClose();
      }
    };

    if (isModalOpen && !useReactViewer) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, useReactViewer, handleClose]);

  return (
    <>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{item.title}</h4>
        <span>{item.duration}</span>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="externallink"
          >
            {item.link}
          </a>
        )}

        {item.description && <p className="timeline-text">{item.description}</p>}

        {item.skills && (
          <p className="timeline-text">
            <b>Skills:</b> {item.skills}
          </p>
        )}

        {/* Thumbnail Preview */}
        {item.image && (
          <div className="project-img-preview" style={{ marginTop: "12px" }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
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
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
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
                    transition: "opacity 0.2s ease-in-out",
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

      <style>{`
        .img-hover-container:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>

      {/* Flag-Based Modal Rendering */}
      {isModalOpen && item.image && (
        useReactViewer ? (
          /* Option 1: react-viewer Library */
          <Viewer
            visible={isModalOpen}
            onClose={handleClose}
            images={[{ src: item.image, alt: item.title }]}
            drag={true}
            rotatable={false}
            scalable={false}
            changeable={false}
            noNavbar={true}
            zoomSpeed={0.3}
            onMaskClick={() => handleClose()}
          />
        ) : (
          /* Option 2: Custom Borderless Modal */
          <div
            onClick={handleClose}
            onWheel={handleWheel}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(4px)",
              overflow: "hidden",
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
                zIndex: 1001,
              }}
            >
              <IonIcon icon={closeOutline} />
            </button>

            <img
              src={item.image}
              alt={item.title}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                transform: `scale(${scale})`,
                transition: "transform 0.1s ease-out",
                cursor: scale > 1 ? "grab" : "default",
                userSelect: "none",
              }}
            />
          </div>
        )
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
              <p className="timeline-text">
                <WordTypewriterReadMore
                  text={item.description}
                  previewLength={70}
                  speed={70}
                />
              </p>
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