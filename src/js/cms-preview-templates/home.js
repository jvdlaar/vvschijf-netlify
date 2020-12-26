import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const title = entry.getIn(["data", "blurb", "heading"]);

    let titleFormatted = <div className="f4-ns f5 b di lh-title mb3 white mw6 pa1"></div>;
    if (title) {
      titleFormatted = <h1 className="f4-ns f5 b di lh-title mb3 white mw6 bg-primary pa1">{title}</h1>;
    }

    const subtitle = entry.getIn(["data", "blurb", "text"]);
    let subtitleFormatted = '';
    if (subtitle) {
      subtitleFormatted = <p className="b f6 di lh-title mb3 white mw6 bg-primary pa1">{subtitle}</p>;
    }

    return <div className="pv4 pv5-l ph3 bg-center cover w-100 br1" style="background-image: url('/files/header_dames.jpg')">
      <div className="mw7 right-1 ph3">
        <div className="db mb3">
          <div className="mw7 relative bg-fix-primary mb3">{titleFormatted}</div>
          <div className="mw7 relative bg-fix-primary">{subtitleFormatted}</div>
        </div>
      </div>
    </div>;
  }
}
