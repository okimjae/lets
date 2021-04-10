import styled from 'styled-components';

export const Container = styled.div` 
    margin: 8px;
    border-radius: 8px;
    width: 220px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    background-color: #f4f5f7;
`
export const Title = styled.text`
    padding: 8px;
    background-color: #f4f5f7;
    color: #5e6c84;
    margin: 0;
`

export const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    background-color: #f4f5f7;
`