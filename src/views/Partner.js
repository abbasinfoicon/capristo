import React from 'react'

const Partner = () => {
  return (
    <>
      <div className="bg__partners" style={{backgroundImage: 'url(assets/img/earth.png)'}}></div>
      
      <section className="page-area mt-50 mb-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="partner_area">
                <div className="block_center">
                  <h3>Find supplier near you</h3>
                  <div className="input_select">
                    <input type="text" name="" id="" className="form-control" placeholder="america" />
                    <i className="fa fa-angle-right"></i>
                  </div>
                  <h4>Taurino Racing LLC</h4>
                  <ul>
                    <li><a href="#"><img src="assets/img/phone.png" alt="" />+1 (561) 882-9885</a></li>
                    <li><a href="#"><img src="assets/img/map.png" alt="" />4188 Westroads Drive, STE 126, Florida
                      33407</a></li>
                    <li><a href="#"><img src="assets/img/email.png" alt="" /> info@taurinoracing.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Partner