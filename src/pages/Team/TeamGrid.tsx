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
  id: string;
  name: string;
  role: string;
  craft: string;
  photo: string;
  linkedin: string;
}

const MEMBERS: Member[] = [
  {
    id: '02',
    name: 'Shree Gauli',
    role: 'Sr. Marketing Officer',
    craft: 'Strategy',
    photo: shreePhoto,
    linkedin: 'https://www.linkedin.com/in/gauli/',
  },
  {
    id: '03',
    name: 'Bikash Neupane',
    role: 'Marketing / IT Project Manager',
    craft: 'Operations',
    photo: bikashPhoto,
    linkedin: 'https://www.linkedin.com/in/bikash-neupane07/',
  },
  {
    id: '04',
    name: 'Sonu Sagar Dongol',
    role: 'Paid Ads Specialist / Media Buyer',
    craft: 'Paid Media',
    photo: sonuPhoto,
    linkedin: 'https://www.linkedin.com/in/dongol526/',
  },
  {
    id: '05',
    name: 'Bijesh Khadgi',
    role: 'Social Media Manager',
    craft: 'Social',
    photo: bijeshPhoto,
    linkedin: 'https://www.linkedin.com/in/bijesh-khadgi-9121a819a/',
  },
  {
    id: '06',
    name: 'Sumit Sharma',
    role: 'SEO Manager',
    craft: 'Organic',
    photo: sumitPhoto,
    linkedin: 'https://www.linkedin.com/in/sumitsharma101/',
  },
  {
    id: '07',
    name: 'Rahul Roy',
    role: 'Content Writer',
    craft: 'Editorial',
    photo: rahulPhoto,
    linkedin: 'https://www.linkedin.com/in/rahul-roy-485451168/',
  },
  {
    id: '08',
    name: 'Bidhitsha Khadka',
    role: 'Graphics Designer',
    craft: 'Design',
    photo: bidhitshaPhoto,
    linkedin: 'https://www.linkedin.com/in/bidhitsha-khadka-852048315/',
  },
  {
    id: '09',
    name: 'Sagar Timalsina',
    role: 'Software Developer',
    craft: 'Engineering',
    photo: sagarPhoto,
    linkedin: 'https://www.linkedin.com/in/sagar-timalsina-916909321/',
  },
];

const LinkedInGlyph = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
    />
  </svg>
);

const TeamCard = memo(({ member }: { member: Member }) => (
  <article className="ngt-card">
    <div className="ngt-card-photo-wrap">
      <img
        src={member.photo}
        alt={member.name}
        className="ngt-card-photo"
        width={400}
        height={400}
        loading="lazy"
        decoding="async"
      />
      <span className="ngt-card-badge">NEXTGEN HEALTHCARE</span>
    </div>
    <div className="ngt-card-body">
      <span className="ngt-card-craft">{member.craft}</span>
      <h3 className="ngt-card-name">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="ngt-card-link"
          aria-label={`${member.name} on LinkedIn`}
        >
          {member.name}
        </a>
      </h3>
      <p className="ngt-card-role">{member.role}</p>
      <span className="ngt-card-li" aria-hidden="true">
        <LinkedInGlyph />
      </span>
    </div>
  </article>
));
TeamCard.displayName = 'TeamCard';

const TeamGrid = () => {
  return (
    <section className="ngt-section ngt-grid-sec">
      <div className="container-shell">
        <div className="ngt-mark">
          <span className="ngt-mark-num">02</span>
          <span className="ngt-mark-lbl">The Team</span>
          <span className="ngt-mark-line" />
          <span className="ngt-mark-meta">08 specialists · 02 – 09</span>
        </div>

        <header className="ngt-grid-head">
          <h2 className="ngt-grid-h2">
            Eight specialists. <em>One craft each.</em>
          </h2>
          <p className="ngt-grid-lede">
            The people who actually log in on Monday morning — strategy, paid media, organic, code,
            design, content, social and operations. The work doesn&rsquo;t leave the building.
          </p>
        </header>

        <div className="ngt-grid">
          {MEMBERS.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>

        <footer className="ngt-grid-foot" aria-hidden="true">
          <span>NEXTGEN HEALTHCARE — IN-HOUSE TEAM</span>
          <span className="ngt-grid-foot-line" />
          <span>08 / 08</span>
        </footer>
      </div>
    </section>
  );
};

export default TeamGrid;
