import React from "react";

const Sponsor = ({link, title, image}) =>
  (link ? <div class="ph2-ns mb4"><a href={link} rel="noopener" target="_blank" title={title}><img src={image} alt={title} /></a></div>
    : <div class="ph2-ns mb4"><img src={image} alt={title} /></div>)
;

export default class SponsoringPreview extends React.Component {
  render() {
    const {entry, widgetsFor, widgetFor, getAsset} = this.props;
    const top = widgetsFor("top").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const clothing = widgetsFor("clothing").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const boarding = widgetsFor("boarding").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const ball = widgetsFor("ball").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const materials = widgetsFor("materials").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const website = widgetsFor("website").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);
    const canteen = widgetsFor("canteen").map((sponsor) => <Sponsor link={sponsor.getIn(["data", "link"])} title={sponsor.getIn(["data", "title"])} image={getAsset(sponsor.getIn(["data", "image"]))} />);

    return <div>
      <HeadTitle title={entry.getIn(["data", "title"])} />
      <div class="mw7 center ph3 pv4">
        <div class="cms">
          {widgetFor("body")}

          <h2 className="f4 b lh-title mb2 primary">Topsponsor</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {top}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Kleding</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {clothing}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Reclamebord</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {boarding}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Wedstrijdbal</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {ball}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Materiaalsponsor</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {materials}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Websitesponsor</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {website}
          </div>

          <h2 className="f4 b lh-title mb2 primary">Kantinesponsor</h2>
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {canteen}
          </div>
        </div>
      </div>
    </div>
  }
}
