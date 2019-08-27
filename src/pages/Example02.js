
import React from 'react';

import { Spacer } from '../common';

import FormHooks from '../resources/Example02/06FormHooks';

import '../App.css';
import Section from '../common/Section';
import FancyTitle from '../common/FancyTitle';
import SectionTitle from '../common/SectionTitle';

const Example02 = () => {
  return (
    <div
      id="scroll-to-example"
      className="container mx-auto text-left py-4"
      style={{ maxWidth: 550 }}
    >
      <FancyTitle>
        Building forms using functional components and React hooks
      </FancyTitle>

      <Spacer />

      <Section>
        <SectionTitle
          title="Form Using Hooks"
          source="src/resources/Example02/06FormHooks.js"
        />
        <p>
          This is the exact same form as the <code>FormFinal</code>
          &nbsp;example on the previous page.
        </p>
        <p>
          Here is what has changed:
        </p>
        <ul>
          <li>Changed from a <code>React.Component</code> class to a functional component</li>
          <li>Changed component lifecycle methods to React hooks</li>
        </ul>
        <p>
          That's it.
        </p>
        <blockquote>
          The above changes reduce our file from ~180 lines of code to
          140.
          &nbsp;<span role="img" aria-label="Thumbs Up">👍🏼</span>
        </blockquote>
        <FormHooks />
      </Section>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="Still... some issues remain"
        />
        <p>
          So, our form is now clean, modular (for the most part),
          and it would be easy to copy and paste this form whenever we
          needed to add a new form to our app.
        </p>
        <p>
          However, there remain some outstanding issues:
        </p>
        <ul>
          <li>Inputs are not disabled while the form is submitting.</li>
          <li>Every form has to write its own event handlers</li>
          <ul>
            <li>(<code>onChange</code>, <code>onBlur</code>, etc.)</li>
          </ul>
          <li>Error handling is good, but could be better</li>
          <ul>
            <li>Every field should be <code>touched</code> when <code>onSubmit</code> gets triggered</li>
          </ul>
          <li>Every form has to manage its own state</li>
          <li>No current support for arrays</li>
          <li>Some prop drilling</li>
        </ul>
        <h3>What... if there was a better way??&nbsp;
          <span role="img" aria-label="Toothy Smile">😬</span>
        </h3>
      </Section>

      <Spacer />
    </div>
  );
}

export default Example02;
