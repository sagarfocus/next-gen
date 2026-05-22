const Stack = () => (
  <section className="ph2-stack" aria-labelledby="ph2-stack-title">
    <div className="ph2-stack-head">
      <span className="lbl">/ 03</span>
      <h2 id="ph2-stack-title">Eleven tools, one source of truth.</h2>
      <span className="count">5 categories · HIPAA-aware</span>
    </div>

    <div className="ph2-stack-grid">
      <div className="ph2-stack-row">
        <div className="ph2-stack-cat">
          <div className="n">/ A</div>
          <div className="t">Analytics &amp; attribution</div>
          <p className="d">The shared truth every other tool reports into.</p>
        </div>
        <div className="ph2-stack-tools">
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />GA4</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Search Console</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Looker Studio</span>
        </div>
      </div>

      <div className="ph2-stack-row">
        <div className="ph2-stack-cat">
          <div className="n">/ B</div>
          <div className="t">Conversion &amp; tracking</div>
          <p className="d">Every form, call, and click attributed to its source.</p>
        </div>
        <div className="ph2-stack-tools">
          <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />CallRail</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />GTM</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />Hotjar</span>
        </div>
      </div>

      <div className="ph2-stack-row">
        <div className="ph2-stack-cat">
          <div className="n">/ C</div>
          <div className="t">Patient comms</div>
          <p className="d">AI triage on the site, two-way SMS into the front desk.</p>
        </div>
        <div className="ph2-stack-tools">
          <span className="ph2-tool" style={{ ['--td' as never]: '#576DB5' } as React.CSSProperties}><i className="dot" />Intercom</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#576DB5' } as React.CSSProperties}><i className="dot" />Twilio</span>
        </div>
      </div>

      <div className="ph2-stack-row">
        <div className="ph2-stack-cat">
          <div className="n">/ D</div>
          <div className="t">CRM &amp; pipeline</div>
          <p className="d">Where every booked patient lands, scored and tracked.</p>
        </div>
        <div className="ph2-stack-tools">
          <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />HubSpot</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#B38B6D' } as React.CSSProperties}><i className="dot" />Zapier</span>
        </div>
      </div>

      <div className="ph2-stack-row">
        <div className="ph2-stack-cat">
          <div className="n">/ E</div>
          <div className="t">Search &amp; paid surfaces</div>
          <p className="d">The channels the strategy turns on in Phase 03.</p>
        </div>
        <div className="ph2-stack-tools">
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Ads</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Meta Ads</span>
          <span className="ph2-tool" style={{ ['--td' as never]: '#5C8A5C' } as React.CSSProperties}><i className="dot" />Google Business Profile</span>
        </div>
      </div>
    </div>
  </section>
);

export default Stack;
