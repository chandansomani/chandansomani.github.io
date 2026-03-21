import SectionBlock from "./SectionBlock";

const TimelineItem = ({ item }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{item.title}</h4>
      <span>{item.duration}</span>

      {item.description && (
        <p className="timeline-text">{item.description}</p>
      )}

      {item.sections &&
        item.sections.map((section, idx) => (
          <SectionBlock key={idx} section={section} />
        ))}
    </li>
  );
};

export default TimelineItem;