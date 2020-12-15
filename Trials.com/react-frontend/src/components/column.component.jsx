import React from "react";

import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Tile from "../components/tile.component.jsx";

const Container = styled.div`
  margin: 8px;
  border-radius: 2px;

  border: 1px solid black;
`;

const Title = styled.div`
  padding: 8px;
`;

const TileList = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TileList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tiles.map((tile, index) => (
                <Tile key={tile.id} tile={tile} index={index} />
              ))}
              {provided.placeholder}
            </TileList>
          )}
        </Droppable>
      </Container>
    );
  }
}
