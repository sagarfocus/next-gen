import shreePhoto from '../../assets/shree-gauli.png';
import bikashPhoto from '../../assets/bikash-neupane-P8v2nMWX.png';
import sonuPhoto from '../../assets/sagar-dongol-G5GPLIyG.png';
import bijeshPhoto from '../../assets/bijesh-khadgi-DPyt6Qkz.png';
import sumitPhoto from '../../assets/sumit-sharma-HnVUkwl7.png';
import rahulPhoto from '../../assets/rahul-roy-B61XUb_I.png';
import bidhitshaPhoto from '../../assets/bidhitsha-khadka-BhV_Y1ex.png';
import sagarPhoto from '../../assets/sagar-timalsina-BFG2qcdc.png';

interface Member {
  name: string;
  role: string;
  photo: string;
  tint: 't1' | 't2' | 't3' | 't4';
}

const MEMBERS: Member[] = [
  { name: 'Shree Gauli', role: 'Sr. Marketing Officer', photo: shreePhoto, tint: 't1' },
  { name: 'Bikash Neupane', role: 'Marketing / IT Project Manager', photo: bikashPhoto, tint: 't2' },
  { name: 'Sonu Sagar Dongol', role: 'Paid Ads Specialist / Media Buyer', photo: sonuPhoto, tint: 't3' },
  { name: 'Bijesh Khadgi', role: 'Social Media Manager', photo: bijeshPhoto, tint: 't4' },
  { name: 'Sumit Sharma', role: 'SEO Manager', photo: sumitPhoto, tint: 't1' },
  { name: 'Rahul Roy', role: 'Content Writer', photo: rahulPhoto, tint: 't2' },
  { name: 'Bidhitsha Khadka', role: 'Graphics Designer', photo: bidhitshaPhoto, tint: 't3' },
  { name: 'Sagar Timalsina', role: 'Software Developer', photo: sagarPhoto, tint: 't4' },
];

const TeamGrid = () => {
  return (
    <section className="tm-section">
      <div className="container-shell">
        <div className="tm-marker">
          <span className="tm-marker-num">02</span>
          <span>The Team</span>
          <span className="tm-marker-line" />
          <span className="tm-marker-meta">08 specialists</span>
        </div>

        <div className="tm-team">
          {MEMBERS.map((m) => (
            <article key={m.name} className="tm-card">
              <div className={`tm-avatar ${m.tint}`}>
                <img src={m.photo} alt={m.name} loading="lazy" />
              </div>
              <p className="tm-card-eyebrow">Focus Marketing</p>
              <h3 className="tm-card-name">{m.name}</h3>
              <p className="tm-card-role">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
