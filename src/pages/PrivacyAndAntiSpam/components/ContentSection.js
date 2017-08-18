import React from 'react';

function ContentSection(props) {
  return (
    <section>
      <h1>{props.title}</h1>

      {props.children}

      <style jsx>{`
        section {
          text-align: left;
        }

        h1 {
          font-size: 2.2rem;
        }
      `}</style>
    </section>
  );
}

export default ContentSection;
