import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common/internal';

type FeatureItem = {
  title: string;
  LightSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  DarkSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Free to download and use',
    LightSvg: require('@site/static/img/free2use_light.svg').default,
    DarkSvg: require('@site/static/img/free2use.svg').default,
    description: (
      <>
        Log in to the  <Link href='https://key.safesquid.com'>SafeSquid Self-Service Portal</Link>  and deploy On-Premises, Off-Premises (Cloud), or a hybrid Secure Web Gateway for your enterprise within 15 minutes. 
      </>
    ),
  },
  {
    title: 'Agent-less integration with your environment',
    LightSvg: require('@site/static/img/integrations_light.svg').default,
    DarkSvg: require('@site/static/img/integrations.svg').default,
    description: (
      <>
        With an Enterprise Ready Architecture, SafeSquid can easily integrate with your IAM systems, ICAP servers, DLP systems, SIEMs, and SoC threat intelligence, to easily blend in your environment.
      </>
    ),
  },
  {
    title: 'Scale Effortlessly',
    LightSvg: require('@site/static/img/scale_light.svg').default,
    DarkSvg: require('@site/static/img/scale.svg').default,
    description: (
      <>
        SafeSquid's SMP-Aware Architecture synergistically scales-up the throughput to absorb load bursts.
        To scale out, you can seamlessly add proxy nodes with our Cluster-Ready Technology and configure them for load balancing or fail-over.
      </>
    ),
  },
];

function Feature({title, LightSvg, DarkSvg, description}: FeatureItem) {
  const {isDarkTheme} = useColorMode();
  const Svg = isDarkTheme ? DarkSvg : LightSvg;
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
