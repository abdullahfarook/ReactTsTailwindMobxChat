import * as React from "react";
import { observer } from "mobx-react";
import { FieldState } from "formstate";

@observer
export class FieldInput extends React.Component<{
  field: FieldState<string>
}>{
  render() {
    return (
      <input
        className="border-2 border-gray-300 rounded-md p-2 w-full"
        value={this.props.field.value}
        onChange={e => this.props.field.onChange(e.currentTarget.value)}
      />
    );
  }
}
