import React from "react";
import ProfileData from "../data/user-profile-data.jsx";
import Column from "../components/column.component.jsx";
import { DragDropContext } from "react-beautiful-dnd";

class profileView extends React.Component {
  state = ProfileData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTileIds = Array.from(column.tileIds);
    newTileIds.splice(source.index, 1);
    newTileIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      tileIds: newTileIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tiles = column.tileIds.map(
            (tileId) => this.state.tiles[tileId]
          );

          return <Column key={column.id} column={column} tiles={tiles} />;
        })}
      </DragDropContext>
    );
  }
}

export default profileView;
