import { memo } from 'react';
import shreePhoto from '../../assets/team-thumbs/shree-gauli.jpg';
import bikashPhoto from '../../assets/team-thumbs/bikash-neupane.jpg';
import sonuPhoto from '../../assets/team-thumbs/sagar-dongol.jpg';
import bijeshPhoto from '../../assets/team-thumbs/bijesh-khadgi.jpg';
import sumitPhoto from '../../assets/team-thumbs/sumit-sharma.jpg';
import rahulPhoto from '../../assets/team-thumbs/rahul-roy.jpg';
import bidhitshaPhoto from '../../assets/team-thumbs/bidhitsha-khadka.jpg';
import sagarPhoto from '../../assets/team-thumbs/sagar-timalsina.jpg';

interface Member {
  name: string;
  role: string;
  photo: string;
  tint: 't1' | 't2' | 't3' | 't4';
}

const MEMBERS: Member[] = [
  { name: 'Shree Gauli', role: 'Sr. Marketing Officer', photo: shreePhoto, tint: 't1' },
  {
    name: 'Bikash Neupane',
    role: 'Marketing / IT Project Manager',
    photo: bikashPhoto,
    tint: 't2',
  },
  {
    name: 'Sonu Sagar Dongol',
    role: 'Paid Ads Specialist / Media Buyer',
    photo: sonuPhoto,
    tint: 't3',
  },
  { name: 'Bijesh Khadgi', role: 'Social Media Manager', photo: bijeshPhoto, tint: 't4' },
  { name: 'Sumit Sharma', role: 'SEO Manager', photo: sumitPhoto, tint: 't1' },
  { name: 'Rahul Roy', role: 'Content Writer', photo: rahulPhoto, tint: 't2' },
  { name: 'Bidhitsha Khadka', role: 'Graphics Designer', photo: bidhitshaPhoto, tint: 't3' },
  { name: 'Sagar Timalsina', role: 'Software Developer', photo: sagarPhoto, tint: 't4' },
];

const TeamCard = memo(({ member }: { member: Member }) => (
  <article className="tm-card">
    <div className={`tm-avatar ${member.tint}`}>
      <img
        src={member.photo}
        alt={member.name}
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
      />
    </div>
    <p className="tm-card-eyebrow">TheNextGen Healthcare Marketing</p>
    <h3 className="tm-card-name">{member.name}</h3>
    <p className="tm-card-role">{member.role}</p>
  </article>
));
TeamCard.displayName = 'TeamCard';

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
            <TeamCard key={m.name} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
