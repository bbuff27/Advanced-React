import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './Item';
import { Center, ItemsList } from '../components/styles/ItemStyles';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
      image
      largeImage
      price
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {({data, error, loading}) => {
            if(loading) return <p>Loading....</p>
            if(error) return <p>Error: {error.message}</p>
            return <ItemsList>
              {data.items.map(item => (
                <Item item={item} key={item.id}></Item>
              ))}
            </ItemsList>
          }}
        </Query>
      </Center>
    );
  }
}

export default Items;