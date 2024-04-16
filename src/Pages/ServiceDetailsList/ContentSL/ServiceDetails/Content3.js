import React from 'react';
import servicebanner from '../../../../images/serviceImg/service-01.jpg'
import servicesmallbanner from '../../../../images/serviceImg/service-02.jpg'
const Content3 = () => {
    return (
        <>
            {/* <div className="col-lg-8-servicedetails"> */}
            <div className="service-details-content">
                <div className="main-thumb mb-20">
                    <img src={servicebanner} alt="" />
                </div>
                <h2 className="title">Marketing Strategy</h2>
                <p className='description mb-10'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                    <li>
                        <i className="fas fa-check" />
                        Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                        magnam aliquam quaerat voluptatem enim ad minima veniam quis nostrum
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nmolestiae
                        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu
                    </li>
                    <li>
                        <i className="fas fa-check" />
                        But I must explain to you how all this mistaken idea of denouncing pleasure praising
                        pain was born and I will give you complete account of the system expound
                    </li>
                </ul>
                <div className="row-servicedetails justify-items-center mt-10">
                    <div className="col-lg-6-servicedetails">
                        <div className="image text-center mb-40">
                            <img style={{ width: '100%' }} src={servicesmallbanner} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6-servicedetails">
                        <h3 className="sub-title">How To Buildup Buisness</h3>
                        <p>
                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circumstances occur in which toil and
                            pain can procure him some great pleasure.
                        </p>
                        <ul className="check-list mt-30">
                            <li><i className="fas fa-check" />Business &amp; Consulting Agency</li>
                            <li><i className="fas fa-check" />Awards Winning Business Comapny</li>
                            <li><i className="fas fa-check" />Complete Guide To Mechanical</li>
                            <li><i className="fas fa-check" />Firebase Authentication &amp; Database</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </>
    );
};

export default Content3;