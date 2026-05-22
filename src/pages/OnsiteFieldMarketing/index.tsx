import Hero from './Hero';
import Channels from './Channels';
import Deliverables from './Deliverables';
import Metrics from './Metrics';
import Process from './Process';
import Closing from './Closing';
import { SERVICE_SCHEMA } from './data';

const OnsiteFieldMarketing = () => (
  <>
    <Hero />
    <Channels />
    <Deliverables />
    <Metrics />
    <Process />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
  </>
);

export default OnsiteFieldMarketing;
