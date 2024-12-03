import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const selectBtnSymboles = {
  component: "components",
  jsx: "jsx",
  props: "props",
  state: "state",
};

export default function ExamplesSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleClick(selectedTopic) {
    setSelectedTopic(selectedTopic);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        // ButtonsContainer={Section} // How to sue an element
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleClick(selectBtnSymboles.component);
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleClick(selectBtnSymboles.jsx);
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleClick(selectBtnSymboles.props);
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleClick(selectBtnSymboles.state);
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          {selectedTopic ? (
            <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </>
          ) : (
            <p>Please select a button to see examples.</p>
          )}
        </div>
      </Tabs>
    </Section>
  );
}
