import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image src="/logo_center.png" alt="주간보호센터 로고" width={150} height={100} />
        <nav className={styles.nav}>
          <a href="#about">센터 소개</a>
          <a href="#services">서비스 안내</a>
          <a href="#programs">주간 프로그램</a>
          <a href="#gallery">사진 갤러리</a>
          <a href="#contact">상담 및 오시는 길</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>백세시대 주간보호센터</h1>
          <p>전문적인 케어와 따뜻한 돌봄으로 어르신의 삶을 함께합니다.</p>
          <a className={styles.cta} href="#contact">상담 신청하기</a>
        </section>

        <section id="about" className={styles.section}>
          <h2>센터 소개</h2>
          <div className={styles.aboutContent}>
            <p>
              저희 센터는 어르신들의 신체적, 정서적 안정을 최우선으로 생각합니다.<br />
              가족과 같은 따뜻한 환경에서 하루하루 의미 있는 시간을 보내실 수 있도록 다양한 프로그램과 전문 인력을 갖추고 있습니다.
            </p>
            <Image src="/entrance.png" alt="센터 내부 사진" width={500} height={500} className={styles.image} />
          </div>
        </section>

        <section id="services" className={styles.section}>
          <h2>주요 서비스</h2>
          <ul className={styles.services}>
            <li>✔️ 전문 요양보호사의 건강 관리 및 상담</li>
            <li>✔️ 영양 가득한 식사 및 간식 제공</li>
            <li>✔️ 인지·신체 활동 프로그램 (미술, 체조 등)</li>
            <li>✔️ 실시간 차량 이동 서비스 (등·하원)</li>
            <li>✔️ 치매 예방 및 심리 안정 프로그램</li>
            <li>✔️ 가족 상담 및 보호자 지원 프로그램</li>
          </ul>
        </section>

        <section id="programs" className={styles.section}>
          <h2>주간 프로그램 일정</h2>
          <table className={styles.schedule}>
            <thead>
              <tr>
                <th>요일</th>
                <th>오전 프로그램</th>
                <th>오후 프로그램</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>월요일</td>
                <td>미술 치료</td>
                <td>건강 체조</td>
              </tr>
              <tr>
                <td>화요일</td>
                <td>인지 놀이</td>
                <td>노래교실</td>
              </tr>
              <tr>
                <td>수요일</td>
                <td>요리 활동</td>
                <td>원예 치료</td>
              </tr>
              <tr>
                <td>목요일</td>
                <td>보드게임</td>
                <td>영화 감상</td>
              </tr>
              <tr>
                <td>금요일</td>
                <td>건강 체크</td>
                <td>수공예 활동</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="gallery" className={styles.section}>
          <h2>사진 갤러리</h2>
          <div className={styles.gallery}>
            <Image src="/gallery1.jpg" alt="어르신 활동1" width={300} height={200} />
            <Image src="/gallery2.jpg" alt="어르신 활동2" width={300} height={200} />
            <Image src="/gallery3.jpg" alt="어르신 활동3" width={300} height={200} />
            <Image src="/gallery4.jpg" alt="프로그램 참여 모습" width={300} height={200} />
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2>상담 및 오시는 길</h2>
          <p>📍 경기도 군포시 고산로 683 현대아카데미센터 501-503호, 백세시대 주간보호센터</p>
          <p>📞 031-393-0141 | ✉️ hjy2891@naver.com</p>
          <div className={styles.directions}>
            <h3>🚉 대중교통 이용 안내</h3>
            <p>지하철 ○○역 3번 출구에서 도보 5분 거리 / 버스 ○○정류장 하차</p>
            <h3>🚗 자가용 이용 시</h3>
            <p>센터 건물 내 지하주차장 이용 가능 (2시간 무료)</p>
          </div>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?...<센터 주소에 맞는 지도 링크>"
            width="100%"
            height="300"
            loading="lazy"
          ></iframe>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 백세시대 주간보호센터. All rights reserved.</p>
      </footer>
    </div>
  );
}
