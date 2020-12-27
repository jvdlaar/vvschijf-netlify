import React from "react";
import format from "date-fns/format";

const PageDate = ({date}) => date
  ? <div className="flex justify-between grey-3"><p className="mid-gray lh-title mb2">{ format(date, "dd-MM-YYYY") }</p></div>
  : ''
;

const PageImage = ({image}) => image ? <img src="{image}"/> : '';

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="mw7 center ph3 pv4">
      <PageDate date={entry.getIn(["data", "date"])} />
      <div className="cms">
        <p><em>{ entry.getIn(["data", "description"]) }</em></p>
        <PageImage image={entry.getIn(["data", "image"])} />

        { widgetFor("body") }
      </div>
    </div>
    ;
  }
}
