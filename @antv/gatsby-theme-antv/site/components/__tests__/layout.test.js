import React from 'react';
import { render } from '@testing-library/react';
import { useStaticQuery } from 'gatsby'; // mocked

import Layout from '../layout';

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `GatsbyJS`,
        siteUrl: `https://antvis.github.io`,
        description: `Ant Visualization solution home page`,
        githubUrl: 'https://github.com/antvis/gatsby-theme-antv',
        languages: {
          langs: ['en', 'zh'],
          defaultLangKey: 'zh',
        },
      },
    },
  }));
});

describe(`Layout`, () => {
  fit(`renders a header`, () => {
    const { container } = render(
      <Layout>
        <main>
          <h1>hello</h1>
        </main>
      </Layout>,
    );

    expect(container.querySelector(`header`)).toBeInTheDocument();
  });

  it(`renders children`, () => {
    const text = `__Hello world__`;
    const { getByText } = render(
      <Layout>
        <main>
          <h1>{text}</h1>
        </main>
      </Layout>,
    );

    const child = getByText(text);

    expect(child).toBeInTheDocument();
  });
});
