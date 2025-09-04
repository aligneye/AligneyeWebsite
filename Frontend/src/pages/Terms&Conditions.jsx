import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-25 px-6 sm:px-12">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Last Updated: 23rd August 2025
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
        <p>
          Welcome to Aligneye! Please read these Terms and Conditions (“Terms”)
          carefully before using our product. By purchasing, activating, or
          using the Aligneye device and related services, you agree to these
          Terms. If you do not agree, please do not use our product.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">1. Definitions</h2>
        <p>
          “Product” refers to the Aligneye wearable posture corrector and its
          accessories. “We,” “Us,” “Our” refer to Aligneye and its affiliates.
          “You,” “User,” “Customer” refer to the purchaser or user of the
          Product.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          2. Use of the Product
        </h2>
        <p>
          The Product is intended for posture correction and awareness support
          only. It is not a medical device and should not be used as a
          substitute for professional medical advice, diagnosis, or treatment.
          You agree to use the Product only for personal, lawful purposes.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          3. Safety & Care
        </h2>
        <p>
          Do not attempt to modify, repair, or misuse the Product. Keep the
          Product away from water, fire, and extreme temperatures. Discontinue
          use immediately if you experience pain, irritation, or discomfort and
          consult a doctor if necessary. Children under 13 should not use the
          Product without adult supervision.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          4. Warranty & Returns
        </h2>
        <p>
          The Product comes with a 12-months limited warranty covering
          manufacturing defects only. The warranty does not cover misuse,
          accidents, unauthorized modifications, or normal wear and tear.
          Returns and refunds are subject to our Return Policy, available on our
          website.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          5. Intellectual Property
        </h2>
        <p>
          All rights related to the Product design, software, trademarks, and
          branding remain the property of Aligneye. You may not copy, reproduce,
          or reverse-engineer any part of the Product.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          6. Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by law, Aligneye shall not be liable
          for any direct, indirect, incidental, or consequential damages arising
          from the use or inability to use the Product. You are responsible for
          ensuring the Product is suitable for your intended use.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          7. Privacy & Data
        </h2>
        <p>
          If the Product or companion app collects usage data, it will be
          processed in accordance with our Privacy Policy. We do not sell your
          personal information to third parties.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          8. User Responsibilities
        </h2>
        <p>
          Ensure correct and safe use of the Product as described in the user
          manual. Do not share misleading or false claims about the Product. You
          are responsible for keeping your login credentials (if using an app)
          secure.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          9. Changes to Terms
        </h2>
        <p>
          We may update these Terms from time to time. Any changes will be
          posted on our website and will be effective immediately upon posting.
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">
          10. Governing Law
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of [Insert Country/Region]. Any disputes will be subject to the
          exclusive jurisdiction of the courts in [Insert Location].
        </p>

        <h2 className="text-teal-400 text-xl font-semibold">11. Contact Us</h2>
        <p>
          If you have questions about these Terms, please contact us at:{" "}
          <a
            href="mailto:help.aligneye@gmail.com"
            className="text-teal-400 underline"
          >
            help.aligneye@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
