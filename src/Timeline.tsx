import { IonIcon } from "@ionic/react";
import { globe } from "ionicons/icons";
import TimelineItem from "./TimelineItem.tsx"
import { experienceData } from "./experienceData.tsx";

const Timeline = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={globe} />
        </div>
        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {experienceData.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </ol>
    </section>
  );
};

export default Timeline;