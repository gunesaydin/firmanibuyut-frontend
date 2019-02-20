import React, { Component } from 'react';

import './FormDetail.css';

export default class FormDetail extends Component {

  render() {

    return(
      <div className="form-detail-container">
        <div className="form-info-personal">
          <h3>John Doe</h3>
          <p>Bilgisayar Teknolojileri Uzmani</p>
          <p>Universite</p>
          <p>0555-555-55-55</p>
          <p>johndoe@gmail.com</p>
        </div>
        <div className="form-post-date">
          <p>21 Subat 2019</p>
        </div>
        <div className="form-info-business">
          <p><span>Business:</span> Hayir</p>
          <p><span>Country:</span> America</p>

          <p>Yapi Ihtiyaci:</p>
          <ul>
            <li>Yeni isletme kurmak</li>
            <li>Hazir bir isletmeyi devralmak</li>
            <li>Franchise veya sube kurulumu</li>
            <li>Varolan bir sirkete hissedar olmak</li>
          </ul>

          <p>Destek ihtiyaci:</p>
          <ul>
            <li>Sirket kurulumu</li>
            <li>Oturum ve calisma izni</li>
            <li>Kurulus sonrasi duzenli hukuk destek</li>
            <li>Finans ve vergi danismanligi</li>
            <li>Ofis ve yasam ayarlamalari</li>
          </ul>

          <p>Baslamak istediginiz tarih: </p>
          <input type="date"></input>

          <p>Isteklerinizi kisaca ozetleyiniz:</p>
          <p>
            Amerika da şirket kurduktan sonra Amazon.com üzerinde Amerika'dan 
            Kanada'ya dropshippinh yapmak istiyorum.
          </p>
        </div>
      </div>
    );
  }

}