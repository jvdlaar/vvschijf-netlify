import React from "react";
import {markdownToHtml} from 'netlify-cms-widget-markdown/serializers/index.js';

const ContactEntry = ({heading, text, telephone, email}) =>
  <div className="ph2-ns w-50-ns mb4">
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <ul>
      <li>{ text }</li>
      <li>{ markdownToHtml(telephone) }</li>
      <li>{ markdownToHtml(email) }</li>
    </ul>
  </div>;

const ContactEntries = ({data}) => data && data.length > 0
    ? <div className="flex-ns flex-wrap mhn2-ns mb3">
      {data.map(({heading, text, telephone, email}) => <ContactEntry heading={heading} text={text} telephone={telephone} email={email} />)}
    </div>
    : "";

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];
    return <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db w4 center pv4" />
        <ContactEntries data={contactEntries} />
        { widgetFor("body") }
      </div>
    </div>;
  }
}
