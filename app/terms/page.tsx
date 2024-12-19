export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Terms & Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By using our service, you agree to these terms. Please read them carefully.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Service</h2>
        <p>You must be at least 18 years old to use this service. You are responsible for maintaining the confidentiality of your account.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Privacy Policy</h2>
        <p>Your use of the service is also governed by our Privacy Policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Modifications to Service</h2>
        <p>We reserve the right to modify or discontinue the service at any time without notice.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p>We are not liable for any indirect, incidental, special, or consequential damages.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
        <p>These terms are governed by the laws of the state in which we are headquartered.</p>
      </section>

      <p className="mt-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  )
}