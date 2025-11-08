const PrivacyContent = () => {
  return (
    <div className="ltn__page-details-area ltn__blog-details-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__page-details-inner ltn__blog-details-inner">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt"></i>Effective Date: January 1, 2024
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Governing Law: Commonwealth of Pennsylvania
                  </li>
                </ul>
              </div>
              
              <p className="mb-30">
                <strong>Address:</strong> 721 Aunt Clara Rd, Burgettstown, PA 15021<br />
                <strong>Contact:</strong> privacy@myfitnessroomconcierge.com
              </p>

              <h2 className="mt-30">1. Information We Collect</h2>
              <p>
                We collect limited personal information necessary to operate the platform, including: name, email, phone number, and address. We also collect IP address, device info, OS version, app version, device ID, and crash data. Users may upload images related to equipment, service issues, or proof of work. Metadata such as EXIF is stripped before storage.
              </p>

              <h2 className="mt-30">2. How We Use Information</h2>
              <p>
                We use your information to: create and manage accounts; coordinate maintenance and service activities; send notifications and updates; improve system performance; and, when applicable, send marketing communications about our services. Users may opt out of marketing emails by contacting privacy@myfitnessroomconcierge.com.
              </p>

              <h2 className="mt-30">3. Data Storage and Security</h2>
              <p>
                Data is stored in Firebase (us-central1) and processed securely using encryption and access controls. Crashlytics collects device info and timestamps for diagnostics. Resend handles email delivery securely; message content is stored temporarily in encrypted form and is not shared with third parties.
              </p>

              <h2 className="mt-30">4. Media Handling</h2>
              <p>
                Uploaded images are stored in secure storage and not publicly accessible. No compression or transformation is applied. Images are retained indefinitely unless deletion is requested. EXIF and other metadata are stripped.
              </p>

              <h2 className="mt-30">5. Data Retention and Deletion</h2>
              <p>
                Data is retained indefinitely for operational continuity. When an account is deleted, data is soft-deleted—hidden from view but retained in backups. Backup data also persists indefinitely. Users may request full deletion, which will be completed within 14–21 days, including removal from active systems and backups.
              </p>

              <h2 className="mt-30">6. Third-Party Services</h2>
              <p>
                We use third-party providers including Firebase Messaging, Crashlytics, and Resend for essential system functions. These providers maintain security and confidentiality obligations. Future integrations may include Stripe for payments and Power BI for reporting.
              </p>

              <h2 className="mt-30">7. User Rights</h2>
              <p>
                Users have the right to request access, correction, or deletion of their personal data. Requests can be made to privacy@myfitnessroomconcierge.com and will be fulfilled within 14–21 days.
              </p>

              <h2 className="mt-30">8. Notifications and Permissions</h2>
              <p>
                The app may request camera and notification permissions to support service functions. No location tracking or background activity is used.
              </p>

              <h2 className="mt-30">9. Data Breach Notification</h2>
              <p>
                Fitness Room Concierge, LLC monitors security through Crashlytics, GCP logs, IAM, and VPC configurations. In the event of a data breach, affected users will be notified in accordance with applicable U.S. laws.
              </p>

              <h2 className="mt-30">10. Updates to this Policy</h2>
              <p>
                We may update this Privacy Policy periodically. The most recent version will always be posted within the app and on our website.
              </p>

              <h2 className="mt-30">11. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>

              <h2 className="mt-30">12. Contact</h2>
              <p>
                For any privacy-related questions or data requests, contact us at:<br />
                <strong>Email:</strong> privacy@myfitnessroomconcierge.com<br />
                <strong>Address:</strong> 721 Aunt Clara Rd, Burgettstown, PA 15021
              </p>

              <div className="ltn__blog-tags-social-media mt-80 row">
                <div className="col-lg-12">
                  <div className="ltn__newsletter-area section-bg-1 pt-50 pb-50">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title-area text-center">
                            <h6 className="section-subtitle ltn__secondary-color">
                              Your Privacy Matters
                            </h6>
                            <h1 className="section-title">
                              Have Privacy Concerns?<br />
                              We're Here to Help
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;

