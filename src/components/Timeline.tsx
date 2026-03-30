import { IonIcon } from "@ionic/react";
import { book, globe } from "ionicons/icons";
import WordTypewriterReadMore from "./WordTypewriterReadMore";
import { gitPullRequest, trophy } from "ionicons/icons";


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


const TimelineItem: React.FC<{ item: TimelineEvent }> = ({ item }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{item.title}</h4>
      <span>{item.duration}</span>

      {item.link && (
        <a href={item.link} target="_blank" rel="noreferrer">
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
        <WordTypewriterReadMore className="timeline-text" text={item.longDesc} previewLength={70} speed={70}/>        
      )}


      {item.sections &&
        item.sections.map((section: Section, idx: number) => (
          <SectionBlock key={idx} section={section} />
        ))}
    </li>
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
        {section.items.map((item : any, index : number) => (
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