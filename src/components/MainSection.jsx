import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import ExamplesSection from "./ExamplesSection";

export default function MainSection() {
//   console.log(CORE_CONCEPTS);
  

  return (
    <main>
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item} />
          ))}
        </ul>
      </section>
      <ExamplesSection />
    </main>
  );
}
