import React from "react";
import {markdownToHtml} from "netlify-cms-widget-markdown/dist/esm/serializers";

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

const ContactEntry = ({heading, text, telephone, email}) =>
  <div className="ph2-ns w-50-ns mb4">
    <h4 className="f4 b lh-title mb2 primary">{ heading }</h4>
    <ul>
      <li>{ text }</li>
      <li>
        <div dangerouslySetInnerHTML={{
          __html: markdownToHtml(telephone)
        }}></div>
      </li>
      <li><a href="mailto:{ email }">{ email }</a></li>
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
    return <div>
      <HeadTitle title={entry.getIn(["data", "title"])} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3">
          <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" className="db center mb3" />
          <ContactEntries data={contactEntries} />
          { widgetFor("body") }
        </div>
      </div>
    </div>;
  }
}
