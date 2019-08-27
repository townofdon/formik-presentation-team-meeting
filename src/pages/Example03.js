
import React, { useState } from 'react';

import {
  Spacer,
  Section,
  FancyTitle,
  SectionTitle,
  ShowIf,
  A,
} from '../common';

import FormFormik from '../resources/Example03/07FormFormik';

import '../App.css';

const Example03 = () => {
  const [count, setCount] = useState(0);


  const answers = [
    'Grab user input',
    'Validate user input',
    'Submit user input',
  ];

  const handleIncrement = (ev) => {
    ev.preventDefault();
    if (count >= answers.length) {
      return;
    }
    setCount(count + 1);
  }

  return (
    <div
      id="scroll-to-example"
      className="container mx-auto text-left py-4"
      style={{ maxWidth: 550 }}
    >
      <FancyTitle>
        Building forms using Formik
      </FancyTitle>

      <h3 className="mt-4">Question: What 3 things do all forms do?</h3>

      <p className="text-muted py-4"><em>Hint: boil it down to its most essential parts</em></p>

      <button
        className="btn btn-primary mb-4"
        onClick={handleIncrement}
      >
        Answers Remaining: {answers.length - count}
        <ShowIf condition={count >= answers.length}>
          &nbsp;&nbsp;
          <span role="img" aria-label="Tada">🎉</span>
          <span role="img" aria-label="Tada">🎉</span>
          <span role="img" aria-label="Tada">🎉</span>
        </ShowIf>
      </button>

      <ShowIf condition={count < 1}>
        <p className="text-muted"><small><em>Answer to proceed</em></small></p>
      </ShowIf>

      <ul>
        {answers.map((answer, index) => (
          <ShowIf
            key={index}
            condition={count > index}
          >
            <li className="text-secondary" style={{ fontSize: '2em' }}>{answer}</li>
          </ShowIf>
        ))}
      </ul>

      <ShowIf condition={count >= answers.length}>
        <Spacer />
        <p>
          When you think about it, forms are really simple. Get user input,
          make sure it's valid, and then do something with it.
        </p>
        <Spacer />
        <Spacer showLineBottom />

        <h3 className="mt-4">Harness your inner form monkey&nbsp;
          &nbsp;<span role="img" aria-label="Monkey">🐵</span>
        </h3>

        <Section>
          <SectionTitle
            title="Form Refactored to use Formik"
            source="src/resources/Example03/07FormFormik.js"
          />
          <p>
            This is the exact same form as the <code>FormHooks</code>
            &nbsp;example on the previous page.
          </p>
          <p>
            Here is what has changed:
          </p>
          <ul>
            <li>Replaced <code>{'<form>'}</code> component with Formik's <code>{'<Form>'}</code> component</li>
            <li>Wrapped the <code>{'<Form>'}</code> component with the <code>{'<Formik>'}</code> component using a render-prop pattern</li>
            <li>Removed all internal state handling</li>
            <li>Removed all event handlers</li>
            <li>Removed <code>inputProps</code></li>
          </ul>
          <p>
            Holy carp.
          </p>
          <blockquote>
            <span role="img" aria-label="Thumbs Up">👍🏼</span>
            The above changes reduce our file to ~70 lines of code&nbsp;
            <span role="img" aria-label="Thumbs Up">👍🏼</span>
          </blockquote>
          <FormFormik />
        </Section>

        <Spacer />
        <Spacer showLineBottom />

        <Section>
          <SectionTitle
            title="Takeaways"
          />
          <p>
            Formik is great, but it does involve a learning curve. It's
            important to understand some of what Formik is doing under the hood.
          </p>
          <h4>Things Formik handles for you:</h4>
          <ul>
            <li>Form state management</li>
            <li>Form event handling</li>
            <li>Form error validation</li>
            <li>Form input <code>touched</code> state</li>
            <li>Uses <A href="https://reactjs.org/docs/hooks-intro.html">React hooks</A> under the hood</li>
            <li>Uses <A href="https://reactjs.org/docs/context.html">React Context</A> API (not covered in this presentation)</li>
          </ul>
        </Section>
      </ShowIf>

      <Spacer />
    </div>
  );
}

export default Example03;
