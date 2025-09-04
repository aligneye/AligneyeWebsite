import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-25 px-6 sm:px-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Last Updated: 23 August 2025
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        <h2 className="text-teal-400 text-xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to AlignEye. We are committed to protecting your privacy and
          ensuring transparency in how we collect, use, and share your
          information. This Privacy Policy explains how AlignEye AI Glasses and
          its companion application collect, use, store, and protect your data
          in compliance with The Digital Personal Data Protection Act, 2023
          (India), General Data Protection Regulation (GDPR - EU), California
          Consumer Privacy Act (CCPA - USA), and other applicable global privacy
          regulations.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          2. Information We Collect
        </h2>
        <p>
          We collect the following types of information when you use AlignEye
          Devices and the application:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and other details provided during account creation.
          </li>
          <li>
            <strong>Device and Sensor Data:</strong> Blink detection, posture
            tracking, head movement, motion data, heart rate (if applicable),
            and other relevant sensory data for functionality.
          </li>
          <li>
            <strong>Usage Data:</strong> App interactions, settings, step count
            (if applicable), and user preferences.
          </li>
          <li>
            <strong>Location Data:</strong> If enabled, approximate location to
            enhance safety features.
          </li>
          <li>
            <strong>Log Data:</strong> IP addresses, device type, operating
            system, error logs, and Bluetooth/Wi-Fi connection details for
            troubleshooting.
          </li>
          <li>
            <strong>Health and Fitness Data (if applicable):</strong> If
            integrated with smart devices like smartwatches or earbuds, data
            such as sleep tracking, heart rate, and activity monitoring may be
            collected.
          </li>
        </ul>

        <h2 className="text-teal-400 text-xl font-semibold">
          3. How We Use Your Information
        </h2>
        <p>We use the collected data for:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Enhancing and personalizing user experience.</li>
          <li>Improving product functionality and performance.</li>
          <li>
            Providing alerts for drowsiness, posture correction, and activity
            reminders.
          </li>
          <li>Customer support and troubleshooting.</li>
          <li>Ensuring security and preventing unauthorized access.</li>
          <li>Research and development for future improvements.</li>
          <li>
            Compliance with legal obligations under Indian and international
            laws.
          </li>
        </ul>

        <h2 className="text-teal-400 text-xl font-semibold">
          4. Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell your personal data. However, we may share your
          information with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Service Providers:</strong> Trusted third parties for cloud
            storage, analytics, and support services, ensuring compliance with
            international data protection laws.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by authorities,
            courts, or government agencies under applicable global laws.
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of a merger,
            acquisition, or sale of assets, with due notice to users.
          </li>
          <li>
            <strong>Connected Devices:</strong> If you use AlignEye with
            third-party wearables, certain data may be shared for improved
            functionality, in accordance with device-specific privacy policies.
          </li>
        </ul>

        <h2 className="text-teal-400 text-xl font-semibold">
          5. Data Security and Storage
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Data Localization Compliance: Personal data is stored based on
            regional legal requirements.
          </li>
          <li>Encryption: All data is encrypted in transit and at rest.</li>
          <li>
            Access Controls: Strict user authentication and role-based access to
            sensitive data.
          </li>
          <li>
            Data Retention: We retain data only as long as necessary for service
            provision or legal compliance.
          </li>
        </ul>

        <h2 className="text-teal-400 text-xl font-semibold">
          6. Your Rights and Choices
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Right to Access and Correction: View and update your personal
            information.
          </li>
          <li>Right to Data Deletion: Request deletion of your data.</li>
          <li>
            Right to Withdraw Consent: Stop using the app and revoke permissions
            at any time.
          </li>
          <li>
            Right to Opt-Out (CCPA Users): Users in California can opt out of
            data sharing for targeted advertising.
          </li>
          <li>
            Right to Grievance Redressal: File complaints regarding data
            handling.
          </li>
        </ul>

        <h2 className="text-teal-400 text-xl font-semibold">
          7. Third-Party Services
        </h2>
        <p>
          AlignEye may integrate with third-party services (e.g., Google Fit,
          Apple Health, smartwatches, and earbuds) that have their own privacy
          policies. We encourage you to review their policies before using such
          services.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          8. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this policy periodically. Users will be notified of
          significant changes via email or in-app notifications. Continued use
          of our services after updates constitutes acceptance of the revised
          policy.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          9. Grievance Redressal Mechanism
        </h2>
        <p>
          If you have any concerns or complaints regarding your data privacy,
          you may contact our Grievance Officer:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Name: Harshit Kumar</li>
          <li>
            Email:{" "}
            <a
              href="mailto:help.aligneye@gmail.com"
              className="text-teal-400 underline"
            >
              help.aligneye@gmail.com
            </a>
          </li>
          <li>
            Address: C4, Technology Business Incubator, Mechanical Workshop,
            UIET, Panjab University, Chandigarh, India, Pin Code: 160014
          </li>
        </ul>
      </div>
    </div>
  );
}
