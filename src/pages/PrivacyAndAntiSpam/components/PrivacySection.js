import React from 'react';

import config from 'src/config';

import ContentSection from './ContentSection';

function PrivacySection() {
  return (
    <ContentSection title="Privacy Policy">
      <div>
        <p>
          <strong>{config.appDomainName}</strong> will collect certain non-personally identify
          information about you as you use our site. We may use this data to better
          understand our users.
        </p>

        <p>
          We will also ask you to provide personal information, but you{'\''}ll always be able to opt out.
          If you give us personal information, we won{'\''}t do anything evil with it.
        </p>

        <p>We can also use cookies, but you can choose not to store these.</p>

        <p>
          We use Google Analytics,{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://privacy.google.com"
          >
            Google{'\''}s privacy policy
          </a>.
        </p>
      </div>
    </ContentSection>
  );
}

export default PrivacySection;
