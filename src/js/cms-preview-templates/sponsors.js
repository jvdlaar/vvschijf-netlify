import React from "react";

const Sponsor = ({link, title, image, getAsset}) =>
  link ? <div class="ph1-ns w-33-ns flex banner"><a href={link} rel="noopener" target="_blank" title={title}><img src={image} alt={title} /></a></div>
    : <div class="ph1-ns w-33-ns flex banner"><img src={image} alt={title} /></div>
;

const Sponsors = ({sponsors, getAsset}) => sponsors.map(({link, title, image}) => <Sponsor link={link} title={title} image={image} getAsset={getAsset} />);

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    return <div class="bg-off-white pv4">
      <div class="ph3 mw7 center">
        <div class="w-100 flex-ns mhn1-ns flex-wrap mb3">
         <Sponsors sponsors={entry.getIn('data', 'banners')} getAsset={getAsset} />
        </div>
      </div>
    </div>;
  }
}
