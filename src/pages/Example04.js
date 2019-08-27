
import React from 'react';

import {
  Spacer,
  Section,
  FancyTitle,
  SectionTitle,
} from '../common';

import FormFormikExtras from '../resources/Example04/08FormFormikExtras';

import '../App.css';

const Example04 = () => {
  return (
    <div
      id="scroll-to-example"
      className="container mx-auto text-left py-4"
      style={{ maxWidth: 550 }}
    >
      <FancyTitle>
        Configuring Formik exactly to our liking
      </FancyTitle>

      <h3 className="mt-4">Formik is great but it ain't perfect.</h3>

      <p>
        For instance, while previously our handy form would
        alert the user if the errors existing during form
        submission, Formik doesn't even fire the <code>onSubmit</code>
        if any validation errors exist.
      </p>

      <p>Addressing this problem is actually pretty easy.</p>

      <Spacer showLineBottom />

      <Section>
        <SectionTitle
          title="This Form Is Just Right"
          source="src/resources/Example04/08FormFormikExtras.js"
        />
        <blockquote>
          The <code>onSubmit</code> now alerts the user if validation errors exist.
        </blockquote>
        <FormFormikExtras />
      </Section>

      <Spacer />
      <Spacer showLineBottom />

      <Spacer />
    </div>
  );
}

export default Example04;
