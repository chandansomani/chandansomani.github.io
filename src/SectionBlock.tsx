import { IonIcon } from "@ionic/react";
import { gitPullRequest, trophy } from "ionicons/icons";
import WordTypewriterReadMore from "./WordTypewriterReadMore";

const iconMap = {
  gitPullRequest,
  trophy
};

const SectionBlock = ({ section }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={iconMap[section.icon]} />
        </div>
        <h4 className="h4">{section.title}</h4>
      </div>

      <ol className="timeline-list">
        {section.items.map((item, index) => (
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
              <p className="timeline-text"><WordTypewriterReadMore text={item.description} previewLength={70} speed={70}/> </p>
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

export default SectionBlock;