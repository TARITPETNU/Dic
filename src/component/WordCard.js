import React from 'react'
import styled from 'styled-components';
import { DeleteOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(0,0,0,.25);
  /* margin: 16px; */
  padding: 8px;
 // width: 200px;
  border-radius: 4px;

  .top{
    display: flex;
    //mำให้เเยกออกจากกัน
    justify-content: space-between;
    align-items: center;
}
.deleteIcon{
    color: green;
    cursor: pointer;
}
`

const WordCard = (props) => {
    const formateDate = props.createAt ? props.createAt.toLocaleDateString(
        'th-TH',{
            day: 'numeric', 
            month: 'long', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric'
        }) : "";
    return (
        <StyledWrapper>
            <div className='top'>
                <div>
                    <b>{props.word}</b>
                    <span> ({props.types.join(", ")})</span>
                </div>
                <DeleteOutlined
                    className="deleteIcon"
                    onClick={props.onDelete}
                />
            </div>
            <div>
                {props.meanings.join(", ")}
            </div>
            <div>
               Date: {formateDate}
            </div>

        </StyledWrapper>
    )
}

export default WordCard
