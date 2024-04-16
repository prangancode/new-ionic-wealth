import React from 'react';
import HeaderNavbar from '../../Shared/Header/HeaderNavbar/HeaderNavbar';
import breadcrumbimg from '../../../images/breadcrumb/breadcrumbSL-1.jpg';
import Footer from '../../Shared/Footer/Footer';

const TermsandConditions = () => {
    return (
        <>
            <HeaderNavbar />

            <section className="breadcrumb-section bg-img-c" style={{ backgroundImage: "url(" + breadcrumbimg + ")" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <h1 className="page-title underline decoration-sky-400 underline-offset-8 uppercase">Terms and Conditions</h1>
                    </div>
                </div>
            </section>
            <main id="terms_page" className="terms-page pt-16 md:pt-20">
                <section className="py-8 lg:py-12">
                    <div className="container">
                        <h2 className="text-3xl mb-8">Website Terms and Conditions of Use</h2>

                        <h3 className="text-xl mt-6 mb-2">1. Terms</h3>

                        <p>
                            By accessing this Website, accessible from https://carrev.web.app/, you are agreeing to
                            be bound by these Website Terms and Conditions of Use and agree that you are responsible for
                            the agreement with any applicable local laws. If you disagree with any of these terms, you
                            are prohibited from accessing this site. The materials contained in this Website are
                            protected by copyright and trade mark law.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">2. Use License</h3>

                        <p>
                            Permission is granted to temporarily download one copy of the materials on carrev's
                            Website for personal, non-commercial transitory viewing only. This is the grant of a
                            license, not a transfer of title, and under this license you may not:
                        </p>

                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose or for any public display;</li>
                            <li>attempt to reverse engineer any software contained on carrev's Website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>
                                transferring the materials to another person or "mirror" the materials on any other
                                server.
                            </li>
                        </ul>

                        <p>
                            This will let carrev to terminate upon violations of any of these restrictions. Upon
                            termination, your viewing right will also be terminated and you should destroy any
                            downloaded materials in your possession whether it is printed or electronic format. These
                            Terms of Service's another online copy can be found{' '}
                            <a href="https://www.termsofservicegenerator.net/live.php?token=bDLZAD9tgb8BUUb1mo4FklsPSdlDDXoC" target="_blank" rel="noreferrer" className="text-blue-600">here</a>.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">3. Disclaimer</h3>

                        <p>
                            All the materials on carrev’s Website are provided "as is". carrev makes no
                            warranties, may it be expressed or implied, therefore negates all other warranties.
                            Furthermore, carrev does not make any representations concerning the accuracy or
                            reliability of the use of the materials on its Website or otherwise relating to such
                            materials or any sites linked to this Website.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">4. Limitations</h3>

                        <p>
                            carrev or its suppliers will not be hold accountable for any damages that will arise
                            with the use or inability to use the materials on carrev’s Website, even if carrev
                            or an authorize representative of this Website has been notified, orally or written, of the
                            possibility of such damage. Some jurisdiction does not allow limitations on implied
                            warranties or limitations of liability for incidental damages, these limitations may not
                            apply to you.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">5. Revisions and Errata</h3>

                        <p>
                            The materials appearing on carrev’s Website may include technical, typographical, or
                            photographic errors. carrev will not promise that any of the materials in this Website
                            are accurate, complete, or current. carrev may change the materials contained on its
                            Website at any time without notice. carrev does not make any commitment to update the
                            materials.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">6. Links</h3>

                        <p>
                            carrev has not reviewed all of the sites linked to its Website and is not responsible
                            for the contents of any such linked site. The presence of any link does not imply
                            endorsement by carrev of the site. The use of any linked website is at the user’s own
                            risk.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">7. Site Terms of Use Modifications</h3>

                        <p>
                            carrev may revise these Terms of Use for its Website at any time without prior notice.
                            By using this Website, you are agreeing to be bound by the current version of these Terms
                            and Conditions of Use.
                        </p>

                        <h3 className="text-xl mt-6 mb-2">8. Your Privacy</h3>

                        <p>Please read our Privacy Policy.</p>

                        <h3 className="text-xl mt-6 mb-2">9. Governing Law</h3>

                        <p>
                            Any claim related to carrev's Website shall be governed by the laws of bd without
                            regards to its conflict of law provisions.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default TermsandConditions;