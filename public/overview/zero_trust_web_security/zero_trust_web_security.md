---
title: "Zero-Trust Web Security"
description: "Why Layer 7 is the decisive battleground for enterprise security, how modern threats exploit encrypted sessions, and what Zero-Trust Web Security actually requires architecturally."
keywords:
  - zero trust
  - Layer 7 threats
  - HTTPS inspection
  - zero-hour phishing
  - ransomware last-mile reassembly
  - APT detection
  - DNS tunneling
  - session hijacking
  - insider data theft
  - trust algorithm
  - secure web gateway
  - web security concepts
---

# Threats hide in trusted pathways

Modern web applications execute complex business logic across multiple Layer-7 runtimes inside encrypted sessions. Every API call, every file upload, every OAuth token exchange happens inside a TLS tunnel. This execution surface is what adversaries exploit deliberately — not because perimeter controls are weak, but because perimeter controls cannot see inside the envelope.

Traditional security controls — network firewalls, DNS filters, URL-category engines — operate below Layer 7 and see only the envelope of traffic. Source IP, destination IP, port, and domain name are the only attributes evaluated at the network layer. Payload content is opaque. A request to `drive.google.com` carrying 40,000 customer records and a developer syncing a project produce an identical network envelope — the distinction exists only in the HTTP body. A newly registered credential-harvesting kit and a legitimate financial services site are envelope-identical until the domain accumulates a reputation signal — which arrives hours to days after the first attack.

The enforcement gap is not a configuration gap. The gap is a structural limitation. Controls that operate below Layer 7 cannot enforce Layer-7 policy — and every serious web threat today operates at Layer 7.

The business consequence is direct: a single undetected exfiltration incident averages \$4.44 million in breach costs ([IBM Cost of a Data Breach 2025](https://www.ibm.com/reports/data-breach)), triggers regulatory penalties under GDPR, HIPAA, and PCI-DSS, and generates reputational damage that outlasts the breach itself. Organisations that suffer these outcomes are not unaware of security — those organisations are underprotected at the layer that matters.

## Legacy controls leave a structural enforcement gap

Three structural gaps explain why legacy solutions fail at the web perimeter.

**Network Layer Firewalls (L3/L4)** operate on IP headers and TCP/UDP ports. Port 443 traffic — which accounts for over 90% of enterprise web traffic — is entirely opaque to network layer firewalls. A state-of-the-art next-generation firewall that cannot perform inline TLS inspection is, for practical purposes, a sophisticated gatekeeper that waves through everything marked "HTTPS." Encrypted malware, encrypted C2 beaconing, encrypted data exfiltration, and legitimate web browsing are indistinguishable at the L3/L4 layer.

**Endpoint Security** operates at the device level — catching known malware signatures, monitoring process behaviour, and enforcing device-local policy. Cross-session patterns are invisible to individual endpoint agents: a single agent has no view of what other endpoints in the environment are doing. Policy sprawl across thousands of managed devices creates inconsistency. Computational overhead competes with workload performance. Critically, threats that never execute code on the endpoint generate no alert: a user manually uploading sensitive files to a personal cloud account bypasses endpoint detection entirely because the browser is functioning exactly as designed.

**DNS-only and URL-category-only controls** are coarse-grained by design — blocking known-bad domains and categorising URLs against a reputation database. Payload inspection is architecturally absent from both control types. Known-bad domain lists and reputation databases fail against newly registered domains with no signal, against legitimate domains repurposed for malicious activity (a compromised CDN, a sanctioned cloud service used for exfiltration), and against DNS tunneling — where the DNS query string itself encodes the covert channel. URL category databases lag threat actors by hours to days; zero-hour attacks specifically exploit this window.

None of these controls is worthless. Each control addresses part of the threat landscape. The problem is treating any single control as sufficient for web security. Zero-Trust Web Security requires inspection at the layer where the threats live.

## Every kill chain phase exploits Layer 7

Mapping web threats to the [MITRE ATT&CK](https://attack.mitre.org/) kill chain reveals a consistent pattern: Layer 7 is the attack surface at every phase — initial access, execution, command and control, and exfiltration. Controls that cannot inspect HTTP(S) payloads are blind at every stage, not just one. The eleven threat patterns below show what that blindness costs.

### Initial Access

Attackers use Layer-7 traffic to plant the first foothold — exploiting newly registered domains and compromised ad networks inside HTTPS sessions that perimeter controls cannot inspect.

#### Zero-Hour Phishing

Phishing kits now deploy on newly registered or typosquatted domains — `paypa1-secure.com`, `microsoft-login-verify.net` — with valid TLS certificates issued minutes before the attack. DNS filters and URL-category engines have no reputation signal for newly registered domains. Signature-based detection has nothing to match against. The targeted user receives a page that is visually identical to a legitimate login form. Credentials are stolen before any threat intelligence database learns the domain exists.

The financial sector, healthcare providers, and government contractors are primary targets. A single stolen credential in a privileged account is the entry point for lateral movement, ransomware deployment, and sustained data exfiltration. NIST SP 800-63B authentication assurance levels and ISO 27001:2022 A.5.15 access controls assume that credential theft is prevented upstream — phishing at scale invalidates that assumption.

AI-generated phishing lures defeat reputation-based and grammar-based detection entirely — the lure contains no typos, no known-bad patterns, and no domain history; content analysis at the TLS-inspection layer is the only reliable detection point.

#### Malvertising and Drive-By Download

An employee visits a legitimate news site, financial portal, or SaaS vendor page. The ad network serving content to that site has been compromised or is hosting a malicious creative. The browser executes injected code or is silently redirected to an exploit kit without any user action beyond page load ([MITRE ATT&CK T1189 — Drive-by Compromise](https://attack.mitre.org/techniques/T1189/)). No click is required. The site itself carries no malicious content. Only the ad-network payload is hostile, and the ad-network payload arrives over HTTPS on the same trusted session the browser opened to the legitimate domain.

Polyglot files — files simultaneously valid as two binary formats, such as a JPEG that is also a valid JavaScript module — bypass format-specific scanners because each scanner evaluates the file through the lens of a single format. The polyglot decoder executes inside the browser after the file passes inspection. Microsoft tracked the Storm-0408 campaign ([Microsoft Security Blog, March 2025](https://www.microsoft.com/en-us/security/blog/2025/03/06/malvertising-campaign-leads-to-info-stealers-hosted-on-github/)), which infected nearly one million devices through malvertising before detection, with distribution reaching enterprise endpoints through ad networks serving major news and entertainment properties.

The SWG control point is HTTP response inspection before the payload reaches the browser. Content Disarm and Reconstruct (CDR) strips active content from delivered files — removing JavaScript embedded in image containers, macro-enabled objects in documents, and injected script elements from HTML responses — before delivery to the requesting endpoint. NIST SP 800-53r5 SC-18 (Mobile Code) requires policy enforcement on mobile code downloaded from external sources. ISO 27001:2022 A.8.23 (Web Filtering — new in the 2022 revision) explicitly mandates protection against malicious web content delivered through browsing. PCI-DSS v4.0 Requirement 6.4.3 (payment page script integrity, mandatory from March 2025) targets injected third-party scripts specifically — a direct match for the malvertising delivery pattern.

### Execution

After access is established, the payload executes inside encrypted sessions — reassembled from individually benign fragments or injected into legitimate HTTP responses.

#### Last-Mile Malware Reassembly

Modern malware delivery does not send an executable file over HTTPS. The delivery mechanism sends fragments: a benign-looking image, a JavaScript library, a compressed archive, a PDF. Each fragment passes individually through signature-based scanners — no fragment triggers an alert. The endpoint browser or a script reassembles and detonates the payload. By the time the endpoint security agent detects anomalous process behaviour, the ransomware has already begun encrypting.

Last-mile reassembly is specifically designed to defeat controls that inspect individual objects in isolation. Defeating last-mile reassembly requires inline content reconstruction: reassemble the full payload before delivery, then scan the reconstructed object. Controls that cannot reconstruct content at the proxy layer cannot stop this class of attack.

Ransomware attacks cost enterprises an average of \$1.53 million in recovery costs ([Sophos State of Ransomware 2025](https://www.sophos.com/en-us/content/state-of-ransomware), down from \$2.73 million in 2024), excluding regulatory penalties and reputational impact. PCI-DSS Requirement 5 and NIST SP 800-53r5 SI-3 require malicious code protection that addresses this delivery pattern.

#### XSS and CSRF Injection

Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) exploit the trust relationship between a user's browser and a legitimate web application. XSS injects malicious scripts into HTTP responses from a trusted site — the browser executes the malicious payload with full trust because the injected code originates from a domain the user is authenticated to. CSRF tricks the browser into sending authenticated requests to a third-party site using the user's active session.

XSS and CSRF attacks arrive in HTTP responses, not requests. Controls that only inspect outbound requests miss XSS and CSRF attacks entirely. Inline response inspection — examining what the server sends back to the client — is required to detect injected payloads before they reach the browser. This capability is architecturally impossible for controls that operate at the DNS or URL-category layer.

The primary control point for XSS and CSRF is the application server — Content Security Policy headers, SameSite cookie attributes, and input validation. A SWG contributes a secondary control: response-body inspection for injected script patterns, and HTTP response header stripping before the payload reaches the browser. CISA's September 2024 Secure by Design Alert on XSS (AA24-263A) addresses software developers as the primary responsible party, not network gateways. Deploy both controls; do not treat SWG response inspection as a substitute for application-layer hardening.

### Command and Control

C2 channels blend into normal HTTPS traffic — periodic beacons disguised as analytics calls, outbound POSTs that match browser telemetry, and DNS query strings encoding covert channels.

#### APT C2 and Domain Fronting

Traffic characteristic of nation-state and sophisticated criminal actors does not announce itself. Such traffic blends with normal browsing: periodic small requests to domains that resemble analytics services, content delivery networks, or software update endpoints. Exfiltration happens over weeks or months, in increments small enough to avoid volumetric anomaly detection. The APT campaign goal is not disruption — the goal is dwell time. The longer the attacker remains undetected, the more data the attacker extracts and the deeper lateral movement penetrates.

Perimeter controls that evaluate each request in isolation cannot detect APTs. APT detection requires behavioural correlation across sessions, users, and time: a specific endpoint has been making unusual requests to a specific domain for three weeks; a specific user's access pattern deviates from the established baseline; a specific combination of request attributes matches known C2 communication patterns. No individual request is suspicious. The pattern is.

APTs are responsible for the most damaging breaches in recent history — state-sponsored campaigns targeting critical infrastructure, defence contractors, and financial institutions. Domain fronting ([MITRE ATT&CK T1090](https://attack.mitre.org/techniques/T1090/)) routes C2 traffic through trusted CDN infrastructure so that the TLS SNI field names a legitimate domain while the HTTP `Host` header directs the request to attacker-controlled infrastructure — a technique that defeats SNI-only filtering. Application-layer protocol abuse ([T1071 — Application Layer Protocol](https://attack.mitre.org/techniques/T1071/); [T1071.001 — Web Protocols](https://attack.mitre.org/techniques/T1071/001/)) embeds C2 channels in normal-looking HTTP requests, and [T1102 — Web Service](https://attack.mitre.org/techniques/T1102/) routes C2 through trusted cloud platforms such as GitHub, Pastebin, or OneDrive. NIST SP 800-53r5 SI-4 (System Monitoring) and ISO 27001:2022 A.8.15 (Logging) address APT detection requirements, but only if the monitoring system has the context to correlate across sessions and can read decrypted HTTP payloads.

#### Infostealer C2 Callbacks

After an endpoint is compromised by an infostealer — LummaC2, Rhadamanthys, or StrelaStealer ([IBM X-Force Threat Intelligence Index 2025](https://www.ibm.com/thought-leadership/institute-business-value/report/2025-threat-intelligence-index)) — the malware exfiltrates harvested credentials, browser-stored session tokens, saved passwords, and autofill data to attacker-controlled infrastructure over HTTPS ([MITRE ATT&CK T1071.001 — Web Protocols](https://attack.mitre.org/techniques/T1071/001/)). The callback traffic is a standard HTTPS POST on port 443, structurally indistinguishable from normal browser telemetry or form submission at the envelope level.

IBM X-Force reported an 84% increase in emails delivering infostealers in 2024; credential harvesting ranked as the top objective in 28% of incident response cases. The compromised endpoint user is unaware — the infostealer operates silently, the endpoint security agent may not detect the C2 callback because the malware blends with normal HTTPS browser traffic, and the exfiltrated data leaves the network before any account-takeover attempt triggers an identity alert.

The SWG intercepts outbound HTTPS traffic, decrypts the TLS session, inspects the HTTP POST payload for credential patterns, session token structures, and DLP-defined sensitive data patterns (NIST SP 800-53r5 AC-4 — Information Flow Enforcement; SI-3 — Malware Protection), and evaluates the destination domain against threat intelligence feeds — blocking the C2 callback before credentials and tokens leave the network perimeter. ISO 27001:2022 A.8.7 (Protection against malware) and PCI-DSS v4.0 Requirement 5 require controls that address post-compromise exfiltration, not only initial infection prevention.

#### Session Hijacking

Session hijacking occurs when an attacker steals or replays authentication tokens — session cookies, OAuth tokens, JWT Bearer tokens — to impersonate an authenticated user without knowing that user's credentials ([MITRE ATT&CK T1550.004 — Use Alternate Authentication Material: Web Session Cookie](https://attack.mitre.org/techniques/T1550/004/)). Over HTTPS, session-hijacking traffic is indistinguishable from a legitimate session to any control that cannot inspect the decrypted payload. The attacker reuses the stolen token, the server treats the request as authenticated, and the access logs record the legitimate user's identity.

Without inline TLS inspection and session-level anomaly detection — detecting that a session token is being used from an unexpected IP range, on an unexpected device fingerprint, or at an unusual time — session hijacking goes undetected until the damage is visible in application logs, often days later.

The SWG intercepts outbound HTTPS sessions and inspects bearer token and cookie headers in real time — flagging reuse of session tokens across unexpected IP ranges, device fingerprints, or time windows, and terminating sessions that deviate from the authenticated user's established pattern. Every session termination event is logged with token identifier, source IP, user identity, and timestamp, producing the per-session audit trail required by NIST SP 800-53r5 AC-4 (Information Flow Enforcement) and SI-4 (System Monitoring), ISO 27001:2022 A.8.16 (Monitoring Activities), and PCI-DSS v4.0 Requirement 10.7 (automated detection of audit log anomalies).

#### DNS Tunneling

DNS is a control-plane protocol that most organisations allow unconditionally — blocking DNS breaks everything. Attackers exploit DNS by encoding C2 commands and exfiltrated data in DNS query strings. A sequence of queries to `a1b2c3d4.malicious-domain.com`, `e5f6g7h8.malicious-domain.com` carries a covert channel invisible to any control that treats DNS as infrastructure rather than an inspection surface.

DNS tunneling bypasses HTTP-only proxies entirely — the covert channel never touches port 80 or 443. The technique is used by sophisticated attackers for persistent C2 in air-gapped or heavily filtered environments, and by malware families including DNSMessenger, Iodine, and OzymanDNS. Detection requires inspecting the DNS query payload — query length, entropy, subdomain structure — not just resolving the domain name.

The SWG enforces DNS inspection at the query payload level — evaluating query string length, subdomain label count, character entropy, and per-domain request frequency against established baselines. Queries that match tunnel signatures are blocked and logged with the full query string, resolving identity, and timestamp, producing an audit record aligned with NIST SP 800-53r5 SI-4 (System Monitoring) and SC-20 (Secure Name/Address Resolution Service), and ISO 27001:2022 A.8.16 (Monitoring Activities).

### Exfiltration and Policy Violation

Data leaves the network and acceptable-use policy erodes through the same HTTPS sessions used for legitimate work — uploads to sanctioned cloud services, POST bodies to AI endpoints, and unrestricted personal browsing.

#### Insider Data Theft

An employee with access to customer data, intellectual property, or financial records uploads files to OneDrive, Google Drive, or Dropbox. The upload is HTTPS. The destination is a sanctioned cloud storage service that the URL-category engine classifies as "Business/Cloud Storage" — allowed. Nothing about the transaction looks suspicious at the network or DNS layer.

Without content inspection of the upload payload, the upload event is invisible. The distinction between a developer backing up project files and a finance employee exfiltrating a customer database does not exist at the envelope level — the distinction exists only in the content.

Insider threats account for 20% of data breaches ([Verizon DBIR 2024](https://www.verizon.com/business/resources/reports/dbir/)) and carry the highest per-incident cost because such incidents typically involve the most sensitive data and the longest dwell time before discovery. GDPR Article 32, HIPAA § 164.312, and SOC 2 CC6 all require controls that can detect and prevent this class of event.

#### Shadow AI Data Submission

Employees submit confidential data — proprietary source code, customer PII, financial records, internal meeting notes — to public generative AI services (ChatGPT, Google Gemini, Claude.ai, Perplexity) via HTTPS, believing the interaction is a productivity tool rather than a data transfer to a third-party processor operating under separate, non-enterprise terms of service. The data leaves the corporate perimeter in an HTTP POST request body, inside a TLS session that a URL-category engine classifies as "Productivity/AI Tools" — allowed.

The Samsung 2023 incident established the category risk: engineers submitted proprietary source code and internal meeting notes to ChatGPT in at least three separate events within weeks of the tool being made available inside the organisation. The data entered OpenAI's training and processing pipeline before Samsung implemented an AI access policy. CybSafe and the National Cybersecurity Alliance ([2025](https://webflow.cybsafe.com/press-releases/study-almost-40-of-workers-share-sensitive-information-with-ai-tools-without-employers-knowledge)) report that 38% of employees share confidential data with AI tools without organisational approval.

The legal exposure is categorically different from general data exfiltration. GDPR Articles 5(1)(f) and 28 require a Data Processing Agreement (DPA) with any third-party processor handling personal data — ChatGPT and equivalent consumer AI services carry no standard enterprise DPA, meaning submission of personal data may itself constitute a GDPR violation independent of any breach. HIPAA § 164.308(b) requires a Business Associate Agreement (BAA) before Protected Health Information (PHI) can be processed by a third party — OpenAI carries no BAA, making submission of PHI to ChatGPT a per se HIPAA violation. NIST SP 800-53r5 AC-4 (Information Flow Enforcement) and AC-20 (Use of External Information Systems), ISO 27001:2022 A.5.10 and A.8.23, and SOC 2 CC6.7 all address controls on data flowing to external services.

The SWG control is precise and does not require blanket AI service denial: identify HTTPS traffic to AI service domains by URL category or application signature; inspect the HTTP POST request body for PII patterns, intellectual property markers, or DLP policy triggers; enforce allow/block/monitor policy per authenticated user identity or group. The result is an "allow read, block data submission" posture — employees can use AI services for research while the organisation prevents sensitive data from transiting to third-party processors without a DPA or BAA. Shadow AI is predominantly inadvertent; the SWG surfaces the behaviour for policy enforcement and audit evidence rather than assuming malicious intent.

#### Cyberslacking

Non-work web browsing, personal streaming, social media access, and shadow-IT application use degrade business performance and create direct compliance exposure. Bandwidth consumed by personal streaming degrades business application performance and violates network usage policy. Shadow-IT applications introduced without security review carry unknown security posture and create uncontrolled data pathways. Policy violations compound regulatory risk: an employee streaming pirated content on a corporate network creates copyright liability; personal cloud storage use creates data governance gaps; personal email access routes communication outside DLP controls on corporate mail.

URL-category engines can block broad categories but lack time-of-day distinctions, per-user exceptions, and detection of policy violations embedded in otherwise-allowed services. Acceptable-use enforcement requires policy evaluation at the session and content level — identifying the authenticated user, the requested application, the time of access, and the content flowing through the session.

The SWG evaluates every web request against the authenticated user's identity, group membership, time-of-day schedule, and content category — enforcing acceptable-use policy with per-user precision rather than organisation-wide blocks. Every enforcement action is logged with user identity, application identifier, destination URL, timestamp, and matched policy rule, producing an audit record that supports HR review, legal discovery, and compliance reporting under SOC 2 CC6.7 and ISO 27001:2022 A.5.10.

## Zero-Trust Web Security requires Layer-7 inspection

Each of these eleven threats is addressed by the same architectural answer: Layer-7 inspection governed by Zero-Trust principles. Zero-Trust is not a product category but an architectural principle: no user, device, or network connection is implicitly trusted. Every access request must be verified against explicit policy, authorised based on current context, and logged for accountability.

Applied to the web perimeter, Zero-Trust has specific architectural implications. Every DNS and HTTP(S) transaction must be inspected end-to-end — not just the envelope, but the payload. Satisfying "URL categorisation" is not the same as satisfying Zero-Trust web access control. Zero-Trust cannot be satisfied by DNS or URL-category controls alone; DNS-only and URL-category-only solutions leave a structural enforcement gap, leaving HTTP(S) payload content uninspected and the Layer-7 surface uncontrolled.

The policy engine must correlate in real-time: identity, device, client application, network context, content, runtime behaviour, and session state — for every request, every time. Static rules evaluated against envelope attributes are insufficient. The Zero-Trust model requires a dynamic trust assessment that changes as context changes.

Five Zero-Trust principles define what Zero-Trust looks like at the web perimeter.

**Least Privilege Access** — users and devices receive access only to the specific resources required for the current task. "Allow internet access" is not a policy. "Allow this authenticated user, from this managed device, during business hours, to access this category of sites, with uploads blocked" is a policy. Every grant of access is the minimum necessary, and nothing is assumed.

**Never Trust, Always Verify** — no session is trusted by virtue of a prior authenticated connection, a known IP address, or a VPN tunnel. Every request is independently authenticated and authorised against current policy. A user authenticated yesterday is not trusted today without re-verification. A request from a known IP is not trusted without identity confirmation.

**Adaptive Trust Assessment** — trust is not binary. Trust is a score derived from the current context: who is requesting, from where, using what device, at what time, for what resource, with what content. High-risk contexts require higher verification or receive lower access. A request that looks normal in isolation may look anomalous in the context of the requesting user's behavioural baseline.

**Micro-Segmentation** — access is segmented at the application and content level, not just the network level. Different users have different access to different parts of the same web service. A contractor accessing a sanctioned SaaS platform is not granted the same access as a full-time employee. Segmentation is enforced at the content layer.

**Assume Breach** — the architecture assumes that the perimeter has already been compromised. Controls are designed to detect and contain, not just to prevent. Every access is logged, anomalies are surfaced, and the system maintains a complete audit trail that enables forensic investigation after a breach is discovered.

## How trust is assessed dynamically

Zero-Trust web architecture rejects static-rule-only access decisions; the architecture runs a Trust Algorithm (TA) — a real-time, multi-dimensional evaluation of the current request context. The TA produces a weighted trust score that drives access decisions. A high score permits access. A low score restricts, challenges, or blocks. The score changes with every request as context changes.

Five dimensions feed the Trust Algorithm.

**Environmental Context** evaluates time of access, geographic location, network origin, and access pattern against established baselines. A request at 2 AM from an unfamiliar network location elevates environmental risk, even if the user credentials are valid.

**Device Metrics** assess hardware security state, software integrity indicators, and device health signals. A managed corporate device with up-to-date software is a different trust signal from an unmanaged personal device or a device with disabled endpoint security.

**User Behaviour Analytics (UBA)** compare the current request against the requesting user's established behavioural baseline: typical authentication times, typical access patterns, typical data volumes, typical application set. A user who typically accesses ten internal applications suddenly accessing forty external domains is a behavioural anomaly — even if each individual request appears legitimate.

**Resource Risk** evaluates the target resource: content sensitivity classification, SSL certificate validity and issuance history, domain registration age, compliance status of the destination. A newly registered domain with a 24-hour-old certificate carries higher resource risk than an established enterprise SaaS endpoint.

**Transaction Risk** examines the request and response at the payload level: request anomalies, response content characteristics, volume deviations, business process alignment. A download that exceeds the requesting user's typical volume profile, from a resource category inconsistent with the user's role, with content that matches DLP patterns, scores high on transaction risk regardless of what the URL category says.

The TA evaluates these five dimensions together, assigns a weight to each, and produces a single access decision. The TA is the difference between a static allow/deny rule and a Zero-Trust trust assessment: a static rule evaluates one attribute; the TA evaluates the full context. A contextual TA is especially effective for insider threats and compromised accounts — deviations from the established behavioural baseline reveal threats that no static policy rule can catch.

### Architectural requirement: shared inspection context

A Trust Algorithm that evaluates five dimensions simultaneously in real time requires the inspection pipeline to share structured contextual state across all inspection stages for every request, without inter-stage latency. The gap introduced by isolated inspection stages is a correctness gap — not a performance gap.

A policy that must fire when "the authenticated user is a contractor AND the content matches a DLP pattern AND the destination is a personal cloud storage service" cannot be enforced if authentication context, content inspection result, and destination classification are produced in separate processes that cannot share state at evaluation time. Passing rich context between isolated inspection stages via inter-process communication (pipes, sockets, or OS-managed shared memory) requires serialisation and deserialisation that degrades both evaluation speed and context fidelity.

Shared-context inspection — where authentication, URL categorisation, content inspection, and UBA evaluation operate against a common request context — is the architectural requirement for granular Zero-Trust enforcement.

## Zero-Trust web security applied

✅ **Zero-Trust Web Security applies when:**

- The organisation processes sensitive data and has compliance obligations under GDPR, HIPAA, PCI-DSS, ISO 27001, or SOC 2 that require demonstrable web access controls and audit evidence
- HTTPS traffic is currently opaque to perimeter controls — the controls cannot see what is inside encrypted sessions
- Identity-aware policy is required: different access for different users, groups, roles, or device states
- Detection and prevention of insider data theft via sanctioned cloud services is required
- The threat model includes APTs, zero-hour phishing, or malware delivered over HTTPS
- A complete, per-user, per-request audit trail suitable for incident investigation and regulatory reporting is required
- Policy enforcement on DNS as a potential covert channel — not just as name resolution infrastructure — is required

❌ **Layer-7 enforcement remains absent when:**

- The organisation relies on DNS filtering alone for web security — DNS inspection does not cover HTTP(S) payload and leaves the Layer-7 surface uncontrolled
- URL category engines are the primary enforcement mechanism — URL category engines cannot inspect content, cannot enforce identity-aware policy, and cannot detect zero-hour domains
- The perimeter firewall performs stateful inspection but not inline TLS decryption — encrypted traffic is opaque regardless of firewall capability below the TLS layer
- Endpoint security is assumed to cover the web perimeter — endpoint agents cannot enforce web policy for unmanaged devices, cannot correlate cross-session behaviour, and cannot inspect network-layer content

## Next steps

- [What is SafeSquid SWG](/getting-started/introduction/What_is_SafeSquid_SWG) — how SafeSquid implements Zero-Trust web controls: the inspection pipeline, control model, and compliance evidence SafeSquid produces
- [Prerequisites](/getting-started/quickstart/Prerequisites) — validate system, network, and identity requirements before deployment
