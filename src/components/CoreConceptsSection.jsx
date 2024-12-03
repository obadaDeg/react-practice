import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConceptsSection() {
  return (
    <Section title={'Core Concepts'} id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
