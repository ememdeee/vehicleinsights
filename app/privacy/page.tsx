export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>At Vehicle Databases Inc. (&quot;{process.env.NEXT_PUBLIC_WEBSITE_NAME}&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Personal Information</h2>
        <p>&quot;Personal information&quot; means information about an identifiable individual. We collect personal information that you provide when using our services, including contact information and other details you transmit to us.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We use your personal information to provide our services, respond to your requests, personalize your experience, and improve our offerings. We may also use it for marketing purposes if you haven&quot;t opted out.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>We use cookies to improve our website&quot;s functionality and analyze usage. You can set your browser to reject cookies, but this may affect some features of our website.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Protection of Your Information</h2>
        <p>We are committed to protecting your personal information against unauthorized access or disclosure. We use industry-standard security measures, including encryption for sensitive areas.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for their privacy practices, so please review their policies.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Consent</h2>
        <p>By using our services, you consent to our collection and use of your personal information as described in this policy. You may withdraw consent at any time by contacting us.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Data Retention and Storage</h2>
        <p>We retain your information as long as necessary for the purposes outlined in this policy and to comply with legal obligations. Your data may be stored and processed outside of your province or country.</p>
      </section>

      <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  )
}