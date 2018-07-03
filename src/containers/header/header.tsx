import * as React from 'react';

export class Header extends React.Component<any> {
  public onChange = (e: { target: HTMLInputElement }) => {
    console.log(e.target.value);
    this.props.onSearch(e.target.value);
  };

  public render(): JSX.Element {
    return (
      <div className="">
        Search: <input type="text" onChange={this.onChange} />
      </div>
    )
  }
}