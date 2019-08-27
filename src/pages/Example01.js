
import React, { useState } from 'react';

import { Spacer } from '../common';

import FormSimple from '../resources/Example01/01FormSimple';
import FormNameSpaced from '../resources/Example01/02FormNameSpaced';
import FormErrorHandling from '../resources/Example01/03FormErrorHandling';
import FormErrorHandlingMoBetter from '../resources/Example01/04FormErrorHandlingMoBetter';
import FormFinal from '../resources/Example01/05FormFinal';

import '../App.css';
import Section from '../common/Section';
import FancyTitle from '../common/FancyTitle';
import SectionTitle from '../common/SectionTitle';

const Example01 = () => {
  const [isShowingAnswerTouched, setIsShowingAnswerTouched] = useState(false);
  return (
    <div
      id="scroll-to-example"
      className="container mx-auto text-left py-4"
      style={{ maxWidth: 550 }}
    >
      <FancyTitle>
        Building forms the old way using React Classes
      </FancyTitle>

      <Spacer />

      <Section>
        <SectionTitle
          title="Simple Form"
          source="src/resources/Example01/01FormSimple.js"
        />
        <p>
          Here is a super-basic form. It just takes some user-input and does something
          with the values in the <code>onSubmit</code>.
        </p>
        <blockquote>
          Open up your browser console, fill out the form below and click <code>[submit]</code>
        </blockquote>
        <FormSimple />
      </Section>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="Name Spacing"
          source="src/resources/Example01/02FormNameSpacing.js"
        />
        <p>
          Same form as above, but the values are namespaced into stateful objects.
        </p>
        <blockquote>
          User-input gets set to <code>values.student</code> and <code>values.teacher</code>
        </blockquote>
        <FormNameSpaced />
      </Section>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="Err0r Handling"
          source="src/resources/Example01/03FormErrorHandling.js"
        />
        <p>
          Form validation is where things start to get a little tricky.
        </p>
        <p>
          For this tutorial, I've chosen to use real-time validation
          (the user gets immediate feedback while they are typing) as opposed
          to validating during the <code>onSubmit</code>. I'll implement the following steps:
        </p>
        <p>
          <strong>Steps:</strong>
        </p>
        <ul>
          <li>call <code>validate()</code> after every `onChange`</li>
          <li>
            use&nbsp;
            <a
              href="https://getbootstrap.com/docs/4.3/components/forms/#validation"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bootstrap validation states
            </a>
          </li>
          <li>display the relevant error message for each input</li>
          <li>prevent submission if any errors are present during <code>onSubmit</code></li>
        </ul>
        <p>
          The resulting code is quite a bit more complex.
        </p>
        <hr className="w-100" />
        <FormErrorHandling />
      </Section>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="Err0r Handling - Mo Better"
          source="src/resources/Example01/04FormErrorHandlingMoBetter.js"
        />
        <p>
          If you care about UX like me, you probably were wincing a little at the example above.
        </p>
        <h4 className="py-4">Why?</h4>
        {isShowingAnswerTouched && (
          <>
            <p>
              That's right, as soon as the user starts typing in ANY input,
              the entire form is filled with errors.
            </p>
            <p>
              So we'll also need to add a mechanism to determine if the user
              has interacted with (<code>touched</code>) the input.
            </p>
            <blockquote>
              We'll use the <code>onBlur</code> event to trigger an input's&nbsp;
              <code>touched</code> state.
            </blockquote>
            <hr className="w-100" />
            <FormErrorHandlingMoBetter />
          </>
        )}
        {!isShowingAnswerTouched && (
          <button
            className="btn btn-light"
            onClick={ev => {
              ev.preventDefault();
              setIsShowingAnswerTouched(true);
            }}
          >
            Click to find out
          </button>
        )}
      </Section>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="Cleaning Up"
          source="src/resources/Example01/05FormFinal.js"
        />
        <p>
          You've probably noticed that our "simple" form has started to
          morph into a big file (over 250 lines of code), and it's becoming
          difficult to manage.
        </p>
        <p>
          One thing we can do is move some repeated code into an&nbsp;
          <code>{'<Input>'}</code> component.
        </p>
        <blockquote>
          Look in the codebase to see how a lil' cleanup goes a long way
        </blockquote>
        <p>
          I also added a simple <code>[reset]</code> button which
          resets the form to its initial state.
        </p>
        <p>
          Additionally I moved the <code>validate()</code> function into a
          separate file, since all we care about here is getting back a
          current <code>errors</code> object.
        </p>
        <hr className="w-100" />
        <FormFinal />
      </Section>

      <Spacer />
    </div>
  );
}

export default Example01;
