
import React from 'react';

import { FancyTitle, A } from '../common'

import '../App.css';

const Index = () => (
  <div
    id="scroll-to-example"
    className="container mx-auto text-left py-4"
    style={{ maxWidth: 550 }}
  >
    <FancyTitle>
      Formik: How It Simplifies Form State Management
    </FancyTitle>


    <h3 className="mt-4 mb-4">
      <em>
        "Build forms in React, without the tears."
      </em>
    </h3>

    <p>
      <strong>
        <A href="https://jaredpalmer.com/formik/">Formik</A>
      </strong>
      &nbsp;is a form state-management library that ships complete with almost everything
      a dev needs to build forms in React from scratch.
    </p>
    <p>
      The following are only some of features that ship with Formik:
    </p>
    <ul>
      <li>Grabbing form input</li>
      <li>Grabbing error state</li>
      <li>Handling form validation</li>
      <li>Handling form submission</li>
      <li>Handling nested objects and arrays</li>
      <li>Handling input-dependent state updates</li>
      <li>Dynamic forms</li>
      <li><em>...wherever else your imagination wants to take you...</em></li>
    </ul>
    <blockquote>
      <strong>tl;dr:</strong> using Formik could save you time and
      &nbsp;<span role="img" aria-label="Brain">🧠</span>&nbsp;power
    </blockquote>
  </div>
);

export default Index;
