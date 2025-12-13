import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceDescription from "@/components/services/ServiceDescription";
import ServiceCapabilities from "@/components/services/ServiceCapabilities";
import OurProcess from "@/components/services/OurProcess";
import ServiceFAQs from "@/components/services/ServiceFAQs";

// Icons for mobile app development features
const BusinessFirstIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const FullControlIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ReadyToScaleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
    <path d="M14 3h7v7"></path>
    <path d="M14 14h7v7"></path>
    <path d="M3 14h7v7"></path>
  </svg>
);

const BuiltInComplianceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const LocalPresenceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="3"></circle>
    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
    <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
  </svg>
);

const PostLaunchCareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"></path>
    <path d="m12 12 4-4-4-4"></path>
  </svg>
);

// Icons for AI & Machine Learning Development features
const CustomAISoftwareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="M7 8h10M7 12h10M7 16h4"></path>
  </svg>
);

const AIPoweredAppsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
    <circle cx="12" cy="14" r="1"></circle>
    <path d="M9 7h6M9 11h6"></path>
  </svg>
);

const StrategicAIConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
  </svg>
);

const AIMLAuditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"></path>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

const MLOpsInfrastructureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const DecisionIntelligenceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
);

// Icons for DevOps features
const DevOpsStrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const DevSecOpsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const DevOpsTechIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

// Icons for MVP Development features
const ECommerceMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const SocialMediaMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const SaaSMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const IoTMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const HealthTechMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const FinTechMVPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

// Icons for UI/UX Designing features
const RiskProofScopingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const RealisticCostEstimationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CollaborationLevelsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ProactiveRiskManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const ExtensiveDocumentationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const ConsistentReportingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

// Icons for IT Consultation features
const SoftwareConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const ITAuditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"></path>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

const CloudConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const ITSecurityConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const DevOpsConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const ITInfrastructureManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="M7 8h10M7 12h10M7 16h4"></path>
  </svg>
);

const RemoteWorkConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const DesignConsultingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

// Icons for Blockchain Development features
const AIAgentsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const BlockchainEcosystemsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <circle cx="12" cy="12" r="1"></circle>
  </svg>
);

const CryptocurrencyWalletsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <circle cx="12" cy="12" r="1"></circle>
  </svg>
);

const SmartContractsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
  </svg>
);

const CEXDEXPlatformsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const BlockchainSecurityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const DecentralizedApplicationsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12h8"></path>
    <path d="M12 8v8"></path>
  </svg>
);

const DecentralizedFileSharingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const ICOIEOIDOIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

// Icons for custom software development features
const ProjectScopingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
  </svg>
);

const CostEstimationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const CollaborationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const RiskManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const ProjectDocumentationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const KnowledgeManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    <path d="M8 7h6"></path>
    <path d="M8 11h6"></path>
  </svg>
);

const ReportingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const PostLaunchWarrantyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const ChangeRequestManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

// Icons for software testing services
const WebAppTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <rect x="6" y="7" width="12" height="6"></rect>
  </svg>
);

const MobileAppTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12" y2="18.01"></line>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const DesktopAppTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="M2 7h20"></path>
  </svg>
);

const EnterpriseSoftwareTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
  </svg>
);

const SaaSCloudTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    <path d="M12 10v10"></path>
    <path d="M8 14h8"></path>
  </svg>
);

const IoTTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <circle cx="12" cy="14" r="1"></circle>
    <path d="M8 3v4"></path>
    <path d="M16 3v4"></path>
  </svg>
);

const MicroservicesTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    <path d="M7 8h10"></path>
    <path d="M7 12h10"></path>
    <path d="M7 16h4"></path>
    <circle cx="18" cy="4" r="1" fill="currentColor"></circle>
    <path d="M18 4v3"></path>
  </svg>
);

const WearablesAppTestingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
  </svg>
);

// Custom process steps for mobile app development
const mobileAppProcessSteps = [
  {
    number: 1,
    title: "Consulting & Strategy",
    description:
      "We analyze your app concept, define objectives, and devise a tailored development plan to ensure your project's success and growth in the competitive market."
  },
  {
    number: 2,
    title: "UI/UX Design",
    description:
      "Our expert designers craft visually stunning, user-centric interfaces, prioritizing seamless navigation and elevated user engagement for an exceptional experience."
  },
  {
    number: 3,
    title: "Engineering & Delivery",
    description:
      "Our proficient developers utilize cutting-edge technologies and best practices to create high-quality, scalable apps that cater to your unique requirements."
  },
  {
    number: 4,
    title: "QA & Optimization",
    description:
      "We meticulously test your app, validating functionality, compatibility, and performance to deliver a polished, error-free product that exceeds expectations."
  },
  {
    number: 5,
    title: "Deployment",
    description:
      "Prepare for the launch, beta live, and live the project on the respective app store(s)."
  },
  {
    number: 6,
    title: "Support",
    description:
      "Software issues resolution to ensure quality and complete functionality, as well as a retrospective analysis to prevent further issues."
  },
  {
    number: 7,
    title: "Maintenance/Enhancement",
    description:
      "Providing on-demand complete software maintenance, feedback monitoring, and functionality enhancement services."
  }
];

// Custom process steps for software testing
const softwareTestingProcessSteps = [
  {
    number: 1,
    title: "Consulting & Strategy",
    description:
      "We collaborate with you to understand your project requirements, goals, and constraints. This enables us to develop a tailored software testing strategy that aligns with your objectives and addresses the unique challenges of your project."
  },
  {
    number: 2,
    title: "Test Case Analysis & Designing",
    description:
      "Our team of experts carefully analyzes your software's specifications and designs detailed test cases to cover all possible scenarios. This identifies potential issues and helps validate that your software meets the desired requirements and user expectations."
  },
  {
    number: 3,
    title: "Test Implementation",
    description:
      "We execute meticulously designed test cases across various testing phases, such as unit, integration, system, and acceptance testing. Our expert testers efficiently manage the testing process, using the latest tools and techniques to ensure accurate and reliable results."
  },
  {
    number: 4,
    title: "Result Analysis & Accountability",
    description:
      "We analyze the test results, identify areas for improvement, and provide actionable insights to enhance your software's quality. Our team ensures accountability by informing you of regular progress updates and comprehensive reports, enabling you to make informed decisions and achieve your project goals."
  }
];

// Custom process steps for DevOps
const devopsProcessSteps = [
  {
    number: 1,
    title: "Planning and Analysis",
    description:
      "Our engineers work with you to understand your business goals and requirements and develop a comprehensive plan for your DevOps implementation. Our team analyzes your existing infrastructure and processes and identifies areas for improvement."
  },
  {
    number: 2,
    title: "Continuous Integration and Delivery",
    description:
      "We set up automated CI/CD pipelines to enable faster and more reliable software delivery. This step involves building, testing, and deploying your code for automation and optimization."
  },
  {
    number: 3,
    title: "Monitoring and Logging",
    description:
      "We implement robust monitoring and logging solutions to ensure your software performs as expected. This step involves setting up alerts and notifications, analyzing logs, and identifying potential issues before they become critical."
  },
  {
    number: 4,
    title: "Continuous Improvement",
    description:
      "With a strong belief in continuous improvement, we are committed to helping you optimize your DevOps processes over time. This step involves analyzing metrics and feedback, identifying areas for improvement, and implementing changes to increase efficiency and quality."
  }
];

// Custom process steps for UI/UX Designing
const uiUxProcessSteps = [
  {
    number: 1,
    title: "Research & Define",
    description:
      "We start by conducting user research, analyzing competitors, and understanding your business objectives. Based on these insights, we develop user personas, user stories, and define the information architecture to create a solid foundation for user-centric design."
  },
  {
    number: 2,
    title: "Design & Prototype",
    description:
      "Our team crafts wireframes, visual designs, and interactive prototypes, balancing aesthetics and usability. We involve you in the process, iterating on the designs based on your feedback to ensure alignment with your vision and expectations."
  },
  {
    number: 3,
    title: "Test & Refine",
    description:
      "Usability testing with real users helps us identify potential issues and areas for improvement. We gather valuable feedback and use it to refine and optimize the design, ensuring a seamless and satisfying user experience."
  },
  {
    number: 4,
    title: "Implement & Evaluate",
    description:
      "We collaborate with your development team for a smooth design handoff and integration into the final product. Post-launch, we monitor user feedback and metrics to identify opportunities for further optimization and enhancement, keeping your digital product relevant and effective."
  }
];

const serviceData: Record<string, any> = {
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle:
      "From concept to execution - every line of code is designed to optimize your business processes and drive measurable ROI.",
    intro:
      "We create custom software solutions that perfectly align with your business objectives. Our team of expert developers builds scalable, maintainable applications that drive growth and efficiency.",
    descriptionTitle: "Why choose CodeXpace as your custom software development company",
    description: [
      "At CodeXpace, we see ourselves as more than just a service provider — we're a partner invested in your success. Our custom software development company helps enterprises and growing businesses streamline operations, scale effectively, and build technology that drives real results. Whether you need full-cycle development or support at a specific stage, we're here to guide you every step of the way."
    ],
    features: [
      {
        icon: <ProjectScopingIcon />,
        title: "Project scoping",
        description: "We start by getting on the same page with you. We dig deep into your requirements and map out a detailed project plan so there are no surprises down the line."
      },
      {
        icon: <CostEstimationIcon />,
        title: "Cost estimation",
        description: "Our cost estimates are spot-on because we consider every angle. That way, your budget matches the real scope of your custom software development project."
      },
      {
        icon: <CollaborationIcon />,
        title: "Collaboration",
        description: "We stay in touch throughout the project, keeping you updated on progress and tackling any challenges together, so you always know what's happening."
      },
      {
        icon: <RiskManagementIcon />,
        title: "Risk management",
        description: "Our developers catch potential issues early on and solve them before they slow things down, so your custom software development project stays on track."
      },
      {
        icon: <ProjectDocumentationIcon />,
        title: "Project documentation",
        description: "At every stage of custom development, we create detailed documentation, so you can easily refer back to any part of the process whenever needed."
      },
      {
        icon: <KnowledgeManagementIcon />,
        title: "Knowledge management",
        description: "We integrate knowledge management into our processes, applying and sharing best practices to boost efficiency and drive innovation in software custom development."
      },
      {
        icon: <ReportingIcon />,
        title: "Reporting",
        description: "You'll get regular updates and detailed reports, so you're never left guessing about the status of your custom software development project."
      },
      {
        icon: <PostLaunchWarrantyIcon />,
        title: "Post-launch warranty",
        description: "Once your software is live, our post-launch support ensures that any issues are fixed quickly, giving you peace of mind."
      },
      {
        icon: <ChangeRequestManagementIcon />,
        title: "Change request management",
        description: "We know things can change. That's why we've set up a change request process to keep everything running smoothly, so updates don't cause any disruptions."
      }
    ],
    whyChoose: [
      "Custom Digital Product Development",
      "Performance and Scalability",
      "Security Built-in",
      "Agile, Collaborative Approach"
    ],
    capabilities: [
      "Enterprise application development",
      "Custom workflow automation",
      "Legacy system modernization",
      "Cross-platform solutions",
      "API development and integration"
    ]
  },
  "ai-machine-learning-development": {
    title: "AI & Machine Learning Development",
    subtitle: "Your business — now intelligent.",
    intro:
      "Transform your business with intelligent solutions powered by artificial intelligence and machine learning. We build AI systems that learn, adapt, and deliver actionable insights.",
    descriptionTitle: "Why choose CodeXpace as your AI & Machine Learning development company",
    description: [
      "After 40+ real-world deployments, we know where AI shines, where it struggles, and how to make it work consistently. If you're serious about turning machine learning into a practical advantage (and not just another project gathering dust), we're here to help you get it right from the start."
    ],
    features: [
      {
        icon: <CustomAISoftwareIcon />,
        title: "Custom AI software development",
        description: "Turn your ideas into intelligent, high-impact solutions with our custom AI development services. From early prototyping and feasibility testing to MVP delivery, we build tailor-made AI products ready to integrate, scale fast, and make a real mark in your market."
      },
      {
        icon: <AIPoweredAppsIcon />,
        title: "AI-powered apps",
        description: "We deploy AI-powered mobile and web applications with embedded NLP, computer vision, and neural network engines – arming your business with the ability to anticipate user needs, and the agility to adapt to changing market demands."
      },
      {
        icon: <StrategicAIConsultingIcon />,
        title: "Strategic AI consulting",
        description: "Chart your course with clarity. We map real-world AI strategies, match the right models to your goals, design clean data pipelines, and build validation frameworks that de-risk your investments."
      },
      {
        icon: <AIMLAuditIcon />,
        title: "AI & ML audit",
        description: "Our experts audit your AI models for bias, model drift, data leakage, and suboptimal feature selection. We deliver corrective action plans, re-tune hyperparameters, and strengthen model accuracy and generalization."
      },
      {
        icon: <MLOpsInfrastructureIcon />,
        title: "MLOps & AI infrastructure",
        description: "We implement production-grade MLOps pipelines with automated model deployment, real-time monitoring, data versioning, and retraining triggers – keeping your AI operational, secure, and adaptable at scale."
      },
      {
        icon: <DecisionIntelligenceIcon />,
        title: "Decision intelligence",
        description: "Turn raw data into strategic actions. By integrating data analytics, AI and human expertise, we help companies make smarter, data-driven decisions across all business areas – from high-level strategy to day-to-day operations."
      }
    ],
    whyChoose: [
      "Advanced AI Solutions",
      "Machine Learning Models",
      "Data Analytics & Insights",
      "Automated Decision Making"
    ],
    capabilities: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics",
      "AI-powered automation"
    ]
  },
  "blockchain-development": {
    title: "Blockchain",
    subtitle: "Trust, transparency, and transactions—redefined.",
    intro:
      "Leverage blockchain technology to build transparent, secure, and decentralized applications. We develop smart contracts, DApps, and blockchain infrastructure for various industries.",
    descriptionTitle: "Why choose CodeXpace as your blockchain development company",
    description: [
      "At CodeXpace, we turn blockchain ideas into working products that make an impact. Need a secure crypto wallet, a smart contract system that won't buckle under pressure, a DeFi platform built to grow, or an NFT marketplace that actually performs? That's our wheelhouse. As a blockchain development company, we build solutions that stand the test of time."
    ],
    features: [
      {
        icon: <AIAgentsIcon />,
        title: "AI agents",
        description: "At CodeXpace, we set up AI agents that change how people use blockchain. Not just trading bots or on-chain analytics, these agents manage wallets, trigger logic, and help users work with tokens in new ways."
      },
      {
        icon: <BlockchainEcosystemsIcon />,
        title: "Blockchain ecosystems",
        description: "Need more than just a DApp? We build full ecosystems with nodes, ledgers, and consensus in place. The solutions handle real-world scale and performance demands, going far beyond simple testnet demos."
      },
      {
        icon: <CryptocurrencyWalletsIcon />,
        title: "Cryptocurrency wallets",
        description: "Custodial or not, mobile or desktop, CodeXpace builds crypto wallets that strike the right balance between security, user experience, and transaction logic. We've seen what breaks and what keeps users in control."
      },
      {
        icon: <SmartContractsIcon />,
        title: "Smart contracts",
        description: "We build smart contracts that work like digital handshakes – automatically executing agreements without middlemen. Custom blockchain solutions speed up transactions and add clarity to your operations."
      },
      {
        icon: <CEXDEXPlatformsIcon />,
        title: "CEX/DEX platforms",
        description: "From liquidity pools to fiat ramps, we build crypto exchanges that work at launch and scale after it. Whether you are aiming for centralized or decentralized, we've walked both paths and mapped the potholes."
      },
      {
        icon: <BlockchainSecurityIcon />,
        title: "Blockchain security solutions",
        description: "CodeXpace team develops blockchain security systems, from access control to encrypted data transfer. These solutions are virtually impossible to hack, offering strong protection for modern digital environments."
      },
      {
        icon: <DecentralizedApplicationsIcon />,
        title: "Decentralized applications",
        description: "CodeXpace's blockchain app developers build DApps that actually get used – resilient backends, human-friendly interfaces, and no single point of failure. It's the power of blockchain, minus the clunky UX."
      },
      {
        icon: <DecentralizedFileSharingIcon />,
        title: "Decentralized file sharing",
        description: "Our engineers build blockchain file-sharing platforms using IPFS and Hypercore, so that users can exchange files quickly and securely, without relying on centralized servers or third-party storage providers."
      },
      {
        icon: <ICOIEOIDOIcon />,
        title: "ICO/IEO/IDO development",
        description: "We offer blockchain development services for ICO, IEO, and IDO launches – from roadmap and whitepaper to token creation and release. Our experts help raise funds and launch blockchain projects on any platform."
      }
    ],
    whyChoose: [
      "Smart Contract Development",
      "Decentralized Applications",
      "Blockchain Integration",
      "Security & Compliance"
    ],
    capabilities: [
      "Smart contract development",
      "DApp creation",
      "Blockchain consulting",
      "Token development",
      "DeFi solutions"
    ]
  },
  "web-development": {
    title: "Web Development",
    subtitle:
      "Your one-stop shop for stellar web applications, built with the latest technologies.",
    intro:
      "We build powerful web applications with modern frontend frameworks and robust backend architectures. Our full-stack expertise ensures seamless user experiences and reliable performance.",
    descriptionTitle: "Why choose CodeXpace as your web development company",
    description: [
      "CodeXpace employs an established team of savvy specialists that have been gaining experience and accumulating expertise throughout years of working on market-defining projects of all shapes and sizes. We help achieve prominence in the market by:",
      "— saving your time and efforts through well-adjusted collaboration;",
      "— ensuring a sharp competitive edge by creating tailored solutions;",
      "— hitting the demand by putting the best market practices to your advantage."
    ],
    whyChoose: [
      "Custom Digital Product Development",
      "Performance and Scalability",
      "Security Built-in",
      "Agile, Collaborative Approach"
    ],
    capabilities: [
      "Responsive web app development",
      "Custom API design and integration",
      "Complex database architecture",
      "System modernization and migration",
      "Performance optimization"
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle:
      "Secure, scalable, and innovative mobile apps that deliver results.",
    intro:
      "Create engaging mobile experiences with native and cross-platform applications. We develop high-performance mobile apps that users love and businesses rely on.",
    descriptionTitle: "Why choose CodeXpace as a mobile app development company",
    description: [
      "We're not hired to build 'just another app.' Clients come to us when something doesn't work and they need it fixed — with clear outcomes and no chaos."
    ],
    features: [
      {
        icon: <BusinessFirstIcon />,
        title: "Business first",
        description: "Before a single screen is designed, we get to the root of the problem. No features for the sake of features — only what drives the numbers."
      },
      {
        icon: <FullControlIcon />,
        title: "Full control",
        description: "You always know what's happening, what's next, and what it costs. No vague timelines, no scope creep, no going dark."
      },
      {
        icon: <ReadyToScaleIcon />,
        title: "Ready to scale",
        description: "If your business grows, your app should keep up. Our mobile app development firm designs with that in mind — not as an afterthought."
      },
      {
        icon: <BuiltInComplianceIcon />,
        title: "Built-in compliance",
        description: "We bake in compliance from day one. That means GDPR, legal, and security — especially for clients in the US and Europe."
      },
      {
        icon: <LocalPresenceIcon />,
        title: "Local presence",
        description: "With offices in the US and Europe, we work in your time zone, know your market, and speak the same language — business."
      },
      {
        icon: <PostLaunchCareIcon />,
        title: "Post-launch care",
        description: "We stay involved until the app works as promised. That includes adoption, iteration, and making sure your team actually uses it."
      }
    ],
    whyChoose: [
      "Native & Cross-Platform",
      "User-Centric Design",
      "App Store Optimization",
      "Ongoing Support & Updates"
    ],
    capabilities: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform solutions",
      "App UI/UX design",
      "App testing and deployment"
    ]
  },
  "devops-cloud-services": {
    title: "Devops and Cloud",
    subtitle: "Cloud that delivers. DevOps that empowers.",
    intro:
      "Streamline your development workflow and infrastructure with our DevOps expertise. We help you deploy faster, scale efficiently, and maintain reliable cloud environments.",
    descriptionTitle: "Why choose CodeXpace as your DevOps and Cloud company",
    description: [
      "We are a perfect fit for businesses that can't afford slow releases, brittle infrastructure, or delays. With a large pool of dedicated DevOps engineers, CodeXpace steps in to untangle pipelines, automate delivery, and build a foundation for stable delivery."
    ],
    features: [
      {
        icon: <DevOpsStrategyIcon />,
        title: "DevOps strategy consulting",
        description: "We guide businesses through the strategic side of DevOps, from assessing maturity to defining clear implementation steps. Then, build a roadmap that fits your culture, tech stack, and goals."
      },
      {
        icon: <DevSecOpsIcon />,
        title: "DevSecOps consulting",
        description: "Holding ISO 27001 certification, CodeXpace helps integrate security practices into every stage of delivery: risk assessment, choosing a security toolset, and embedding it without slowing releases."
      },
      {
        icon: <DevOpsTechIcon />,
        title: "DevOps tech consulting",
        description: "CodeXpace's engineers help you pick and configure the right DevOps stack for your product, be it CI/CD or container orchestration. Smooth-running infrastructure is the primary goal."
      }
    ],
    whyChoose: [
      "CI/CD Pipeline Setup",
      "Cloud Infrastructure",
      "Monitoring & Automation",
      "Cost Optimization"
    ],
    capabilities: [
      "CI/CD implementation",
      "Cloud migration",
      "Container orchestration",
      "Infrastructure as code",
      "Performance monitoring"
    ]
  },
  "software-testing": {
    title: "Software Testing",
    subtitle:
      "Speed up your software journey and mitigate risk with our full-cycle software testing service.",
    intro:
      "Comprehensive testing services that guarantee your software meets the highest quality standards. We ensure your applications are bug-free, performant, and user-ready.",
    descriptionTitle: "Why choose CodeXpace as your software testing company",
    description: [
      "Choosing CodeXpace means no more missed bugs, delayed releases, or skyrocketing QA costs. With 500+ projects perfected, we find critical issues early on, streamline your testing process, and keep your software rock-solid — so you can launch on time, on budget, and without stress."
    ],
    features: [
      {
        icon: <WebAppTestingIcon />,
        title: "Web application and website testing",
        description: "A fast, secure, and flawless web experience isn't optional — it's expected. Every site and web app is tested across browsers and devices to catch broken links and prevent slowdowns."
      },
      {
        icon: <MobileAppTestingIcon />,
        title: "Mobile application testing",
        description: "No one likes a buggy app. Whether native or hybrid, mobile applications are tested for usability, stability, and compatibility — ensuring they load fast, stay bug-free, and keep users engaged."
      },
      {
        icon: <DesktopAppTestingIcon />,
        title: "Desktop application testing",
        description: "Our experts make sure desktop apps are stable, secure, and responsive across Windows, macOS, and Linux."
      },
      {
        icon: <EnterpriseSoftwareTestingIcon />,
        title: "Enterprise software testing",
        description: "Enterprise software should work for you, not against you. We make sure it scales smoothly, stays secure, and integrates without a hitch, so you can focus on business growth."
      },
      {
        icon: <SaaSCloudTestingIcon />,
        title: "SaaS and cloud testing",
        description: "With SaaS and cloud applications, downtime isn't an option. By simulating peak traffic, testing security, and optimizing performance, cloud-based software stays stable at peak times."
      },
      {
        icon: <IoTTestingIcon />,
        title: "IoT testing",
        description: "For IoT solutions, connectivity is everything. Whether a smart home system or an industrial sensor, we check for seamless communication, strong security, and real-time data accuracy."
      },
      {
        icon: <MicroservicesTestingIcon />,
        title: "Microservices testing",
        description: "For software built on microservices, everything needs to work in sync. API interactions, scalability, and security are put to the test to guarantee smooth communication between services."
      },
      {
        icon: <WearablesAppTestingIcon />,
        title: "Wearables app testing",
        description: "Wearable apps must be lightweight and accurate. That's why we make sure these apps track data correctly, sync seamlessly, and keep users connected without draining their devices."
      }
    ],
    whyChoose: [
      "Comprehensive Test Coverage",
      "Automated Testing",
      "Performance Testing",
      "Quality Assurance"
    ],
    capabilities: [
      "Automated test development",
      "Manual testing services",
      "Performance testing",
      "Security testing",
      "Test strategy consulting"
    ]
  },
  "system-integration": {
    title: "System Integration",
    subtitle: "Connect your tools, data, and workflows seamlessly.",
    intro:
      "Integrate your existing systems and third-party services to create a unified, efficient ecosystem. We connect your tools and data for seamless operations.",
    descriptionTitle: "Why choose CodeXpace as your system integration company",
    description: [
      "CodeXpace has significant expertise in designing and implementing system integration solutions that seamlessly connect your existing tools, applications, and data sources into a unified, efficient ecosystem.",
      "Through our comprehensive integration services, we provide end-to-end support from system analysis and integration architecture design to API development, data synchronization, workflow automation, and ongoing maintenance. Our integration specialists work with you to understand your current infrastructure and business processes, ensuring that all systems communicate effectively and data flows smoothly across your organization.",
      "So, with CodeXpace system integration services, you get a connected technology ecosystem that eliminates data silos, automates workflows, improves operational efficiency, and enables better decision-making through unified access to all your business information."
    ],
    whyChoose: [
      "Seamless Integration",
      "API Development",
      "Data Synchronization",
      "Workflow Automation"
    ],
    capabilities: [
      "Third-party integrations",
      "API development",
      "Data migration",
      "System connectivity",
      "Workflow automation"
    ]
  },
  "mvp-development": {
    title: "MVP Development",
    subtitle: "Validate ideas and launch quicker, smarter.",
    intro:
      "Bring your product idea to market faster with our MVP development services. We help you validate concepts, test assumptions, and launch with confidence.",
    descriptionTitle: "Why choose CodeXpace as your MVP development company",
    description: [
      "CodeXpace has extensive expertise in developing Minimum Viable Products (MVPs) that enable businesses to validate their ideas, test market assumptions, and launch products faster with reduced risk and investment."
    ],
    features: [
      {
        icon: <ECommerceMVPIcon />,
        title: "eCommerce MVP",
        description: "CodeXpace creates user-friendly MVPs for eCommerce, tailored to target audiences. These MVPs allow businesses to test marketplaces or services in a real market scenario without large investment costs. This approach helps companies gather feedback, adjust product offerings, and understand consumer behavior before full launch, leading to reduced risk of failure, faster time to market, and a clear roadmap to scalability."
      },
      {
        icon: <SocialMediaMVPIcon />,
        title: "Social media MVP",
        description: "Human connection is channeled through social media platforms. CodeXpace's MVPs incorporate community building and engagement tools for effortless and sustainable user connection. We emphasize the importance of users feeling comfortable in virtual environments and achieve this by embedding interactive features like real-time chat, multimedia content sharing, and personalized recommendation algorithms."
      },
      {
        icon: <SaaSMVPIcon />,
        title: "SaaS MVP",
        description: "CodeXpace's MVP solutions for SaaS (Software as a Service) businesses focus on user needs, scalability, and monetization strategies. By building a SaaS minimal viable product, companies can test their software solution with a select group, refine functionalities based on user feedback, and achieve effective resource utilization. This strategy aims to boost user acquisition, significantly reduce churn rates, and optimize return on investment."
      },
      {
        icon: <IoTMVPIcon />,
        title: "IoT MVP",
        description: "The IoT (Internet of Things) landscape is vast and diverse. CodeXpace develops MVPs tailored to specific IoT solutions, including smart home applications, industrial automation, or wearable technology. An MVP approach in the IoT development domain ensures the end product is technologically sound, addresses genuine market needs, and promotes adoption and long-term success. We adapt solutions to keep clients' products competitive as market demands shift."
      },
      {
        icon: <HealthTechMVPIcon />,
        title: "HealthTech MVP",
        description: "HealthTech innovations are life-changing but require careful testing and validation. As a healthcare software development company, CodeXpace delivers MVP solutions that prioritize patient comfort, data security, and regulatory compliance. By using an MVP approach, healthcare startups and innovators can ensure their apps are innovative, viable, and beneficial to end-users, enabling rapid validation and refinement of products."
      },
      {
        icon: <FinTechMVPIcon />,
        title: "FinTech MVP",
        description: "CodeXpace, as a financial software development company, builds FinTech MVPs that prioritize secure and scalable infrastructure. Our expertise helps entrepreneurs deploy minimal viable products swiftly, ensuring cost-efficiency and user relevance. These MVPs serve as a robust platform for future growth within the dynamic finance sector, allowing companies to test novel financial products or platforms, gather invaluable feedback, and refine their approach for maximum market success."
      }
    ],
    whyChoose: [
      "Rapid Development",
      "Cost-Effective Solutions",
      "Market Validation",
      "Scalable Foundation"
    ],
    capabilities: [
      "MVP planning and strategy",
      "Rapid prototyping",
      "Core feature development",
      "Market validation support",
      "Scalable architecture"
    ]
  },
  "saas-development": {
    title: "SAAS Development",
    subtitle:
      "End-to-end innovative SaaS software development services that are scalable, secure, and user-centric.",
    intro:
      "Build powerful SaaS platforms that scale with your business. We develop cloud-based software solutions that deliver value to your customers while ensuring reliability and performance.",
    descriptionTitle: "Why choose CodeXpace as your SaaS development company",
    description: [
      "CodeXpace has comprehensive expertise in developing innovative Software-as-a-Service (SaaS) platforms that are scalable, secure, and designed to deliver exceptional value to your customers while driving sustainable business growth.",
      "Through our proven SaaS development methodology, we provide complete support from platform architecture design and multi-tenant system development to subscription management, billing integration, API development, and cloud infrastructure setup. Our SaaS experts work alongside you to build cloud-native solutions that scale seamlessly with your user base, ensure data security and isolation, and provide a foundation for continuous feature enhancement and business expansion.",
      "So, with CodeXpace SaaS development services, you get a robust, scalable platform that delivers reliable performance, ensures customer data security, supports flexible subscription models, and enables you to focus on growing your business while we handle the technical complexity."
    ],
    whyChoose: [
      "Scalable Architecture",
      "Multi-Tenant Solutions",
      "Subscription Management",
      "Cloud-Native Development"
    ],
    capabilities: [
      "SaaS platform development",
      "Multi-tenant architecture",
      "Subscription billing systems",
      "API and integration development",
      "Cloud infrastructure setup"
    ]
  },
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle:
      "Transform your digital user experience through our intuitive and visually appealing designing services.",
    intro:
      "Transform your brand identity with stunning graphic design. We create compelling visual content that communicates your message effectively and engages your audience.",
    descriptionTitle: "Why choose CodeXpace as your graphic design company",
    description: [
      "CodeXpace has extensive expertise in creating compelling graphic designs that transform your brand identity and communicate your message effectively across all digital and print mediums.",
      "Through our comprehensive design services, we provide complete support from brand identity development and logo design to marketing materials, social media graphics, print designs, and digital asset creation. Our creative designers work closely with you to understand your brand vision and target audience, ensuring that every visual element aligns with your brand values, maintains consistency across all touchpoints, and engages your audience with modern, professional designs that stand out in the marketplace.",
      "So, with CodeXpace graphic design services, you get visually stunning, brand-consistent designs that effectively communicate your message, enhance your brand recognition, and create lasting impressions that drive engagement and business growth."
    ],
    whyChoose: [
      "Creative Excellence",
      "Brand Consistency",
      "Modern Design Trends",
      "Professional Quality"
    ],
    capabilities: [
      "Logo and brand identity design",
      "Marketing materials design",
      "Social media graphics",
      "Print design services",
      "Digital asset creation"
    ]
  },
  "ui-ux-designing": {
    title: "UI/UX Designing",
    subtitle: "User-centered UI/UX design services",
    intro:
      "Design intuitive and engaging user interfaces that delight users and drive conversions. Our UX research and UI design expertise ensures your product is both beautiful and functional.",
    descriptionTitle: "Why choose CodeXpace as your UI/UX design company",
    description: [
      "CodeXpace has comprehensive expertise in creating user-centered UI/UX designs that deliver intuitive, engaging, and conversion-optimized digital experiences across all platforms and devices."
    ],
    features: [
      {
        icon: <RiskProofScopingIcon />,
        title: "Risk-proof project scoping",
        description: "At CodeXpace, we believe that getting on the same page from the start is key. At the beginning of each project, we clarify your requirements and prepare technical specifications, which helps us avoid risks and out-of-scope tasks."
      },
      {
        icon: <RealisticCostEstimationIcon />,
        title: "Realistic cost estimation",
        description: "Our specialists consider a variety of different factors – project scale, complexity, team size, designers' skill sets, and so on – for an accurate cost estimate that truly reflects the scope of the work. We keep excess spending at bay."
      },
      {
        icon: <CollaborationLevelsIcon />,
        title: "Collaboration at all levels",
        description: "Our UI/UX design company fosters open and transparent communication to keep you informed on project progress and resolve challenges on the fly. We offer effective cooperation from day one and make sure you're always involved in the process."
      },
      {
        icon: <ProactiveRiskManagementIcon />,
        title: "Proactive risk management",
        description: "Starting from requirements analysis, we identify potential roadblocks early on and resolve minor issues before they have a chance to become big problems. This way, our professionals can keep the design project on track."
      },
      {
        icon: <ExtensiveDocumentationIcon />,
        title: "Extensive documentation",
        description: "We maintain comprehensive UX documentation throughout the entire project lifecycle to provide clarity, streamline team onboarding, and align products with the strategy. As a result, you'll always have the information you need right at hand."
      },
      {
        icon: <ConsistentReportingIcon />,
        title: "Consistent reporting",
        description: "With strategic meetings and status reports, we make sure you're never left in the dark when it comes to your project's progress. At CodeXpace, we're committed to keeping you informed and encouraged to chip in every step of the way!"
      }
    ],
    whyChoose: [
      "User-Centered Approach",
      "Modern Design Systems",
      "Usability Testing",
      "Responsive Design"
    ],
    capabilities: [
      "User research and personas",
      "Wireframing and prototyping",
      "UI/UX design systems",
      "Interaction design",
      "Usability testing and optimization"
    ]
  },
  "it-consultation": {
    title: "IT Consultation",
    subtitle: "Consulting that works — even when you're offline.",
    intro:
      "Get strategic technology advice from experienced consultants. We help you make informed decisions about your IT infrastructure, software solutions, and digital transformation initiatives.",
    descriptionTitle: "Why choose CodeXpace as your IT consultation company",
    description: [
      "CodeXpace has extensive expertise in providing strategic IT consultation services that help businesses make informed technology decisions, optimize their IT infrastructure, and successfully navigate digital transformation initiatives."
    ],
    features: [
      {
        icon: <SoftwareConsultingIcon />,
        title: "Software consulting",
        description: "Undergo a comprehensive software stack and architecture assessment, code review to be provided with a sustainable plan to modernize these areas."
      },
      {
        icon: <ITAuditIcon />,
        title: "IT audit",
        description: "Seek assistance from our software audit consultants in your current IT infrastructure assessment to elaborate a robust optimization strategy."
      },
      {
        icon: <CloudConsultingIcon />,
        title: "Cloud consulting",
        description: "Harness the power of the cloud to cut operational costs, boost scalability, and deliver unparalleled performance with our comprehensive cloud consulting services."
      },
      {
        icon: <ITSecurityConsultingIcon />,
        title: "IT security consulting",
        description: "Obtain an explicit cybersecurity strategy to empower your information security, risk management, and awareness programs."
      },
      {
        icon: <DevOpsConsultingIcon />,
        title: "DevOps consulting",
        description: "Upgrade your software quality, automate processes and operations, so you have the flexibility to deploy your infrastructure and resources as needed."
      },
      {
        icon: <ITInfrastructureManagementIcon />,
        title: "IT infrastructure management",
        description: "Benefit from a full range of enterprise IT infrastructure services to keep your IT infrastructure reliable."
      },
      {
        icon: <RemoteWorkConsultingIcon />,
        title: "Remote work consulting",
        description: "Do business smarter by taking advantage of a remote workforce having anticipating all the risks related."
      },
      {
        icon: <DesignConsultingIcon />,
        title: "Design consulting",
        description: "Hire our UI/UX design consultants to refine UX strategy, achieve responsiveness and authenticity of our current design, and provide an exceptional user experience."
      }
    ],
    whyChoose: [
      "Expert Guidance",
      "Strategic Planning",
      "Technology Assessment",
      "Cost Optimization"
    ],
    capabilities: [
      "Technology strategy consulting",
      "IT infrastructure assessment",
      "Digital transformation planning",
      "Software selection guidance",
      "Technology roadmap development"
    ]
  },
  "enterprise-mobility-solutions": {
    title: "Enterprise Mobility Solutions",
    subtitle: "Mobility that accelerates efficiency.",
    intro:
      "Enable your workforce with enterprise-grade mobile solutions. We develop secure, scalable mobile applications and platforms that enhance productivity and streamline business operations.",
    descriptionTitle: "Why choose CodeXpace as your enterprise mobility solutions company",
    description: [
      "CodeXpace has comprehensive expertise in developing enterprise mobility solutions that empower your workforce with secure, scalable mobile applications and platforms designed to enhance productivity and streamline business operations.",
      "Through our proven enterprise mobility approach, we provide end-to-end support from mobile strategy development and enterprise app design to mobile device management, BYOD solutions, security implementation, and seamless integration with existing enterprise systems. Our mobility experts work closely with your IT and business teams to understand your workforce needs, security requirements, and operational challenges, ensuring that every mobile solution is built to enterprise standards while delivering intuitive user experiences.",
      "So, with CodeXpace enterprise mobility solutions, you get secure, scalable mobile platforms that enable your workforce to work efficiently from anywhere, improve collaboration, streamline processes, and drive productivity while maintaining the highest standards of security and compliance required for enterprise environments."
    ],
    whyChoose: [
      "Enterprise Security",
      "Scalable Solutions",
      "Cross-Platform Support",
      "Integration Capabilities"
    ],
    capabilities: [
      "Enterprise mobile app development",
      "Mobile device management",
      "BYOD solutions",
      "Mobile security implementation",
      "Enterprise app integration"
    ]
  }
};

// Backward compatibility for old slugs
serviceData["front-backend-development"] = serviceData["web-development"];
serviceData["android-ios-app-development"] =
  serviceData["mobile-app-development"];
serviceData["enterprise-software-development"] =
  serviceData["saas-development"];

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug] || serviceData["web-development"];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <ServiceHero
        title={service.title}
        subtitle={service.subtitle}
        slug={params.slug}
      />
      {service.description && (
        <ServiceDescription
          title={service.title}
          description={service.description}
          descriptionTitle={service.descriptionTitle}
          features={service.features}
        />
      )}
      <ServiceCapabilities items={service.capabilities} />
      <OurProcess
        steps={
          params.slug === "mobile-app-development" ||
          params.slug === "android-ios-app-development"
            ? mobileAppProcessSteps
            : params.slug === "software-testing"
            ? softwareTestingProcessSteps
            : params.slug === "devops-cloud-services"
            ? devopsProcessSteps
            : params.slug === "ui-ux-designing"
            ? uiUxProcessSteps
            : undefined
        }
      />
      <ServiceFAQs slug={params.slug} />
      <Footer />
    </main>
  );
}
