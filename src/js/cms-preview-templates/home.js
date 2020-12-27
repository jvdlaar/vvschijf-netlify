import React from "react";

const HomeTitle = ({data}) => data
  ? <h1 className="f4-ns f5 b di lh-title mb3 white mw6 bg-primary pa1">{data}</h1>
  : <div className="f4-ns f5 b di lh-title mb3 white mw6 pa1"></div>
;

const HomeSubTitle = ({data}) => data
  ? <p className="b f6 di lh-title mb3 white mw6 bg-primary pa1">{data}</p>
  : ''
;

export default class PostPreview extends React.Component {
  render() {
    const {entry} = this.props;
    const title = entry.getIn(["data", "blurb", "heading"]);
    const subtitle = entry.getIn(["data", "blurb", "text"]);

    return <div className="pv4 pv5-l ph3 bg-center cover w-100 br1" style="background-image: url('/files/header_dames.jpg')">
      <div className="mw7 right-1 ph3">
        <div className="db mb3">
          <div className="mw7 relative bg-fix-primary mb3">
            <HomeTitle data={title} />
          </div>
          <div className="mw7 relative bg-fix-primary">
            <HomeSubTitle data={subtitle} />
          </div>
        </div>
      </div>
    </div>;
  }
}
