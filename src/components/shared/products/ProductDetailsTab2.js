import Link from "next/link";
import TabDescription from "./TabDescription";
import ProductDetailsReviews from "./ProductDetailsReviews";
import countCommentLength from "@/libs/countCommentLength";
import ProductComments from "./ProductComments";

const ProductDetailsTab2 = ({ product }) => {
    const { reviews, comments,title,long_desc } = product ? product : {};

    // variables
    const reviewsLength = countCommentLength(reviews);
    const commentsLength = countCommentLength(comments);
    return (
        <div className="ltn__shop-details-tab-area pb-115">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__shop-details-tab-inner">
                            <div className="ltn__shop-details-tab-menu">
                                <div className="nav">
                                    <Link
                                        className="active show"
                                        data-bs-toggle="tab"
                                        href="#liton_tab_details_1_1"
                                    >
                                        Description
                                    </Link>{" "}
                                    <Link
                                        data-bs-toggle="tab"
                                        href="#liton_tab_details_1_4"
                                        className=""
                                    >
                                        Shipping Policy
                                    </Link>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade active show"
                                    id="liton_tab_details_1_1"
                                >
                                    <TabDescription desc={long_desc} title={title} />
                                </div>
                                <div className="tab-pane fade" id="liton_tab_details_1_4">
                                    <div className="ltn__shop-details-tab-content-inner">
                                        <h4 className="title-2">Shipping and Delivery Policy</h4>
                                        <p>
                                            We continuously have gently used, serviced and brand new equipment circulating through our warehouse. All equipment is located in Oakdale, PA, just outside of Pittsburgh, PA. However, our services know no boundaries!
                                        </p>
                                        <ul>
                                            <li>Pickup available in Oakdale, PA at no additional cost</li>
                                            <li>Delivery and installation available for additional cost</li>
                                            <li>Professional delivery and setup services available</li>
                                            <li>We work with you on availability, package deals and pricing</li>
                                            <li>Contact us to discuss delivery options and scheduling</li>
                                        </ul>
                                        <p>
                                            For specific pieces of strength and/or cardio equipment, please call (412) 520-5857 or email us with your name, contact information and what type of fitness equipment pieces you are searching for. We can work with you on availability, package deals and pricing!
                                        </p>
                                        <p>
                                            <strong>Contact Information:</strong><br />
                                            Phone (Call ONLY): (412) 520-5857<br />
                                            Email: dravaknabe@myfitnessroomconcierge.com
                                        </p>
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

export default ProductDetailsTab2;
