import Hero from './Hero';
import Workflows from './Workflows';
import Coverage from './Coverage';
import Stack from './Stack';
import Metrics from './Metrics';
import Process from './Process';
import Closing from './Closing';
import { SERVICE_SCHEMA } from './data';

const MedicalAutomation = () => (
  <>
    <Hero />
    <Workflows />
    <Coverage />
    <Stack />
    <Metrics />
    <Process />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
  </>
);

export default MedicalAutomation;
