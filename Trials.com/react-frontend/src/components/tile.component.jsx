import React from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin-bottom: 8px;
  border-radius: 2px;
  padding: 8px;
  border: 1px solid black;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};

  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: grey;
  border-radus: 4px;
`;

export default class Tile extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.tile.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} />
            {this.props.tile.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
