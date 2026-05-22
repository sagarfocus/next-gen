const Channels = () => (
  <section className="ph3-channels" aria-labelledby="ph3-channels-title">
    <h2 id="ph3-channels-title">The channel mix that turns on at launch.</h2>
    <p className="lede">
      Four channels go live on day one. Each one is wired to the same attribution dashboard, so
      every booked patient maps back to the source that earned them.
    </p>
    <div className="ph3-cgrid">
      <div className="ph3-ccell">
        <div className="badge">Live · Search</div>
        <div className="name">Google Organic &amp; Local</div>
        <p className="desc">
          SEO push, Google Business Profile optimization, and review velocity working together to
          own the local pack.
        </p>
        <div className="metric">Tracked: Calls &amp; directions</div>
      </div>
      <div className="ph3-ccell">
        <div className="badge">Live · Paid</div>
        <div className="name">Google &amp; Meta Ads</div>
        <p className="desc">
          High-intent search plus geo-targeted social, each with its own cost-per-booking ceiling
          that we defend week over week.
        </p>
        <div className="metric">Tracked: Cost / booked patient</div>
      </div>
      <div className="ph3-ccell">
        <div className="badge">Live · Owned</div>
        <div className="name">Email &amp; Lifecycle</div>
        <p className="desc">
          Re-engagement sequences for past patients and new-lead drips with appointment reminders
          that recover no-shows.
        </p>
        <div className="metric">Tracked: Reactivation rate</div>
      </div>
      <div className="ph3-ccell">
        <div className="badge">Live · Site</div>
        <div className="name">Editorial &amp; Landing</div>
        <p className="desc">
          Service-line pages and weekly editorial keep your site the authoritative answer for the
          questions your patients ask.
        </p>
        <div className="metric">Tracked: Conversion rate</div>
      </div>
    </div>
  </section>
);

export default Channels;
