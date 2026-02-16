import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type QuickLinkItem = {
  title: string;
  link: string;
  icon: string;
  description: string;
  priority?: 'primary' | 'secondary';
};

const QuickLinksList: QuickLinkItem[] = [
  {
    title: 'Quick Start (15 min)',
    link: '/docs/Getting_Started/',
    icon: '🚀',
    description: 'Deploy SafeSquid On-Premises, Off-Premises, or Hybrid in 15 minutes',
    priority: 'primary',
  },
  {
    title: 'SSL Inspection',
    link: '/docs/SSL_Inspection/Configure_HTTPS_Inspection/',
    icon: '🔒',
    description: 'Enable HTTPS inspection for policy enforcement and threat detection',
    priority: 'primary',
  },
  {
    title: 'Data Leakage Prevention',
    link: '/docs/Data_Leakage_Prevention/main/',
    icon: '🛡️',
    description: 'Configure DLP policies to prevent sensitive data exfiltration',
    priority: 'primary',
  },
  {
    title: 'Troubleshooting',
    link: '/docs/Troubleshooting/main/',
    icon: '🔧',
    description: 'Diagnose and resolve common SafeSquid configuration issues',
    priority: 'primary',
  },
  {
    title: 'Access Restriction',
    link: '/docs/Access_Restriction/main/',
    icon: '🚦',
    description: 'Implement granular web access control policies',
    priority: 'secondary',
  },
  {
    title: 'Authentication',
    link: '/docs/Authentication/main/',
    icon: '👤',
    description: 'Integrate with Active Directory, OpenLDAP, or local credentials',
    priority: 'secondary',
  },
  {
    title: 'Reporting & Audit',
    link: '/docs/Audit_Forensics/main/',
    icon: '📊',
    description: 'Access logs, reports, and audit evidence for compliance',
    priority: 'secondary',
  },
  {
    title: 'Use Cases',
    link: '/docs/Use_Cases/main/',
    icon: '💡',
    description: 'Real-world configuration examples and implementation guides',
    priority: 'secondary',
  },
];

function QuickLink({title, link, icon, description, priority}: QuickLinkItem) {
  return (
    <div className={clsx('col col--3', styles.quickLinkCard)}>
      <Link to={link} className={clsx(styles.quickLink, priority === 'primary' && styles.primaryLink)}>
        <div className={styles.quickLinkIcon}>{icon}</div>
        <Heading as="h3" className={styles.quickLinkTitle}>{title}</Heading>
        <p className={styles.quickLinkDescription}>{description}</p>
      </Link>
    </div>
  );
}

export default function QuickLinks(): ReactNode {
  return (
    <section className={styles.quickLinksSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Quick Access to Common Tasks</Heading>
          <p>Jump directly to frequently accessed documentation sections</p>
        </div>
        <div className="row">
          {QuickLinksList.map((props, idx) => (
            <QuickLink key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
