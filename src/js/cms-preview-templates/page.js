import React from "react";
import format from "date-fns/format";

const HeadTitle = ({title}) => <div className="pv4 pv5-l ph3 bg-center cover w-100 br1 header-dames">
    <div className="mw7 right-1 ph3">
      <div className="db mb3">
        <div className="mw7 relative bg-fix-primary mb3">
          <h1 className="f4-ns f5 b di lh-title mb3 white mw6 bg-primary pa1">{title}</h1>
        </div>
        <div className="mw7 relative bg-fix-primary"></div>
      </div>
    </div>
  </div>
;

const PageDate = ({date}) => date
  ? <div className="flex justify-between grey-3"><p className="mid-gray lh-title mb2">{ format(date, "DD-MM-YYYY") }</p></div>
  : ''
;

const PageHeadImage = ({image}) => image ? <img src={image} /> : '';

const PageImage = ({image}) => <div className="ph2-ns w-50-ns"><img src={image} alt="" className="center db mb3" style="width: 240px" /></div>;

const PageImages = ({images, getAsset}) => images && images.length > 0
  ? <div className="flex-ns mhn2-ns mb3">{images.map(({image}) => <PageImage image={getAsset(image)} />)}</div>
  : ""
;

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = entry.getIn(["data", "image"]);

    return <div>
      <HeadTitle title={entry.getIn(["data", "title"])} />
      <div className="mw7 center ph3 pv4">
        <PageDate date={entry.getIn(["data", "date"])} />
        <div className="cms">
          <p><em>{ entry.getIn(["data", "description"]) }</em></p>
          <PageHeadImage image={image ? getAsset(image) : null} />

          { widgetFor("body") }
          <PageImages images={entry.getIn(["data", "images"])} getAsset={getAsset} />
        </div>
      </div>
    </div>
    ;
  }
}
