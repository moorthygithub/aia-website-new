import React from "react";
import styles from "./corporate-why-aia.module.css";

const CorporateWhyAia = () => {
  return (
    <section className="pt-0 my-16 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="mb-2 text-xl font-semibold text-gray-900">
            Why Choose AIA
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            For <span className="text-orange-500">Corporate Training</span> AIA
          </h2>

          <p className="text-gray-600 leading-relaxed">
            If your website isn't generating leads, sales, or engagement, it
            isn't doing its job. A lot of businesses underestimate the
            importance of a well-structured website. A professional web design
            company ensures your website is aesthetically pleasing; it is also
            functional, responsive, and designed to convert. If you're looking
            for—website designers, web design services, hiring a monthly website
            designer service, or a custom business website, this is the
            advantage you've been searching for. Here is what your business is
            missing:
          </p>
        </div>
        <div className="relative w-full mx-auto">
          <div className={`${styles["work-flow-wrp"]}`} data-wow-delay="0.3s">
            <div className={styles["work-flow-box"]}>
              <div className={styles["work-flow-box-overlay"]}>
                <div className={styles["work-flow-wrp"]}>
                  <div className={styles["work-flow"]}>
                    <div className={styles["work-flow-outer"]}>
                      <div className={styles["work-flow-inner"]}>
                        <div className={styles["work-flow-logo"]}>
                          <img
                            src="https://aia.in.net/webapi/public/assets/images/web_images/new_logo.webp"
                            alt="Web Design Company"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles["work-flow-oval-wrp"]}>
                    <div className={styles["work-flow-oval-item"]}>
                      <img
                        src="https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/ovel-1.png"
                        className={styles["work-flow-oval"]}
                        alt="Web Design Company"
                        loading="lazy"
                      />
                      <span className={styles["work-flow-icon"]}>
                        <img
                          src="https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/s-1.png"
                          alt="Web Design Company"
                          loading="lazy"
                        />
                      </span>
                    </div>

                    {[2, 3, 4, 5, 6].map((num) => (
                      <div key={num} className={styles["work-flow-oval-item"]}>
                        <img
                          src={`https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/ovel-${num}.png`}
                          className={styles["work-flow-oval"]}
                          alt="Web Design Company"
                          loading="lazy"
                        />
                        <span className={styles["work-flow-icon"]}>
                          <img
                            src={`https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/s-${num}.png`}
                            alt="Web Design Company"
                            loading="lazy"
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${styles["workflow-content-list"]}`}>
                {[
                  "A Website Built To Convert Visitors Into Customers",
                  "Fast Loading And Mobile-Friendly Pages",
                  "A Design That Looks Modern And Trustworthy",
                  "Easy Updates And Monthly Maintenance Support",
                  "SEO-Ready Structure For Better Google Rankings",
                  "Clear Calls-To-Action That Drive Results",
                  // "Proven Success",
                  // "Trusted by Corporations",
                  // "Outcome-Driven Learning",
                  // "Measurable ROI",
                  // "Global Expertise & Local Relevance",
                  // "Personalized Training",
                ].map((title, index) => (
                  <div
                    key={index}
                    className={`${styles["workflow-content-list-item"]} `}
                  >
                    <div className={styles["workflow-content-wrap"]}>
                      <img
                        src={`https://www.matebiz.com/wp-content/themes/matebiz/matebiz-new/assests/images/ovel-lin${
                          index + 1
                        }.png`}
                        className={styles["workflow-icon"]}
                        alt="Workflow Icon"
                        loading="lazy"
                      />
                      <div className={styles["workflow-content-number"]}>
                        {`0${index + 1}`}
                      </div>
                      <h3 className={styles["workflow-content-title"]}>
                        {title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateWhyAia;
