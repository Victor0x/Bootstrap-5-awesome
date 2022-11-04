import React from "react";
import {Container,Col,Row,Accordion} from "react-bootstrap";

const FaqComp = () => {

  return(
    <div className="faq">
      <Container>
        <Row className="mb-5">
          <Col>
          <h2 className="text-center fw-bold">Yang Biasa Di Tanyakan</h2>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2  row-cols-1 g-4"> 
        <Col>
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apakah Kalian Sedang Senang?</Accordion.Header>
        <Accordion.Body>
          Ya saya sedang senang karena saya menjalani hidup ini dengan ikhlas dan saya juga
          saling berbagi sesama umat kaum muslimin supaya saya mendapat pahala dari allah swt
          dan saya juga hidup dengan sederhana tidak bergantung kepada harta yang saya dapat.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
         </Col> 
        <Col>
          <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Apakah Tempatnya Nyaman?</Accordion.Header>
        <Accordion.Body>
         Ya tempat saya nyaman sekali dan saya juga saling berbagi kepada setiap umat manusia
         oleh karena itu saya mendapatkan tempat yang nyaman dan aman lagi bersih untuk saya
         sholat dan beraktivitas lainnya oleh karena itu saya mendapatkan temoat yang nyaman.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
         </Col> 
          <Col>
          <Accordion>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Apakah Ada Wifinya</Accordion.Header>
        <Accordion.Body>
         Hhhhmmmm saya punya wi-fi sih tapi jarang di isi karena saya tidak
         ada waktu untuk memperpanjang wi-finya dan alasan saya jarang memperpanjang 
         wi-fi saya adalah karena saya sibuk di luar rumah jadi percuma saya 
         memperpanjang wi-fi saya sedangkan saya sering di luar rumah.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Bagaimana Lingkungan Di Sekitarnya?</Accordion.Header>
        <Accordion.Body>
         Alhamdulillah lingkungan di sekitar saya orangnya ramah dan
         baik kepada para tetangganya dan juga saling membantu ketika tetangganya 
         ada masalah atau terjadi kemalangan yang menimpa tetangga.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Sudah Beroperasi Berapa Lama?</Accordion.Header>
        <Accordion.Body>
         Hhhmmmm website ini sudah beroperasi sejak tahun 2009 dan saya 
         adalah sebagai developer dan perancang website tersebut dan di bantu
         oleh para programmer lainnya untuk menyelesaikan website ini dengan bekerja sama.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Apakah Sudah Terverifikasi Dengan Baik?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Berapa Kapasitas Maksimal Penginap?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
          <Col>
          <Accordion>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Apakah Cocok Untuk Anak-Anak?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );


};
export default FaqComp;