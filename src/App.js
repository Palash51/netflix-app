import React from 'react';
import jumboData from './fixtures/jambo.json';
import { JumbotronContainer } from './containers/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';

export default function App() {
  return (
    <>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    </>
  );
}
