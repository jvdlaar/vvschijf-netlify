import React from "react";
import format from "date-fns/format";

const PageDate = ({date}) => date
  ? <div className="flex justify-between grey-3"><p className="mid-gray lh-title mb2">{ format(date, "dd-MM-YYYY") }</p></div>
  : ''
;

const PageHeadImage = ({image}) => image ? <img src="{image}"/> : '';

const PageImage = ({image}) => <div className="ph2-ns w-50-ns"><img src="{image}" alt="" className="center db mb3" style="width: 240px"></div>;

const PageImages = ({images}) => images && images.length > 0
  ? <div className="flex-ns mhn2-ns mb3">{images.map(({image}) => <PageImage image={image} />)}</div>
  : ""
;

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="mw7 center ph3 pv4">
      <PageDate date={entry.getIn(["data", "date"])} />
      <div className="cms">
        <p><em>{ entry.getIn(["data", "description"]) }</em></p>
        <PageHeadImage image={getAsset(entry.getIn(["data", "image"]))} />

        { widgetFor("body") }
      </div>
    </div>
    ;
  }
}
