// import logo from './logo.svg';
// import './App.css';
//import Text from './component/Text';
import WordCard from '../component/WordCard'
import { Button, Row, Col } from 'antd';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { Input, Select } from 'antd';
import AppContext from '../context/AppContext';
import { ConfigContext } from 'antd/lib/config-provider';
import { Loading3QuartersOutlined } from '@ant-design/icons'
// import { useState } from 'react';

const StyledWrapper = styled.div`
  padding: 20px 10%;
  @media(max-width: 425px)
  {
      padding: 20px 0;
  }  
  .selectType{
    /* min-width: 200px;
    max-width: 500px; */
    width: 100%;
  }
  .form-item{
     

  }
`
const typesOptions = [
  { label: 'noun', value: 'noun' },
  { label: 'verb', value: 'verb' },
  { label: 'adj', value: 'adj' },
  { label: 'adv', value: 'adv' }
]

function Homepage() {
  const [search, setSearch] = useState('');
  const { vocabController } = useContext(AppContext);
  const { vocabs, setVocabs, deleteVocab } = vocabController;
  console.log("Data from context" + vocabs);

  const [number, setNumber] = useState(1);

  const [word, setWord] = useState('Hello');
  const [types, setTypes] = useState(['verb']);
  const [meanings, setMeaning] = useState('สวัสดี');

  const renderVocabs = () => {
    if (!vocabs) {
      return <Loading3QuartersOutlined spin={true} />
    }
    else if (vocabs.length <= 0) {
      return <p>No data</p>
    }
    else {
      return vocabs.filter((item) => {
        return item.word.indexOf(search) >= 0
      }).sort((a, b) => {
        return b.createAt.valueOf() - a.createAt.valueOf()
      }).map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <WordCard {...item} onDelete={() => { deleteVocab(index) }} />
          </Col>
        )
      })
    }
  }

  // const handleDelete = (index) =>{
  //  deleteVocab(index);
  // }
  const str = "Hello"
  //const data = "this is a content"

  return (
    <div className="App">
      <StyledWrapper>
        <h1>My vocab</h1>
        <Input.Search value={search} onChange={e => setSearch(e.target.value)} />
        <Row gutter={[10, 10]}>
          {renderVocabs()}
        </Row>
      </StyledWrapper>
    </div>

  );
}

export default Homepage;
