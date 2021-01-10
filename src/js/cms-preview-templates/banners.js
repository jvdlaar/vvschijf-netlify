import React from "react";

const Banner = ({link, title, image}) =>
  (link ? <div class="ph1-ns w-33-ns flex banner"><a href={link} rel="noopener" target="_blank" title={title}><img src={image} alt={title} /></a></div>
    : <div class="ph1-ns w-33-ns flex banner"><img src={image} alt={title} /></div>)
;

export default class BannersPreview extends React.Component {
  render() {
    const {entry, widgetsFor, getAsset} = this.props;
    widgetsFor("banners").map(({link, title, image}) => console.log(link));
    const banners = widgetsFor("banners").map(({link, title, image}) => <Banner link={link} title={title} image={getAsset(image)} />);

    return <div class="bg-off-white pv4">
      <div class="ph3 mw7 center">
        <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">
          {banners}
        </div>
      </div>
    </div>;
  }
}
