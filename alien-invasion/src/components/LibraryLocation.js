import React, { PureComponent } from "react";
import LibraryDescription from "./LibraryDescription";

export default class LibraryLocation extends PureComponent {
  render() {
    const { info } = this.props;

    const libraries = (
      <div>
        {this.props.libraries.map((library, index) => (
          <LibraryDescription key={index} library={library} />
        ))}
      </div>
    );

    return <div>{libraries}</div>;
  }
}
