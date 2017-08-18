import React from 'react';

import ContentSection from './ContentSection';

function AntiSpamSection() {
  return (
    <ContentSection title="Anti Spam Policy">
      <div>
        <p>We won{'\''}t spam you.</p>

        <p>
          Our users receive newsletters that they subscribed for.
          Subscriptions can be removed at any time.
        </p>

        <p>
          Our subscribers{'\''} email addresses are stored securely by third
          party providers and have not and will not be sold or rented to other third parties.
        </p>
      </div>
    </ContentSection>
  );
}

export default AntiSpamSection;
