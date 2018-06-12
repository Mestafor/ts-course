import * as React from 'react';
import { Item } from '../../reducers/items.reducer';

const imgStyle: React.CSSProperties = {
  width: '150px',
  float: 'left'
}

export class Content extends React.Component<any> {

  public componentDidMount(): void {
    console.log(this.props);
    this.props.getItems();
  }

  public render(): JSX.Element {
    const { items, searchTerm } = this.props;

    return (
      <div className="">
        {Array.isArray(items) && items.filter((item: Item) => {
          return item.firstName.toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        }).map((item: Item, index: number) => {
          return (
            <div key={index}>
              {item.photo && <img src={item.photo} style={imgStyle} />}
              <div>{item.surname}</div>
              <div>{item.firstName} {item.surname}</div>
              
            </div>
          );
        })}
      </div>
    )
  }
}