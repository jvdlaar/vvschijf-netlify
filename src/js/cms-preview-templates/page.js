import React from "react";
import format from "date-fns/format";

const HeadTitle = ({title}) => <div class="pv4 pv5-l ph3 bg-center cover w-100 br1 header-dames">
  <div class="mw7 right-1 ph3">
    <div class="db mb3">
      <div class="mw7 relative bg-fix-primary mb3">
        <h1 class="f4-ns f5 b di lh-title mb3 white mw6 bg-primary pa1">{title}</h1>
      </div>
      <div class="mw7 relative bg-fix-primary"></div>
    </div>
  </div>
</div>
;

const PageDate = ({date}) => (date
  ? <div class="flex justify-between grey-3"><p class="mid-gray lh-title mb2">{ format(date, "DD-MM-YYYY") }</p></div>
  : "")
;

const PageHeadImage = ({image}) => (image ? <img src={image} /> : "");
const PageImage = ({image}) => <div class="ph2-ns w-50-ns"><img src={image} class="center db mb3" width="240" /></div>;
//240px


export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset, widgetsFor} = this.props;
    const image = entry.getIn(["data", "image"]);
    const images = entry.getIn(["data", "images"]) ? widgetsFor("images").map((image) => <PageImage image={getAsset(image.getIn(["data", "image"]))} />) : "";

    return <div>
      <HeadTitle title={entry.getIn(["data", "title"])} />
      <div class="mw7 center ph3 pv4">
        <PageDate date={entry.getIn(["data", "date"])} />
        <div class="cms">
          <p><em>{ entry.getIn(["data", "description"]) }</em></p>
          <PageHeadImage image={image ? getAsset(image) : null} />

          {widgetFor("body")}

          <div class="flex-ns mhn2-ns mb3">{images}</div>
        </div>
      </div>
    </div>
    ;
  }
}
