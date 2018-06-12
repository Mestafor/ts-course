import * as React from 'react';

export class Header extends React.Component<any> {
  public onChange = ({ target: { value } }: { target: HTMLInputElement }) => {
    this.props.onSearch()
  };

  public render(): JSX.Element {
    return (
      <div className="">
        Search: <input type="text" onChange={this.onChange} />
      </div>
    )
  }
}