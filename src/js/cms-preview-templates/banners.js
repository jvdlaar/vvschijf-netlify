import React from "react";

const Banner = ({link, title, image}) =>
  (link ? <div class="ph1-ns w-33-ns flex"><a href={link} rel="noopener" target="_blank" title={title}><img src={image} alt={title} /></a></div>
    : <div class="ph1-ns w-33-ns flex"><img src={image} alt={title} /></div>)
;

export default class BannersPreview extends React.Component {
  render() {
    const {widgetsFor, getAsset} = this.props;
    const banners = widgetsFor("banners").map((banner) => <Banner link={banner.getIn(["data", "link"])} title={banner.getIn(["data", "title"])} image={getAsset(banner.getIn(["data", "image"]))} />);

    return <div class="bg-off-white pv4">
      <div class="ph3 mw7 center">
        <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">
          {banners}
        </div>
      </div>
    </div>;
  }
}
